import { ROLES } from "../utils/constants";

export default function StatsBar({ users }) {
  return (
    <section className="stats" aria-label="Statistiques">
      <div className="stat">
        <span className="stat-value">{users.length}</span>
        <span className="stat-label">Utilisateurs</span>
      </div>
      {ROLES.map((role) => (
        <div className="stat" key={role}>
          <span className="stat-value">
            {users.filter((u) => u.role === role).length}
          </span>
          <span className="stat-label">{role}</span>
        </div>
      ))}
    </section>
  );
}