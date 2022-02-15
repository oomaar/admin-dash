import { BsFillGrid1X2Fill, BsEnvelope, BsPlus } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { GiPapers } from "react-icons/gi";
import { AiOutlineStock, AiFillSetting } from "react-icons/ai";
import { RiTodoLine } from "react-icons/ri";
import { MdReportGmailerrorred } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";

export const sidebarData = [
    {
        id: 1,
        text: "Dashboard",
        icon: <BsFillGrid1X2Fill />
    },
    {
        id: 2,
        text: "Users",
        icon: <FiUsers />
    },
    {
        id: 3,
        text: "Orders",
        icon: <GiPapers />
    },
    {
        id: 4,
        text: "Analytics",
        icon: <AiOutlineStock />
    },
    {
        id: 5,
        text: "Messages",
        icon: <BsEnvelope />,
        count: "26"
    },
    {
        id: 6,
        text: "Products",
        icon: <RiTodoLine />
    },
    {
        id: 7,
        text: "Reports",
        icon: <MdReportGmailerrorred />
    },
    {
        id: 8,
        text: "Settings",
        icon: <AiFillSetting />
    },
    {
        id: 9,
        text: "Add Product",
        icon: <BsPlus />
    },
    {
        id: 10,
        text: "Logout",
        icon: <HiOutlineLogout />
    }
];