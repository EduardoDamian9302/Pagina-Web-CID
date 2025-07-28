import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#0c231e",
        color: "#fff",
        textAlign: "center",
        left: 0,
        position: "static",
        bottom: 0,
        padding: "10px 0",
        marginTop: "auto",
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} React-CID. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
