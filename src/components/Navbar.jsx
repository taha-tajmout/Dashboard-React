import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <h1>Gestion des utilisateurs</h1>
      <nav aria-label="Navigation principale">
        <NavLink to="/" end>Dashboard</NavLink>
        <NavLink to="/users" end>Utilisateurs</NavLink>
        <NavLink to="/users/new">Ajouter</NavLink>
      </nav>
    </header>
  );
}