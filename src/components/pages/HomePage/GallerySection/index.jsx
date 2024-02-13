'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import cx from 'classnames';

import { Section } from '@commons/Section';
import { useDeviceType } from '@/context/DeviceTypeContext';

import { galleryInfo, photoArray } from './config';
import { filterPhotosGallery } from './lib';

import s from './GallerySection.module.scss';

export const GallerySection = () => {
  const [modiPhotos, setModiPhotos] = useState([]);
  const deviceType = useDeviceType();

  const { title, subtitle } = galleryInfo;

  useEffect(() => {
    const filteredPhotos = filterPhotosGallery(photoArray, deviceType);
    setModiPhotos(filteredPhotos);
  }, [deviceType]);

  return (
    <Section title={title} subtitle={subtitle} id="gallery">
      <div className={s.root}>
        {modiPhotos.map((row, rowIndex) => (
          <div
            className={cx(s.row, {
              [s['row-small']]: rowIndex % 2 === 0,
            })}
            key={rowIndex}
          >
            {row.map((photoPath, columnIndex) => {
              const fileName = photoPath.split('/').pop();
              return (
                <div className={s.item} key={fileName}>
                  <Image
                    src={photoPath}
                    fill
                    alt={`Travel Photo ${columnIndex + rowIndex * row.length + 1}`}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </Section>
  );
};
