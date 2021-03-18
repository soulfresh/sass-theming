import React from 'react';
import PropTypes from 'prop-types';

import { combineClasses } from '@thesoulfresh/utils';

export default function Palette({
  name,
  hues,
  dark,
  className,
  ...rest
}) {

  return (
    <div className={combineClasses('sfPalette', className)}>
      <h3 className={'paletteTitle'}>{ name }</h3>
      <ul
        className={combineClasses(name.toLowerCase(), 'color-palette')}
        {...rest}
      >
        { hues.map(hue => (
          <li
            key={hue}
            className={combineClasses(`hue-${hue}`, 'color')}
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
  let hues = ['50'];
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
    'focus',
    'divider',
    'border',
  ];

  return (
    <Palette className={'sfForegroundPalette'} hues={hues} {...rest} />
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
    'input',
    'hover',
    'shaded',
    'deeply-shaded',
    'overlay',
    'fade',
    'focus',
    'highlight',
  ];

  return (
    <Palette
      className={combineClasses('sfBackgroundPalette', className)}
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
    'overlay',
    'card',
  ];

  return (
    <Palette
      className={combineClasses('sfShadowsPalette', className)}
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
    'light',
    'focus',
    'primary',
  ];

  return (
    <Palette
      className={combineClasses('sfGradientsPalette', className)}
      hues={hues}
      {...rest}
    />
  );
}


