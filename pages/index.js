import { Dashboard, Table } from "../components";
import { NextHead } from "../global/NextHead";

const Home = () => {
  return (
    <div>
      <NextHead title="Dashboard" />

      <div>
        <Dashboard />
        <Table />
      </div>
    </div>
  );
};

export default Home;
