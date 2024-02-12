'use client';

import PropTypes from 'prop-types';

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
  iconUrl: PropTypes.string.isRequired,
  wrapperStyle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  svgProp: PropTypes.object,
};
