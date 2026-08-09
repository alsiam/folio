"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LuUser, LuBriefcase } from "react-icons/lu";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const pathUrl = usePathname();

  return (
    <aside className={`aside ${open ? "open" : ""}`}>
      <div onClick={handleOpen} className="nav-toggler">
        <span />
      </div>
      <div className="aside-inner">
        <div className="logo">
          <Link href="/" onClick={handleClose}>
            gscripts
          </Link>
        </div>
        <ul className="nav">
          {/* <li onClick={handleClose}>
            <Link href="/" className={`${pathUrl == "/" && "active"}`}>
              <i className="fa fa-home" /> Home
            </Link>
          </li> */}
          <li onClick={handleClose}>
            <Link
              href="/about"
              className={`${pathUrl == "/about" && "active"}`}
            >
              <LuUser size={16} aria-hidden /> About
            </Link>
          </li>
          {/* <li onClick={handleClose}>
            <Link
              href="/services"
              className={`${pathUrl == "/services" && "active"}`}
            >
              <i className="fa fa-list" /> Services
            </Link>
          </li> */}
          <li onClick={handleClose}>
            <Link
              href="/portfolio"
              className={`${pathUrl == "/portfolio" && "active"}`}
            >
              <LuBriefcase size={16} aria-hidden /> Portfolio
            </Link>
          </li>
          {/* <li onClick={handleClose}>
            <Link href="/blog" className={`${pathUrl == "/blog" && "active"}`}>
              <i className="fa fa-envelope" /> Blog
            </Link>
          </li> */}
          {/* <li onClick={handleClose}>
            <Link
              href="/contact"
              className={`${pathUrl == "/contact" && "active"}`}
            >
              <i className="fa fa-comments" /> Contact
            </Link>
          </li> */}
        </ul>
        {/* <div className="copyright">
          Template Created with ❤️ By{" "}
          <a href="http://alsiam.com" target="_blank" rel="noopener noreferrer">
            Al Siam
          </a>
        </div> */}
      </div>
    </aside>
  );
};

export default Sidebar;
