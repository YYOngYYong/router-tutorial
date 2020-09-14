import React from "react";

const data = {
  velopert: {
    name: "김민준",
    descripction: "react 선생",
  },

  pgy93: {
    name: "박관용",
    descripction: "react 초보",
  },
};

const Profile = ({ match }) => {
  const { userName } = match.params;
  const profile = data[userName];
  if (!profile) {
    return <div>존재하지않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {userName}({profile.name})
      </h3>
      <p>{profile.descripction}</p>
    </div>
  );
};

export default Profile;
