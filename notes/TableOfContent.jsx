import React from "react";
import { Link } from "react-router-dom";

export default function TableOfContent() {
  const pages = [
    {
      name: "Software Dev",
      link: "software_development",
    },
    {
      name: "Web Dev",
      link: "website_development",
    },
    {
      name: "Angular",
      link: "angular",
    },
    {
      name: "Django",
      link: "django",
    },
    {
      name: "Docker",
      link: "docker",
    },
    {
      name: "JavaScript",
      link: "javascript",
    },
    {
      name: "ML DL",
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
      name: "Try",
      link: "try",
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
