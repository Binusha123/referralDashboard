import "./index.css";
const ServiceSummary = ({ summary }) => {
  return (
    <section className="service-summary">
      <h2 className="service-summary-heading">
        Service Summary
      </h2>

      <div className="summary-grid">

        <div className="summary-card">
          <p className="summary-label">Service</p>
          <h3 className="summary-value">
            {summary.service}
          </h3>
        </div>

        <div className="summary-card">
          <p className="summary-label">Your Referrals</p>
          <h3 className="summary-value">
            {summary.yourReferrals}
          </h3>
        </div>

        <div className="summary-card">
          <p className="summary-label">Active Referrals</p>
          <h3 className="summary-value">
            {summary.activeReferrals}
          </h3>
        </div>

        <div className="summary-card">
          <p className="summary-label">
            Total Ref. Earnings
          </p>
          <h3 className="summary-value">
            {summary.totalRefEarnings}
          </h3>
        </div>

      </div>
    </section>
  );
};

export default ServiceSummary;