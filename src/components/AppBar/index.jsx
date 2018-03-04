import React from "react";

const ownStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#3F51B5",
  padding: "20px 10px"
};

const AppBar = ({ children }) => <header style={ownStyles}>{children}</header>;

export default AppBar;
