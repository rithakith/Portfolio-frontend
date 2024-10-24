import React, { useEffect, useState, useRef } from 'react';

const Education = () => {
  const [data, setData] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/education`);
        if (response.ok) {
          const result = await response.json();
          setData(result.response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // IntersectionObserver logic for triggering the animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add class when the card is in view
            entry.target.classList.add('in-view');
          } else {
            // Remove class when the card is out of view
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (cardsRef.current) {
        cardsRef.current.forEach((card) => {
          if (card) observer.unobserve(card);
        });
      }
    };
  }, [data]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" id='education'>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-12 text-pink-500 font-bold tracking-wider">
          Education Timeline
        </h1>

        <div className="flex flex-col justify-center divide-y divide-green-900 [&>*]:py-16">
          <div className="w-full max-w-3xl mx-auto">
            {/* Vertical Timeline */}
            <div className=" mx-4 space-y-8 md:space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 md:before:bg-colors-pink-1">
              {Array.isArray(data) && data.length > 0 ? (
                data.map((item, index) => (
                  <div
                    key={item._id}
                    ref={(el) => (cardsRef.current[index] = el)} // Assign ref to each card
                    className={`card relative flex flex-col md:flex-row justify-between md:justify-normal ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    } group transition-all duration-500 opacity-0 transform scale-95`} // Initial state
                  >
                    {/* Icon */}
                    <div className="md:flex hidden items-center w-10 h-10 rounded-full text-white shadow-lg bg-colors-pink-1  transition-all duration-500 border-4 border-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative">
                      {/* Hide the connecting line for the last card */}
                      {index !== data.length - 1 && (
                        <div className="absolute top-0 h-full w-0.5 bg-colors-pink-1 left-1/2 transform -translate-x-1/2 z-[-1]"></div>
                      )}
                    </div>

                    {/* Card */}
                    <div className="w-full md:w-[calc(50%-2.5rem)] bg-black p-6 md:p-8 rounded-lg border border-pink-500 shadow-lg hover:shadow-2xl transition-all duration-500 transform group mb-5">
                      {/* Institute and Date Section */}
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 md:mb-6">
                        <div className="font-extrabold text-xl md:text-2xl text-white group-hover:text-pink-500 transition-colors duration-300">
                          {item.institute}
                        </div>
                        <time className="mt-2 sm:mt-0 text-lg font-semibold text-pink-500 group-hover:text-white transition-colors duration-300">
                          {item.startYear} - {item.endYear}
                        </time>
                      </div>

                      {/* Description Section */}
                      <div className="mt-2 md:mt-4">
                        <p className="text-base md:text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-slate-400">Loading...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
