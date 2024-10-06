import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Card,
    Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

const OptionPage = () => {
  const { option } = useParams(); // option will be either 'education' or 'skills'
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = React.useState(false);

  // Use the dynamic option from the URL (either 'education' or 'skills')
  const menuItems = [
    {
      title: "Add New",
      path: `/option/${option}/new`, // Path specific to the current option
    },
    {
      title: "Edit",
      path: `/option/${option}/all`, // Path specific to the current option
    },
  ];

  const handleMenuItemClick = (path) => {
    navigate(path); // Directly use the path provided in the menu items
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-orange-500 to-pink-500 text-white p-6 transition-transform duration-300 ease-in-out">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 animate-slideIn left-6 text-white bg-gray-800 p-2 rounded-lg"
      >
        Go Back
      </button>
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-r text-white p-6">
        <div className="flex flex-col items-center mt-20">
          <h1 className="text-6xl font-bold mb-4 text-center animate-slideIn">
            Welcome to {option}
          </h1>
          <p className="text-xl animate-bounce animate-slideIn">
            What do you want to do today?
          </p>
        </div>

        <Menu open={openMenu} handler={setOpenMenu} allowHover>
          <MenuHandler>
            <Button
              variant="gradient"
              className="flex items-center gap-3 text-base font-semibold animate-slideIn capitalize tracking-normal mt-10 transition-transform duration-300 ease-in-out hover:scale-105"
            >
              Change Items
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-4 w-4 transition-transform ${openMenu ? 'rotate-180' : ''}`}
              />
            </Button>
          </MenuHandler>
          <MenuList className="w-[20rem] border-none bg-transparent grid-cols-1 gap-3 overflow-hidden lg:grid origin-bottom transform scale-y-0 transition-transform duration-300 ease-out hover:scale-y-100 hover:border-none">
            <Card
              variant="gradient"
              shadow={false}
              className="flex animate-slideIn h-full bg-gradient-to-tr from-gray-900 to-gray-800 w-full items-center justify-center p-6 transition-transform duration-300 border-none transform hover:scale-105 hover:border-none"
            >
              <CursorArrowRaysIcon strokeWidth={1} className="h-12 w-12 text-white" />
              <Typography className="mt-5 text-center text-white animate-slideIn" variant="h5">
                Select to change items
              </Typography>
            </Card>
            <ul className="flex w-full border-none flex-col gap-3 p-4">
              {menuItems.map(({ title, path }) => (
                <MenuItem
                  key={title}
                  className="transition-transform duration-300 hover:scale-105 hover:bg-white p-3 rounded-lg"
                  onClick={() => handleMenuItemClick(path)} // Use the correct path for navigation
                >
                  <Typography variant="h6" className="animate-slideIn text-center text-black">
                    {title}
                  </Typography>
                </MenuItem>
              ))}
            </ul>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default OptionPage;
