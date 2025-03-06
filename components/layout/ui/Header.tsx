"use client";

import React from "react";
import { Nav } from "./Nav";
import { TransitionLink } from "@/components/ui/transitionLink";

function Header() {
  return (
    <header className={"ctrlaltpat"}>
      <div className="container">
        <h1>
          <TransitionLink href="/" {...{ className: "cap-btn" }}>
            Ctrl
          </TransitionLink>
          <TransitionLink href="/" {...{ className: "cap-btn" }}>
            Alt
          </TransitionLink>
          <TransitionLink href="/" {...{ className: "cap-btn" }}>
            Pat
          </TransitionLink>
        </h1>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
