import "./index.css"
const ShareReferral = ({ referral }) => {

  const copyLink = () => {
    navigator.clipboard.writeText(referral.link)
  }

  const copyCode = () => {
    navigator.clipboard.writeText(referral.code)
  }

  return (
    <section className="share-referral-section">
      <h2 className="form-title">Refer friends and earn more</h2>

      <div className="referral-item">
        <label className="form-label">Your Referral Link</label>

        <input
          value={referral.link}
          readOnly className="referral-input"
        />

        <button className="copy-btn" onClick={copyLink}>
          Copy
        </button>
      </div>

      <div className="referral-item">
        <label className="form-label">
          Your Referral Code
        </label>

        <input
          value={referral.code}
          readOnly className="referral-input"
        />

        <button className="copy-btn" onClick={copyCode}>
          Copy
        </button>
      </div>
    </section>
  )
}

export default ShareReferral