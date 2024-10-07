import React, { useState } from "react";

const UserList = ({ users, updateUser, deleteUser }) => {
  const [editingUserId, setEditingUserId] = useState(null);
  const [editableUser, setEditableUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleEditClick = (user) => {
    setEditingUserId(user._id);
    setEditableUser({ ...user });
  };

  const handleChange = (e) => {
    setEditableUser({ ...editableUser, [e.target.name]: e.target.value });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    updateUser(editingUserId, editableUser);
    setEditingUserId(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 border">First Name</th>
            <th className="py-2 border">Last Name</th>
            <th className="py-2 border">Phone</th>
            <th className="py-2 border">Email</th>
            <th className="py-2 border">Address</th>
            <th className="py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) =>
            editingUserId === user._id ? (
              <tr key={user._id}>
                <td className="border">
                  <input
                    type="text"
                    name="firstName"
                    value={editableUser.firstName}
                    onChange={handleChange}
                    className="p-2 w-full"
                  />
                </td>
                <td className="border">
                  <input
                    type="text"
                    name="lastName"
                    value={editableUser.lastName}
                    onChange={handleChange}
                    className="p-2 w-full"
                  />
                </td>
                <td className="border">
                  <input
                    type="text"
                    name="phone"
                    value={editableUser.phone}
                    onChange={handleChange}
                    className="p-2 w-full"
                    pattern="\d{10}"
                  />
                </td>
                <td className="border">
                  <input
                    type="email"
                    name="email"
                    value={editableUser.email}
                    onChange={handleChange}
                    className="p-2 w-full"
                  />
                </td>
                <td className="border">
                  <input
                    type="text"
                    name="address"
                    value={editableUser.address}
                    onChange={handleChange}
                    className="p-2 w-full"
                  />
                </td>
                <td className="border">
                  <button
                    onClick={handleUpdateSubmit}
                    className="bg-green-500 text-white p-2 rounded mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => setEditingUserId(null)}
                    className="bg-gray-500 text-white p-2 rounded"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={user._id}>
                <td className="py-2 border">{user.firstName}</td>
                <td className="py-2 border">{user.lastName}</td>
                <td className="py-2 border">{user.phone}</td>
                <td className="py-2 border">{user.email}</td>
                <td className="py-2 border">{user.address}</td>
                <td className="py-2 border">
                  <button
                    onClick={() => handleEditClick(user)}
                    className="bg-blue-500 text-white p-2 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="bg-red-500 text-white p-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
