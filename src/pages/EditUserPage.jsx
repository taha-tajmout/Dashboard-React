import { Link, useNavigate, useParams } from "react-router-dom";
import UserForm from "../components/Userform";
import { useUsers } from "../context/UsersContext";

export default function EditUserPage() {
  const { id } = useParams();
  const { users, updateUser } = useUsers();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <section className="panel">
        <p className="empty">Cet utilisateur n'existe pas ou a été supprimé.</p>
        <Link className="btn" to="/users">Retour à la liste</Link>
      </section>
    );
  }

  return (
    <>
      <h2 className="page-title">Modifier l'utilisateur</h2>
      <UserForm
        key={user.id}
        users={users}
        editingId={user.id}
        initialValues={{ name: user.name, email: user.email, role: user.role }}
        submitLabel="Enregistrer"
        onSubmit={(data) => {
          updateUser(user.id, data);
          navigate("/users");
        }}
        onCancel={() => navigate("/users")}
      />
    </>
  );
}