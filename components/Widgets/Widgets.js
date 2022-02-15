import { FaBars } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import {
    RightContainer,
    Top,
    MenuButton,
    ThemeToggler,
    Profile,
    Info,
    ProfilePhoto,
    RecentUpdates,
    Updates,
    Update,
    SalesAnalytics,
    ItemOutline,
    Icon,
    Right,
    AddProduct,
} from "./styledWidgets";
import { WidgetsData } from "../../data/widgetsData";

export const Widgets = ({ toggleDarkTheme, setToggleDarkTheme, setToggleShow }) => {
    const updatesData = WidgetsData.messages.map(update => (
        <Update key={update.id}>
            <ProfilePhoto>
                <img src={update.img} alt="User" />
            </ProfilePhoto>
            <div>
                <p><b>{update.user}</b> {update.update}</p>
                <small>{update.timeStamp}</small>
            </div>
        </Update>
    ));

    const itemsData = WidgetsData.items.map(item => (
        <ItemOutline key={item.id}>
            <Icon className={item.iconClass}>{item.icon}</Icon>
            <Right>
                <Info>
                    <h3>{item.order}</h3>
                    <small>{item.timeStamp}</small>
                </Info>
                <h5 className={item.class}>{item.progress}</h5>
                <h3>{item.number}</h3>
            </Right>
        </ItemOutline>
    ));

    return (
        <RightContainer>
            <Top>
                <MenuButton onClick={() => setToggleShow(true)}><FaBars /></MenuButton>
                <ThemeToggler>
                    <span
                        className={`${!toggleDarkTheme && "active"}`}
                        onClick={() => setToggleDarkTheme(false)}
                    >
                        <BsFillSunFill />
                    </span>
                    <span
                        className={`${toggleDarkTheme && "active"}`}
                        onClick={() => setToggleDarkTheme(true)}
                    >
                        <BsFillMoonFill />
                    </span>
                </ThemeToggler>
                <Profile>
                    <Info>
                        <p>Hey, <b>Omar</b></p>
                        <small>Admin</small>
                    </Info>
                    <ProfilePhoto>
                        <img src="/user.png" alt="User" />
                    </ProfilePhoto>
                </Profile>
            </Top>
            <RecentUpdates>
                <h2>Recent Updates</h2>
                <Updates>
                    {updatesData}
                </Updates>
            </RecentUpdates>
            <SalesAnalytics>
                <h2>Sales Analytics</h2>
                {itemsData}
                <AddProduct>
                    <AiOutlinePlus />
                    <h3>Add Product</h3>
                </AddProduct>
            </SalesAnalytics>
        </RightContainer>
    );
};