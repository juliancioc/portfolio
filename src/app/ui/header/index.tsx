"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

import styles from "./header.module.css";
import MobileMenu from "../mobile-menu";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/">Juliancio Carvalho</Link>

        <nav>
          <ul className={styles.menu_desktop}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about">Sobre</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
            <li>
              <Link href="/#projects">Projetos</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
          </ul>

          <div
            className={styles.hamburger_menu}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <GiHamburgerMenu size={24} />
          </div>
        </nav>
      </div>
      <MobileMenu showMobileMenu={showMobileMenu} />
    </header>
  );
}
