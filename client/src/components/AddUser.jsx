import React, { useState } from "react";

const AddUser = ({ addUser }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
    setUser({ firstName: "", lastName: "", phone: "", email: "", address: "" });
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={user.firstName}
        onChange={handleChange}
        placeholder="First Name"
        className="border p-2 rounded mb-2 w-full"
        required
      />
      <input
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        className="border p-2 rounded mb-2 w-full"
        required
      />
      <input
        type="text"
        name="phone"
        value={user.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="border p-2 rounded mb-2 w-full"
        required
        pattern="\d{10}" // Ensure it's a 10-digit number
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        className="border p-2 rounded mb-2 w-full"
        required
      />
      <input
        type="text"
        name="address"
        value={user.address}
        onChange={handleChange}
        placeholder="Address"
        className="border p-2 rounded mb-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add User
      </button>
    </form>
  );
};

export default AddUser;
