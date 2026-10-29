import { useNavigate } from "react-router-dom";
import UserForm from "../components/Userform";
import { useUsers } from "../context/UsersContext";

export default function NewUserPage() {
  const { users, addUser } = useUsers();
  const navigate = useNavigate();

  return (
    <>
      <h2 className="page-title">Ajouter un utilisateur</h2>
      <UserForm
        users={users}
        submitLabel="Ajouter"
        onSubmit={(data) => {
          addUser(data);
          navigate("/users");
        }}
        onCancel={() => navigate("/users")}
      />
    </>
  );
}