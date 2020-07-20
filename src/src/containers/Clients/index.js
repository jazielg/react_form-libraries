import React, { useState } from "react";
import AddClient from "./AddClient";
import ListClient from "./ListClient";

export default function Clients() {
  const [user, setUser] = useState([]);

  function handleSubmit(value) {
    setUser([...user, value]);
    console.log(value);
  }

  return (
    <>
      <AddClient onSubmit={handleSubmit} />
      <ListClient clients={user} />
    </>
  );
}
