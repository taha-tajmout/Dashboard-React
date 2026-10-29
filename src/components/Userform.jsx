import { useState } from "react";
import { ROLES } from "../utils/constants";
import { validateUser } from "../utils/validate";

const EMPTY_FORM = { name: "", email: "", role: "Lecteur" };

export default function UserForm({
  users,
  initialValues = EMPTY_FORM,
  editingId = null,
  submitLabel = "Ajouter",
  onSubmit,
  onCancel,
}) {
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const found = validateUser(form, users, editingId);
    setErrors(found);
    if (Object.keys(found).length === 0) onSubmit(form);
  }

  return (
    <form className="panel form-panel" onSubmit={handleSubmit} noValidate>
      <label htmlFor="name">Nom</label>
      <input id="name" name="name" value={form.name} onChange={handleChange} />
      {errors.name && <p className="error">{errors.name}</p>}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label htmlFor="role">Rôle</label>
      <select id="role" name="role" value={form.role} onChange={handleChange}>
        {ROLES.map((r) => (
          <option key={r}>{r}</option>
        ))}
      </select>

      <div className="row">
        <button className="btn" type="submit">{submitLabel}</button>
        <button className="btn btn-light" type="button" onClick={onCancel}>
          Annuler
        </button>
      </div>
    </form>
  );
}