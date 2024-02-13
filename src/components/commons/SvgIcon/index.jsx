'use client';

import { string, oneOfType, arrayOf, object } from 'prop-types';

import { useDynamicSvgImport } from '@/hook/useDynamicSvgImport';

export const SvgIcon = ({ iconUrl, wrapperStyle, svgProp }) => {
  const { SvgIcon } = useDynamicSvgImport(iconUrl);

  return (
    <>
      {SvgIcon && (
        <div className={wrapperStyle}>
          <SvgIcon {...svgProp} />
        </div>
      )}
    </>
  );
};

SvgIcon.propTypes = {
  iconUrl: string.isRequired,
  wrapperStyle: oneOfType([string, arrayOf(string)]).isRequired,
  svgProp: object,
};
