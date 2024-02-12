'use client';

import { useDeviceType } from '@/context/DeviceTypeContext';
import { SvgIcon } from '@commons/SvgIcon';
import { Container } from '@commons/Container';

import { footerLinks } from './config';

import s from './Footer.module.scss';

export const Footer = () => {
  const deviceType = useDeviceType();

  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.content}>
          <p className={s.text}>Наши социальные сети</p>
          <ul className={s.social}>
            {footerLinks.map((link, id) => (
              <li key={id} className={s.item}>
                <SvgIcon
                  iconUrl={
                    deviceType === 'mobile'
                      ? link.imageUrl.small
                      : link.imageUrl.full
                  }
                  wrapperStyle={s['image-wrapper']}
                  svgProp={{ alt: link.name }}
                />
                <a className={s.link} href={link.url}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
