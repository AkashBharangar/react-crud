import { useEffect, useState } from "react";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "./api/userApi";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      alert("Error fetching users");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (data) => {
  try {
    // Check uniqueness
    const isPhoneTaken = users.some(
      (user) =>
        user.phone === data.phone &&
        (!editingUser || user.id !== editingUser.id)
    );

    const isEmailTaken = users.some(
      (user) =>
        user.email === data.email &&
        (!editingUser || user.id !== editingUser.id)
    );

    if (isPhoneTaken) {
      alert("Phone number already exists");
      return;
    }

    if (isEmailTaken) {
      alert("Email already exists");
      return;
    }

    if (editingUser) {
      await updateUser(editingUser.id, data);
      setEditingUser(null);
    } else {
      await createUser(data);
    }

    fetchUsers();
  } catch (err) {
    alert("Something went wrong");
  }
};


  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      fetchUsers();
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
  <div className="container">
    <h1>User Management</h1>

    <div className="card">
      <UserForm
        onSubmit={handleSubmit}
        defaultValues={editingUser || {}}
      />
    </div>

    <div className="card">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserList
          users={users}
          onEdit={setEditingUser}
          onDelete={handleDelete}
        />
      )}
    </div>
  </div>
);
}

export default App;
