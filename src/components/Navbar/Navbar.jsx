import Link from "next/link";
import { NavLinks } from "@/constants";
import styles from "./Navbar.module.scss";
import Logo from "@/../public/image/icons/YouTour.svg";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <Link href="#">
          <Logo className={styles.logo} />
        </Link>
        <ul className={styles.list}>
          {NavLinks.map((link) => {
            return (
              <li key={link.key}>
                <Link href={link.href} key={link.key}>
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
        <a href="tel:+79999999999">+7 999 999 99 99</a>
      </nav>
    </div>
  );
};

export default Navbar;
