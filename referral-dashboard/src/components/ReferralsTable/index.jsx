import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
const ReferralsTable = ({
  referrals,
  search,
  setSearch,
  sort,
  setSort,
}) => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;

  const formatDate = date =>
    date.replaceAll("-", "/");

  const formatCurrency = amount =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);

  const startIndex =
    (currentPage - 1) * rowsPerPage;

  const endIndex =
    startIndex + rowsPerPage;

  const currentRows = referrals.slice(
    startIndex,
    endIndex
  );

  const totalPages = Math.ceil(
    referrals.length / rowsPerPage
  );

  return (
    <section className="referrals-section">

      <div className="table-header">

        <h2>All referrals</h2>

        <div className="table-controls">

          <input
            type="search"
            placeholder="Name or service…"
            value={search}
            onChange={e => {
              setCurrentPage(1);
              setSearch(e.target.value);
            }}
            className="search-input"
          />

          <select
            value={sort}
            onChange={e => {
              setCurrentPage(1);
              setSort(e.target.value);
            }}
            className="sort-select"
          >
            <option value="desc">
              Newest first
            </option>

            <option value="asc">
              Oldest first
            </option>

          </select>

        </div>

      </div>

      <div className="table-container">

        <table className="referrals-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Service</th>
              <th>Date</th>
              <th>Profit</th>
            </tr>
          </thead>

          <tbody>

            {currentRows.length === 0 ? (
              <tr>
                <td colSpan="4">
                  No matching entries
                </td>
              </tr>
            ) : (
              currentRows.map(item => (
                <tr
                  key={item.id}
                  onClick={() =>
                    navigate(`/referral/${item.id}`)
                  }
                  className="table-row"
                >
                  <td>{item.name}</td>

                  <td>{item.serviceName}</td>

                  <td>
                    {formatDate(item.date)}
                  </td>

                  <td>
                    {formatCurrency(item.profit)}
                  </td>
                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

      <div className="pagination-section">

        <p>
          Showing {startIndex + 1}
          –
          {Math.min(
            endIndex,
            referrals.length
          )}
          {" "}
          of {referrals.length} entries
        </p>

        <div className="pagination-controls">

          <button
            onClick={() =>
              setCurrentPage(prev =>
                prev - 1
              )
            }
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from(
            { length: totalPages },
            (_, index) => (
              <button
                key={index + 1}
                className={
                  currentPage === index + 1
                    ? "active-page"
                    : ""
                }
                onClick={() =>
                  setCurrentPage(index + 1)
                }
              >
                {index + 1}
              </button>
            )
          )}

          <button
            onClick={() =>
              setCurrentPage(prev =>
                prev + 1
              )
            }
            disabled={
              currentPage === totalPages
            }
          >
            Next
          </button>

        </div>

      </div>

    </section>
  );
};

export default ReferralsTable;