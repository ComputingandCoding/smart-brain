import React from "react";

const Profile = ({ name, email, date, id }) => {
  return (
    <div
      className="bg-white w-30 shadow-5"
      style={{
        margin: "auto",
        padding: "20px",
        borderRadius: "8px",
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className="tc">
        <h1 className="f3">
          <b>{name}</b>
        </h1>
        <hr />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
        }}
      >
        <p className="lh-copy measure center f5 black-60">
          <b>Email: {email}</b>
        </p>
        <p className="lh-copy measure center f5 black-60">
          <b>Joined: {date}</b>
        </p>
        <p className="lh-copy measure center f5 black-60">
          <b>Id: {id}</b>
        </p>
      </div>
    </div>
  );
};

export default Profile;
