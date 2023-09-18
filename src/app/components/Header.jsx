import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="header">
      <div className="">
        <div className="logo">
          <h1>This Is Header</h1>
        </div>
      </div>
      <div className="links">
        <Link className="link" href="/">
          Home
        </Link>
        <Link className="link" href="/about">
          About
        </Link>
        <Link className="link" href="/component">
          Component
        </Link>
        <Link className="link" href="/service">
          Service
        </Link>
      </div>
    </header>
  );
}

export default Header;
