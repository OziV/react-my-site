import React from "react";
import Sticky from "react-stickynode";

import { FaInfo } from "react-icons/fa";
import { RiVipCrown2Fill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";
import { MdOutlineContactPhone } from "react-icons/md";

const Sidebar = () => {
  return (
    <Sticky enabled={true} top={50} innerZ={1} className="sticky">
      <ul>
        <li className="sidebar-li">
          <a href="#font-me" className="font-sidebar">
            <FaInfo />
          </a>
        </li>
        <li className="sidebar-li">
          <a href="#font-top-projects" className="font-sidebar">
            <RiVipCrown2Fill />
          </a>
        </li>
        <li className="sidebar-li">
          <a href="#font-projects" className="font-sidebar">
            <AiFillProject />
          </a>
        </li>
        <li className="sidebar-li">
          <a href="#font-contact-me" className="font-sidebar">
            <MdOutlineContactPhone />
          </a>
        </li>
      </ul>
    </Sticky>
  );
};

export default Sidebar;
