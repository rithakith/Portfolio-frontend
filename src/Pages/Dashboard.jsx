import React from 'react';
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
import { Link } from 'react-router-dom';

const menuItems = [
  {
    title: "Blogs",
    path: "/option/blogs",
  },
  {
    title: "Competitions",
    path: "/option/competitions",
  },
  {
    title: "Chatbot",
    path: "/chatbot",
  },  {
    title: "Education",
    path: "/education",
  },{
    title: "Skills",
    path:"/option/skills"
  },{
    title: "Projects",
    path:"/projects"
  }
];

const Dashboard = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-900 text-white p-6">
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-6xl font-bold mb-4 animate-fadeIn">Hi Rithara</h1>
        <p className="text-xl animate-bounce">What do you want to change today?</p>
      </div>
      
      <Menu open={openMenu} handler={setOpenMenu} allowHover>
        <MenuHandler>
          <Button
            variant="gradient"
            className="flex items-center gap-3 text-base font-semibold capitalize tracking-normal mt-14 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Change Items
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-4 w-4 transition-transform ${
                openMenu ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList
          className="w-[20rem] border-none bg-transparent grid-cols-1 gap-3 overflow-hidden grid origin-bottom transform scale-y-0 transition-transform duration-300 ease-out hover:scale-y-100 hover:border-none"
        >
          {/* <Card
            variant='gradient'
            shadow={false}
            className="flex h-full bg-gradient-to-tr from-gray-900 to-gray-800 w-full items-center justify-center p-6 transition-transform duration-300 border-none transform hover:scale-105 hover:border-none "
          >
            <CursorArrowRaysIcon strokeWidth={1} className="h-12 w-12 text-white" />
            <Typography className="mt-5 text-center text-white" variant="h5">
              Select to change items
            </Typography>
          </Card> */}
          <ul className="flex w-full border-none flex-col gap-3 p-4">
            {menuItems.map(({ title, path }) => (
              <Link to={path} key={title}>
                <MenuItem
                  className="transition-transform duration-300 hover:scale-105 hover:bg-white p-3 rounded-lg"
                >
                  <Typography variant="h6" className="text-center text-black">
                    {title}
                  </Typography>
                </MenuItem>
              </Link>
            ))}
          </ul>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Dashboard;
