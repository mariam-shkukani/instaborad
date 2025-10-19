import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const TeamDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const user = location.state?.user;

  // If user data not passed via state, we cannot fully display details
  // (optionally could fetch by UUID if you store mapping), but here we show a friendly message.
  if (!user) {
    return (
      <div style={{ padding: 24 }}>
        <h2>No user data available</h2>
        <p style={{ color: "var(--muted)" }}>This profile must be opened from the <strong>Team</strong> page (click "View Profile").</p>
        <button className="btn" onClick={() => navigate("/team")}>Back to Team</button>
      </div>
    );
  }

  const { name, email, phone, picture, location: loc } = user;
  return (
    <section style={{ padding: 24 }}>
      <button className="btn" onClick={() => navigate(-1)} style={{ marginBottom: 12 }}>← Back</button>

      <div style={{ display: "flex", gap: 20, alignItems: "flex-start", background: "var(--card-bg)", padding: 18, borderRadius: 12 }}>
        <img src={picture.large} alt={`${name.first}`} style={{ width: 160, height: 160, borderRadius: 12, objectFit: "cover" }} />
        <div>
          <h1>{name.title} {name.first} {name.last}</h1>
          <p style={{ color: "var(--muted)" }}>{email} • {phone}</p>
          <h3 style={{ marginTop: 12 }}>Location</h3>
          <p style={{ color: "var(--muted)" }}>
            {loc.street.number} {loc.street.name}, {loc.city}, {loc.state}, {loc.country} - {loc.postcode}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamDetails;
