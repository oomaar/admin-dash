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

export const Sidebar = ({ toggleShow, setToggleShow }) => {
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
        <SidebarContainer toggleShow={toggleShow}>
            <LogoContainer>
                <Logo>
                    <h2><span>Fly</span> Dashboard</h2>
                </Logo>
                <CrossIcon onClick={() => setToggleShow(false)}>
                    <FaTimes />
                </CrossIcon>
            </LogoContainer>
            <SidebarList>
                {sidebarLinks}
            </SidebarList>
        </SidebarContainer>
    );
};