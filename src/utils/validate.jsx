export function validateUser(form, users, editingId = null) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Le nom est obligatoire.";
  }

  if (!form.email.trim()) {
    errors.email = "L'email est obligatoire.";
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = "Format d'email invalide.";
  } else if (
    users.some(
      (u) => u.email.toLowerCase() === form.email.toLowerCase() && u.id !== editingId
    )
  ) {
    errors.email = "Cet email existe déjà.";
  }

  return errors;
}