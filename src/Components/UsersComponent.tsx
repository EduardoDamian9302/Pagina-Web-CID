import React from "react";
import { Table } from "react-bootstrap";

const UsersComponent: React.FC = () => {
  const users = [
    { id: 1, name: "Eduardo", email: "Eduardo@imss.com", role: "admin" },
    {
      id: 2,
      name: "Eduardo Damian",
      email: "Eduardo2@imss.com",
      role: "admin",
    },
  ];
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Rol</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UsersComponent;
