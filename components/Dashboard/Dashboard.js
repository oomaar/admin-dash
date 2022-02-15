import { dashboardData } from "../../data/dashboardData";
import {
    DashboardContainer,
    DashboardTitle,
    DashboardDate,
    DashboardInsights,
    InsightsItem,
    InsightsIcon,
    InsightsMiddle,
    InsightsLeft,
    InsightsRight,
    InsightsProgress,
    TimeStamp,
    Input,
} from "./styledDashboard";

export const Dashboard = () => {
    const insightsData = dashboardData.map(insight => (
        <InsightsItem key={insight.id}>
            <InsightsIcon className={insight.iconClass}>{insight.icon}</InsightsIcon>
            <InsightsMiddle>
                <InsightsLeft>
                    <h3>{insight.title}</h3>
                    <h1>{insight.subTitle}</h1>
                </InsightsLeft>
                <InsightsRight>
                    <svg>
                        <circle
                            strokeDashoffset={insight.progressOffset}
                            strokeDasharray={insight.progressDashArray}
                            cx="38"
                            cy="38"
                            r="36"
                        ></circle>
                    </svg>
                    <InsightsProgress>
                        <p>{insight.progress}</p>
                    </InsightsProgress>
                </InsightsRight>
            </InsightsMiddle>
            <TimeStamp>{insight.timeStamp}</TimeStamp>
        </InsightsItem>
    ));

    return (
        <DashboardContainer>
            <DashboardTitle>Dashboard</DashboardTitle>
            <DashboardDate>
                <Input type="date" />
            </DashboardDate>
            <DashboardInsights>
                {insightsData}
            </DashboardInsights>
        </DashboardContainer>
    );
};