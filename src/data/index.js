import {
  MdDeliveryDining,
  MdOutlineExplore,
  MdOutlinePermContactCalendar,
} from "react-icons/md";
import { BsCart2, BsCreditCard2Front } from "react-icons/bs";
import { AiOutlinePieChart, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";

import image1 from "../assets/product1.jpg";
import image2 from "../assets/product2.jpg";
import image3 from "../assets/product3.jpg";

import user from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";

export const sidebarItems = [
  {
    icon: <AiOutlinePieChart />,
    title: "DashBoard",
  },
  {
    icon: <MdDeliveryDining />,
    title: "Orders",
  },
  {
    icon: <MdOutlineExplore />,
    title: "Explore",
  },
  {
    icon: <BsCart2 />,
    title: "Products",
  },
  {
    icon: <BiTrendingUp />,
    title: "Trends",
  },
  {
    icon: <MdOutlinePermContactCalendar />,
    title: "Contact",
  },
  {
    icon: <SlCalender />,
    title: "Calender",
  },
  {
    icon: <BsCreditCard2Front />,
    title: "Billing",
  },
];

export const products = [
  {
    icon: <AiFillHeart />,
    imageSrc: image1,
    title: "Sound Forge",
  },
  {
    icon: <AiOutlineHeart />,
    imageSrc: image2,
    title: "Pulse Beats",
  },
  {
    icon: <AiOutlineHeart />,
    imageSrc: image3,
    title: "Echo Drift",
  },
];

export const customers = [
  {
    title: "Lila Mae",
    content: "Ordered a new Headphone",
    image: user2,
    duration: "2 min ago",
  },
  {
    title: "Luca James",
    content: "Ordered a new Headphone",
    image: user3,
    duration: "9 min ago",
  },
  {
    title: "Ethan Cole",
    content: "Ordered a new Headphone",
    image: user,
    duration: "13 min ago",
  },
  {
    title: "Sofia Grace",
    content: "Ordered a new Headphone",
    image: user4,
    duration: "21 min ago",
  },
  {
    title: "Ava Rose",
    content: "Ordered a new Headphone",
    image: user5,
    duration: "32 min ago",
  },
];
