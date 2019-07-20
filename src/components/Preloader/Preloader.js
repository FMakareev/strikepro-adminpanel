import * as React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const PreloaderSizeEnum = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
};

export const PreloaderThemeEnum = {
  light: 'light',
  dark: 'dark',
  blue: 'blue',
};
//
export const PreloaderPositionEnum = {
  center: 'center',
};

export const PreloaderTypeEnum = {
  inline: 'inline',
  block: 'block',
};


export const Preloader = ({size, theme, position, type, style}) => (
  <div style={style} className={classNames("preloader", {
    'preloader--xs': PreloaderSizeEnum.xs === size,
    'preloader--sm': PreloaderSizeEnum.sm === size,
    'preloader--md': PreloaderSizeEnum.md === size,
    'preloader--dark': PreloaderThemeEnum.dark === theme,
    'preloader--light': PreloaderThemeEnum.light === theme,
    'preloader--blue': PreloaderThemeEnum.blue === theme,
    'preloader--position-center ': PreloaderPositionEnum.center === position,
    'preloader--block ': PreloaderTypeEnum.block === type,
  })}>
    <div/>
    <div/>
    <div/>
    <div/>
  </div>);


Preloader.propTypes = {
  size: PropTypes.oneOf(PreloaderSizeEnum),
  theme: PropTypes.oneOf(PreloaderThemeEnum),
  position: PropTypes.oneOf(PreloaderPositionEnum),
  type: PropTypes.oneOf(PreloaderTypeEnum),
  style: PropTypes.any,
}
Preloader.defaultProps = {
  size: PreloaderSizeEnum.sm,
  theme: PreloaderThemeEnum.blue,
}


export default Preloader;
