import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "dashboard-users";

const INITIAL_USERS = [
  { id: 1, name: "Amina Benali", email: "amina@exemple.com", role: "Admin" },
  { id: 2, name: "Youssef Khaldi", email: "youssef@exemple.com", role: "Éditeur" },
  { id: 3, name: "Sara Lahlou", email: "sara@exemple.com", role: "Lecteur" },
];

function loadUsers() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : INITIAL_USERS;
  } catch {
    return INITIAL_USERS;
  }
}

const UsersContext = createContext(null);

export function UsersProvider({ children }) {
  const [users, setUsers] = useState(loadUsers);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    } catch {
      /* stockage indisponible : on ignore */
    }
  }, [users]);

  const addUser = (data) =>
    setUsers((prev) => [...prev, { id: Date.now(), ...data }]);

  const updateUser = (id, data) =>
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, ...data } : u)));

  const deleteUser = (id) =>
    setUsers((prev) => prev.filter((u) => u.id !== id));

  return (
    <UsersContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  const ctx = useContext(UsersContext);
  if (!ctx) throw new Error("useUsers doit être utilisé dans <UsersProvider>");
  return ctx;
}