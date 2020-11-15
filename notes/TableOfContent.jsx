import React from "react";
import { Link } from "react-router-dom";

export default function TableOfContent() {
  const pages = [
    {
      name: "Angular",
      link: "angular",
    },
    {
      name: "C_Language",
      link: "c_language",
    },
    {
      name: "Django",
      link: "django",
    },
    {
      name: "JavaScript",
      link: "javascript",
    },
    {
      name: "ML_DL",
      link: "ml_dl",
    },
    {
      name: "NodeJS",
      link: "nodejs",
    },
    {
      name: "Python",
      link: "python",
    },
    {
      name: "React",
      link: "reactjs",
    },
    {
      name: "Tools",
      link: "tools",
    },
    {
      name: "Website Development",
      link: "website_development",
    },
  ];

  return (
    <div className="tableOfContentContainer">
      {pages.map((page, index) => (
        <Link key={index} to={page.link}>
          {page.name}
        </Link>
      ))}
    </div>
  );
}
