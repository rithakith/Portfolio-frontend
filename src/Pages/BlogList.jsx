import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app element for accessibility

const BlogList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [link, setLink] = useState(''); // New state for the blog link
  const [image, setImage] = useState(null);
  const [blogs, setBlogs] = useState([]); // State to store the list of blogs

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:3000/blogs'); // Fetch blogs from the server
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data); // Assuming data is an array of blog objects
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array means this runs once on mount

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    // Reset the form
    setTitle('');
    setContent('');
    setLink(''); // Reset the link input
    setImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create a FormData object to send the image along with other data
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('link', link); // Append the link to the form data
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch('http://localhost:3000/blogs', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Blog submitted:', data);

      // Re-fetch the blogs after submission
      const blogsResponse = await fetch('http://localhost:3000/blogs');
      const blogsData = await blogsResponse.json();
      setBlogs(blogsData); // Update the blogs state with the new list

      handleCloseModal(); // Close the modal after submission
    } catch (error) {
      console.error('Error submitting blog:', error);
    }
  };

  return (
    <div className='text-white p-4'>
      <h1 className='text-2xl font-bold mb-4'>Blog List</h1>
      <button 
        onClick={handleOpenModal} 
        className='bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600'
      >
        Create New Blog
      </button>

      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={handleCloseModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        contentLabel="Create New Blog Modal"
      >
        <div className="bg-gray-800 text-white rounded-lg p-6 w-96">
          <h2 className='text-xl font-semibold mb-4'>Create New Blog</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className='block mb-1'>Title:</label>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
                className='w-full p-2 rounded border border-gray-600 bg-gray-700 text-white'
              />
            </div>
            <div className="mb-4">
              <label className='block mb-1'>Content:</label>
              <textarea 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                required 
                className='w-full p-2 rounded border border-gray-600 bg-gray-700 text-white'
              />
            </div>
            <div className="mb-4">
              <label className='block mb-1'>Blog Link:</label> {/* New input for the link */}
              <input 
                type="url" 
                value={link} 
                onChange={(e) => setLink(e.target.value)} 
                required 
                className='w-full p-2 rounded border border-gray-600 bg-gray-700 text-white'
              />
            </div>
            <div className="mb-4">
              <label className='block mb-1'>Image:</label>
              <input 
                type="file" 
                accept="image/*" 
                onChange={(e) => setImage(e.target.files[0])} 
                className='w-full p-2 rounded border border-gray-600 bg-gray-700 text-white'
              />
            </div>
            <div className="flex justify-between">
              <button 
                type="submit" 
                className='bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600'
              >
                Submit
              </button>
              <button 
                type="button" 
                onClick={handleCloseModal} 
                className='bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700'
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* Render the list of blogs */}
      <div className="mt-6">
        {blogs.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          blogs.map((blog, index) => (
            <div key={index} className="bg-gray-700 p-4 mb-4 rounded">
              <h2 className='text-xl font-semibold'>{blog.title}</h2>
              <img src={`http://localhost:3000/${blog.image}`} alt={blog.title} className="my-2 rounded" />
              <p>{blog.content}</p>
              {blog.link && (
                <a href={blog.link} className="text-pink-400 underline" target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogList;
