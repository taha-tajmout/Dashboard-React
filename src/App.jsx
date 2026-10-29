import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import UsersPage from "./pages/UsersPage";
import NewUserPage from "./pages/NewUserPage";
import EditUserPage from "./pages/EditUserPage";

function NotFound() {
  return (
    <section className="panel">
      <h2>Page introuvable</h2>
      <p className="empty">Cette adresse n'existe pas.</p>
      <Link className="btn" to="/">Retour au tableau de bord</Link>
    </section>
  );
}

export default function App() {
  return (
    <div className="dash">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/new" element={<NewUserPage />} />
        <Route path="/users/:id/edit" element={<EditUserPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}