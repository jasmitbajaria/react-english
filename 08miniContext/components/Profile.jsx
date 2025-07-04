import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>not logged in</div>;
  return <div>profile:{user.username}</div>;
}

export default Profile;
