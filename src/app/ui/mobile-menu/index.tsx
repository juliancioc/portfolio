"use client";

import Link from "next/link";

import styles from "./menu-mobile.module.css";

type MobileMenuProps = {
  showMobileMenu: boolean;
};

export default function MobileMenu({ showMobileMenu }: MobileMenuProps) {
  return (
    <div className={`${styles.container} ${showMobileMenu ? styles.open : ""}`}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Sobre</Link>
          </li>
          <li>
            <Link href="/">Skills</Link>
          </li>
          <li>
            <Link href="/">Portfólio</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
