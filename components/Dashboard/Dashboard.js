import { dashboardData } from "../../data/dashboardData";
import { CircleChart } from "..";
import {
  DashboardContainer,
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
  const insightsData = dashboardData.map((insight) => (
    <InsightsItem key={insight.id}>
      <InsightsIcon className={insight.iconClass}>{insight.icon}</InsightsIcon>
      <InsightsMiddle>
        <InsightsLeft>
          <h3>{insight.title}</h3>
          <h1>{insight.subTitle}</h1>
        </InsightsLeft>
        <InsightsRight>
          <CircleChart
            strokeDashoffset={insight.progressOffset}
            strokeDasharray={insight.progressDashArray}
          />
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
      <h1>Dashboard</h1>
      <DashboardDate>
        <Input type="date" />
      </DashboardDate>
      <DashboardInsights>{insightsData}</DashboardInsights>
    </DashboardContainer>
  );
};
