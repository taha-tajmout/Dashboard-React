import { Link } from "react-router-dom";

export default function UserTable({
  users,
  showActions = true,
  onDelete,
  emptyMessage = "Aucun utilisateur à afficher.",
}) {
  if (users.length === 0) {
    return <p className="empty">{emptyMessage}</p>;
  }

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Rôle</th>
            {showActions && <th></th>}
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <span className={`badge badge-${u.role}`}>{u.role}</span>
              </td>
              {showActions && (
                <td className="cell-actions">
                  <Link className="btn btn-light" to={`/users/${u.id}/edit`}>
                    Modifier
                  </Link>
                  <button className="btn btn-danger" onClick={() => onDelete(u)}>
                    Supprimer
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}