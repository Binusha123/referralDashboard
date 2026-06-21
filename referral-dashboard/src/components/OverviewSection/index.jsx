import './index.css';
const OverviewSection = ({ metrics }) => {
  return (
    <section>
      <h2>Overview</h2>

      <div className="metrics-grid">
        {metrics.map(metric => (
          <div key={metric.id} className="metric-card">
            <p>{metric.label}</p>
            <h3>{metric.value}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OverviewSection;