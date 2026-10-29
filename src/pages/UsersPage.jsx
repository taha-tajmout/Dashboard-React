import { useState } from "react";
import { Link } from "react-router-dom";
import UserTable from "../components/Usertable";
import { useUsers } from "../context/UsersContext";

export default function UsersPage() {
  const { users, deleteUser } = useUsers();
  const [search, setSearch] = useState("");

  const filtered = users.filter((u) =>
    `${u.name} ${u.email}`.toLowerCase().includes(search.toLowerCase())
  );

  function handleDelete(user) {
    if (window.confirm(`Supprimer ${user.name} ?`)) deleteUser(user.id);
  }

  return (
    <section className="panel">
      <div className="panel-top">
        <h2>Liste des utilisateurs</h2>
        <div className="panel-tools">
          <input
            className="search"
            type="search"
            placeholder="Rechercher un nom ou un email"
            aria-label="Rechercher"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link className="btn" to="/users/new">Ajouter</Link>
        </div>
      </div>

      <UserTable
        users={filtered}
        onDelete={handleDelete}
        emptyMessage={
          users.length === 0
            ? "Aucun utilisateur. Ajoute le premier."
            : "Aucun résultat pour cette recherche."
        }
      />
    </section>
  );
}