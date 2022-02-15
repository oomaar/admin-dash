import { FaTimes } from "react-icons/fa";
import { sidebarData } from "../../data/sidebarData";
import {
    SidebarContainer,
    LogoContainer,
    Logo,
    CrossIcon,
    SidebarList,
    SidebarLink,
    SidebarIcon,
    MessageCount,
} from "./styledSidebar";

export const Sidebar = () => {
    const sidebarLinks = sidebarData.map(link => (
        <SidebarLink key={link.id}>
            <a href="#">
                <SidebarIcon>{link.icon}</SidebarIcon>
                <h3>{link.text}</h3>
                {link.count && (
                    <MessageCount>{link.count}</MessageCount>
                )}
            </a>
        </SidebarLink>
    ));

    return (
        <SidebarContainer>
            <LogoContainer>
                <Logo>
                    <h2><span>Fly</span> Dashboard</h2>
                </Logo>
                <CrossIcon>
                    <FaTimes />
                </CrossIcon>
            </LogoContainer>
            <SidebarList>
                {sidebarLinks}
            </SidebarList>
        </SidebarContainer>
    );
};