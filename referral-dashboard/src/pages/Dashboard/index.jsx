import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import Navbar from "../../components/Navbar";
import OverviewSection from "../../components/OverviewSection";
import ServiceSummary from "../../components/ServiceSummary";
import ShareReferral from "../../components/ShareReferral";
import ReferralsTable from "../../components/ReferralsTable";

import "./index.css";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [sort, setSort] = useState("desc");

  const getDashboardData = async () => {
    try {
      setLoading(true);

      const token = Cookies.get("jwt_token");

      const url =
        `https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals?search=${search}&sort=${sort}`;

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        setDashboardData(data.data);
        setError("");
      } else {
        setError(data.message || "Failed to fetch data");
      }
    } catch (err) {
      console.log(err);

      setError("Something went wrong");
    }

    setLoading(false);
  };

  useEffect(() => {
    getDashboardData();
  }, [search, sort]);

  if (loading) {
    return (
      <div className="dashboard-container">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <Navbar />

      <h1 className="dashboard-title">
        Referral Dashboard
      </h1>

      <p className="dashboard-subtitle">
        Track your referrals, earnings, and
        partner activity in one place.
      </p>

      <OverviewSection
        metrics={dashboardData.metrics}
      />

      <ServiceSummary
        summary={dashboardData.serviceSummary}
      />

      <ShareReferral
        referral={dashboardData.referral}
      />

      <ReferralsTable
        referrals={dashboardData.referrals}
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />
    </div>
  );
};

export default Dashboard;