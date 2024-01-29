'use client';

import { useDeviceType } from '@/shared/context/DeviceTypeContext';
import { SvgIcon } from '@/entities/SvgIcon';
import { Container } from '@/shared/ui/layout/Container';

import { footerLinks } from '../config';

import styles from './Footer.module.scss';

export const Footer = () => {
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
                  <SvgIcon
                    iconName={
                      deviceType === 'mobile'
                        ? link.imageUrl.small
                        : link.imageUrl.full
                    }
                    wrapperStyle={styles['image-wrapper']}
                    svgProp={{ alt: link.name }}
                  />
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
