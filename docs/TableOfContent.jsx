import React from "react";
import { Link } from "react-router-dom";

export default function TableOfContent(props) {
  const pages = [
    "Angular",
    "C_Language",
    "Django",
    "ML_DL",
    "NodeJS",
    "Python",
    "React",
    "Tools",
    "Web",
  ];

  return (
    <div className="tableOfContentContainer">
      {pages.map((page, index) => (
        <Link key={index} to={page.toLowerCase() + "/overview"}>
          {page}
        </Link>
      ))}
    </div>
  );
}
