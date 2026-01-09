import { useEffect, useState } from "react";
import UserCard from "./UserCard";

function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      {filtered.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
}

export default UserList;