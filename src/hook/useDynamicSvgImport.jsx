'use client';

import { useEffect, useRef, useState } from 'react';

export const useDynamicSvgImport = (url) => {
  const importedIconRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const extractIconName = (url) => {
    const match = url.match(/\/([^/]+)\.svg$/);

    return match ? match[1] : '';
  };

  useEffect(() => {
    setLoading(true);

    const importSvgIcon = async () => {
      try {
        const iconName = extractIconName(url);
        const context = require.context(
          'public/image/socials',
          false,
          /\.svg$/,
        );
        const svgModule = await context(`./${iconName}.svg`);
        importedIconRef.current = svgModule.default;
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    importSvgIcon();
  }, [url]);

  return { error, loading, SvgIcon: importedIconRef.current };
};
