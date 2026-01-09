function UserCard({ user }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "8px" }}>
      <h4>{user.name}</h4>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
    </div>
  );
}

export default UserCard;