import { useDynamicSvgImport } from '@/shared/hook/useDynamicSvgImport';

export function SvgIcon(props) {
  const { iconName, wrapperStyle, svgProp } = props;
  const { SvgIcon } = useDynamicSvgImport(iconName);

  return (
    <>
      {SvgIcon && (
        <div className={wrapperStyle}>
          <SvgIcon {...svgProp} />
        </div>
      )}
    </>
  );
}
