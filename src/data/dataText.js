import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";

export const text_header_buttons = [
  {
    id: 1,
    name: "CV",
    link: process.env.REACT_APP_CV_LINK,
    icon: <BsFillFileEarmarkPersonFill />,
  },
  {
    id: 2,
    name: "LinkedIn",
    link: process.env.REACT_APP_LINKEDIN_LINK,
    icon: <FaLinkedinIn />,
  },
  {
    id: 3,
    name: "GitHub",
    link: process.env.REACT_APP_GITHUB_LINK,
    icon: <FiGithub />,
  },
];

export const text_contact_buttons = [
  {
    id: 1,
    name: "Email",
    link: `mailto: ${process.env.REACT_APP_MAIL}`,
    icon: <MdEmail />,
  },
  {
    id: 2,
    name: "LinkedIn",
    link: process.env.REACT_APP_LINKEDIN_LINK,
    icon: <BsLinkedin />,
  },
  {
    id: 3,
    name: "GitHub",
    link: process.env.REACT_APP_GITHUB_LINK,
    icon: <BsGithub />,
  },
  {
    id: 4,
    name: "Tel",
    link: `tel:${process.env.REACT_APP_TEL}`,
    icon: <AiFillPhone />,
  },
];

export const text_personal = [
  {
    id: 1,
    name: "fname",
    info: process.env.REACT_APP_FNAME,
  },
  {
    id: 2,
    name: "lname",
    info: process.env.REACT_APP_LNAME,
  },
];

export const text_title = [
  {
    id: 1,
    name: "me",
  },
  {
    id: 2,
    name: "my top projects",
  },
  {
    id: 3,
    name: "my projects",
  },
];

export const text_data = [
  {
    id: 1,
    name: "im",
    info: "i'm",
  },
  {
    id: 2,
    name: "fs",
    info: "a fullStack developer",
  },
  {
    id: 3,
    name: "searching",
    info: "i'm searching for my next job as a fullStack developer",
  },
];
