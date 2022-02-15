import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";

export const WidgetsData = {
    messages: [
        {
            id: 1,
            user: "Muhammed Ahmed",
            img: "/user.png",
            update: "received his order of Night Lion tech GPS drone.",
            timeStamp: "2 Minutes Ago"
        },
        {
            id: 2,
            user: "Diana Aly",
            img: "/user.png",
            update: "declined her order of 2 JBL Speakers.",
            timeStamp: "5 Minutes Ago"
        },
        {
            id: 3,
            user: "Maram Ahmed",
            img: "/user.png",
            update: "received her order of Moon-Light Lamp.",
            timeStamp: "52 Minutes Ago"
        }
    ],
    items: [
        {
            id: 1,
            icon: <AiOutlineShoppingCart />,
            iconClass: "",
            class: "success",
            order: "Online Order",
            timeStamp: "Last 24 Hours",
            progress: "+39%",
            number: "3849"
        },
        {
            id: 2,
            icon: <BsBriefcase />,
            iconClass: "danger",
            class: "danger",
            order: "Offline Order",
            timeStamp: "Last 24 Hours",
            progress: "-17%",
            number: "1100"
        },
        {
            id: 3,
            icon: <AiOutlineUser />,
            iconClass: "success",
            class: "success",
            order: "New Customers",
            timeStamp: "Last 24 Hours",
            progress: "+25%",
            number: "849"
        }
    ]
};