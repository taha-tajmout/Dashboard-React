import { Link } from "react-router-dom";
import StatsBar from "../components/Statsbar";
import UserTable from "../components/Usertable";
import { useUsers } from "../context/UsersContext";

export default function Dashboard() {
  const { users } = useUsers();
  const latest = [...users].reverse().slice(0, 5);

  return (
    <>
      <StatsBar users={users} />

      <section className="panel">
        <div className="panel-top">
          <h2>Derniers utilisateurs ajoutés</h2>
          <Link className="btn" to="/users/new">Ajouter un utilisateur</Link>
        </div>
        <UserTable
          users={latest}
          showActions={false}
          emptyMessage="Aucun utilisateur. Ajoute le premier."
        />
      </section>
    </>
  );
}