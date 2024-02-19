import React from "react";

const date = new Date();

export default function Footer() {
  return (
    <footer className="footer">
      <p>Samiya Farooquee &copy; {date.getFullYear()}</p>
    </footer>
  );
}
