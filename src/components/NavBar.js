import React from "react";

function NavBar() {
  const links = ["home", "about", "projects", "link"];

  const anchors = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));
  return <nav>{anchors}</nav>;
}

export default NavBar;
