import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "../../components/Navbar";
import "./index.css";

const ReferralDetails = () => {
  const { id } = useParams();

  const [referral, setReferral] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const formatDate = date => {
    if (!date) return "";
    return date.replaceAll("-", "/");
  };

  const formatCurrency = amount => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getReferralDetails = async () => {
    try {
      setLoading(true);

      const token = Cookies.get("jwt_token");

      const response = await fetch(
        `https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals?id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      console.log("API Response:", data);

      if (response.ok) {
        let referralData = null;

        // Case 1
        if (data.data?.id) {
          referralData = data.data;
        }

        // Case 2
        else if (
          data.data?.referrals &&
          data.data.referrals.length > 0
        ) {
          referralData = data.data.referrals[0];
        }

        // Case 3
        else if (
          Array.isArray(data.data) &&
          data.data.length > 0
        ) {
          referralData = data.data[0];
        }

        if (referralData) {
          setReferral(referralData);
          setError("");
        } else {
          setError("Referral not found");
        }
      } else {
        setError("Referral not found");
      }
    } catch (err) {
      console.log(err);
      setError("Referral not found");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReferralDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="details-loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error || !referral) {
    return (
      <div className="details-error">
        <h1>Referral not found</h1>

        <Link to="/" className="back-link">
          Back to dashboard
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="details-container">
        <h1 className="details-title">
          Referral Details
        </h1>

        <div className="details-card">
          <h2 className="partner-name">
            {referral.name}
          </h2>

          <div className="detail-row">
            <span className="detail-label">
              Referral ID
            </span>

            <span className="detail-value">
              {referral.id}
            </span>
          </div>

          <div className="detail-row">
            <span className="detail-label">
              Service Name
            </span>

            <span className="detail-value">
              {referral.serviceName}
            </span>
          </div>

          <div className="detail-row">
            <span className="detail-label">
              Date
            </span>

            <span className="detail-value">
              {formatDate(referral.date)}
            </span>
          </div>

          <div className="detail-row">
            <span className="detail-label">
              Profit
            </span>

            <span className="detail-value profit">
              {formatCurrency(referral.profit)}
            </span>
          </div>
        </div>

        <Link
          to="/"
          className="back-button"
        >
          ← Back to dashboard
        </Link>
      </div>
    </>
  );
};

export default ReferralDetails;