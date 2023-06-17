import React, { useState } from "react";

export default function CreateAccount({ handleCreateAccountForm, loading }) {
  const [selectedRole, setSelectedRole] = useState("");

  function handleRoleChange(event) {
    setSelectedRole(event.target.value);
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    if (selectedRole === "") {
      alert("Selecione um papel para a conta");
      return;
    }
    handleCreateAccountForm(event);
  }

  return (
    <div>
      <h4>Create account:</h4>
      <form
        className="userAuthenticationForm"
        onSubmit={(event) => {
          handleOnSubmit(event);
        }}
      >
        <label htmlFor="email">Email:</label>
        <input required type="text" id="email" name="email" />
        <label htmlFor="confirmEmail">Confirm Email:</label>
        <input required type="text" id="confirmEmail" name="confirmEmail" />
        <label htmlFor="password">Password:</label>
        <input required type="text" id="password" name="password" />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input required type="text" id="confirmPassword" name="confirmPassword" />
        <p>Papel da conta:</p>
        <label htmlFor="admin">Administrador:</label>
        <input type="radio" name="role" id="admin" value="admin" checked={selectedRole === "admin"} onChange={handleRoleChange}/>
        <label htmlFor="manager">Gerente de compras:</label>
        <input type="radio" name="role" id="manager" value="manager" checked={selectedRole === "manager"} onChange={handleRoleChange}/>
        <button disabled={loading} type="submit">Confirmar criação de conta</button>
      </form>
    </div>
  );
}