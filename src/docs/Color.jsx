import React from 'react';
import PropTypes from 'prop-types';

import { combineClasses } from '@thesoulfresh/utils';

import styles from './Color.module.scss';

export default function Palette({
  name,
  hues,
  dark,
  className,
  ...rest
}) {

  return (
    <div className={combineClasses(styles.Palette, className)}>
      <h3 className={styles.paletteTitle}>{ name }</h3>
      <ul
        className={combineClasses(name.toLowerCase(), 'color-palette')}
        {...rest}
      >
        { hues.map(hue => (
          <li
            key={hue}
            className={combineClasses(`hue-${hue}`, styles.color, 'color')}
          >
            { hue }
          </li>
        ))}
      </ul>
    </div>
  );
}

Palette.propTypes = {
  name: PropTypes.string.isRequired,
  hues: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export function ColorPalette({
  ...rest
}) {
  let hues = [];
  for (let i = 1; i < 10; i++) {
    hues.push(`${i * 100}`);
  }

  return (
    <Palette hues={hues} {...rest} />
  );
}

ColorPalette.propTypes = {
};

export function ForegroundPalette({
  className,
  ...rest
}) {
  const hues = [
    'opaque',
    'default',
    'text',
    'light-text',
    'faded-text',
    'disabled-text',
    // TODO Add focus color
    // 'focus',
    'divider',
    'border',
  ];

  return (
    <Palette className={styles.ForegroundPalette} hues={hues} {...rest} />
  );
}

ForegroundPalette.propTypes = {
};

export function BackgroundPalette({
  className,
  ...rest
}) {
  const hues = [
    'default',
    'hover',
    // TODO Add focus color
    // 'focus',
    'input',
    'overlay',
    'fade',
  ];

  return (
    <Palette
      className={combineClasses(styles.BackgroundPalette, className)}
      hues={hues}
      {...rest}
    />
  );
}

BackgroundPalette.propTypes = {
};

export function ShadowsPalette({
  className,
  ...rest
}) {
  const hues = [
    'light',
    'overlay',
  ];

  return (
    <Palette
      className={combineClasses(styles.ShadowsPalette, className)}
      hues={hues}
      {...rest}
    />
  );
}

export function GradientsPalette({
  className,
  ...rest
}) {
  const hues = [
    'active',
  ];

  return (
    <Palette
      className={combineClasses(styles.GradientsPalette, className)}
      hues={hues}
      {...rest}
    />
  );
}


