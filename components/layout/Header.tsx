import React from "react";
import Link from "next/link";
import { Nav } from "./Nav";

function Header() {
  return (
    <header className={"ctrlaltpat"}>
      <h1>
        <Link href="/" className="cap-btn">
          Ctrl
        </Link>
        <Link href="/" className="cap-btn">
          Alt
        </Link>
        <Link href="/" className="cap-btn">
          Pat
        </Link>
      </h1>
      <Nav/>
    </header>
  );
}

export default Header;
