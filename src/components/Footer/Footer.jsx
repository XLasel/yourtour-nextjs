"use client";

import Image from "next/image";
import { footerLinks } from "@/constants";
import useDeviceType from "@/hooks/useDeviceType";
import Container from "../layout/Container/Container";
import styles from "./Footer.module.scss";

const Footer = () => {
  const deviceType = useDeviceType();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <p className={styles.text}>Наши социальные сети</p>
          <ul className={styles.social}>
            {footerLinks.map((link, id) => {
              return (
                <li key={id} className={styles.item}>
                  <div className={styles["image-wrapper"]}>
                    <Image
                      fill
                      src={
                        deviceType === "mobile"
                          ? link.imageUrl.small
                          : link.imageUrl.full
                      }
                      className={styles.img}
                      alt={link.name}
                    />
                  </div>
                  <a className={styles.link} href={link.url}>
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
