import { SiGoogleanalytics } from "react-icons/si";
import { MdAnalytics } from "react-icons/md";
import { DiGoogleAnalytics } from "react-icons/di";

export const dashboardData = [
    {
        id: 1,
        title: "Total Sales",
        subTitle: "$25,024",
        progress: "81%",
        timeStamp: "Last 24 Hours",
        icon: <MdAnalytics />,
        iconClass: "",
        progressOffset: -30,
        progressDashArray: 200
    },
    {
        id: 2,
        title: "Total Expenses",
        subTitle: "$14,160",
        progress: "62%",
        timeStamp: "Last 24 Hours",
        icon: <SiGoogleanalytics />,
        iconClass: "danger",
        progressOffset: 20,
        progressDashArray: 80
    },
    {
        id: 3,
        title: "Total Income",
        subTitle: "$10,864",
        progress: "44%",
        timeStamp: "Last 24 Hours",
        icon: <DiGoogleAnalytics />,
        iconClass: "success",
        progressOffset: 35,
        progressDashArray: 110
    }
];