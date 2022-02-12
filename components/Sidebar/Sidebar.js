import { FaTimes } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { sidebarData } from "../../data/sidebarData";
import {
    SidebarContainer,
    LogoContainer,
    Logo,
    CrossIcon,
    SidebarList,
    SidebarLink,
    SidebarIcon,
} from "./styledSidebar";

export const Sidebar = () => {
    const sidebarLinks = sidebarData.map(link => (
        <SidebarLink key={link.id}>
            <SidebarIcon>{link.icon}</SidebarIcon>
            <span>{link.text}</span>
        </SidebarLink>
    ));

    return (
        <SidebarContainer>
            <LogoContainer>
                <Logo><span>Fly</span> Dashboard</Logo>
                <CrossIcon>
                    <FaTimes />
                </CrossIcon>
            </LogoContainer>
            <SidebarList>
                {sidebarLinks}
            </SidebarList>
            <SidebarIcon>
                <HiOutlineLogout />
                <span>Logout</span>
            </SidebarIcon>
        </SidebarContainer>
    );
};
