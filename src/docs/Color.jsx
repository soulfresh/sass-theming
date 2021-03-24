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

/**
 * Shows a numbered color palette based on the palette
 * name and hue list specified.
 *
 * @param {object} props
 * @param {string} props.name - The name of the palette
 *   to show (ex. Primary, Grayscale, Error, etc).
 */
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
  /**
   * The name of the palette to show.
   */
  name: PropTypes.string.isRequired,
  /**
   * Any other props will be spread on
   * the root element.
   */
  'other props...': PropTypes.any,
};

/**
 * Shows the foreground palette for a theme.
 *
 * TODO Allow specifying the theme name to show
 * instead of the `dark` flag which limits us to
 * just those two themes.
 *
 * @param {object} props
 * @param {string} props.name - The name of the palette
 *   to show (ex. Primary, Grayscale, Error, etc).
 * @param {string[]} [props.hues] - The list of hues
 *   available for your theme if different than the default.
 * @param {boolean} [prop.dark] - Whether it is the dark
 *   theme you want to show.
 */
export function ForegroundPalette({
  hues = [
    'opaque',
    'text',
    'light-text',
    'faded-text',
    'disabled-text',
    'focus',
    'divider',
    'border',
  ],
  className,
  ...rest
}) {
  return (
    <Palette className={'sfForegroundPalette'} hues={hues} {...rest} />
  );
}

ForegroundPalette.propTypes = {
  /**
   * The name of the palette to show.
   */
  name: PropTypes.string.isRequired,
  /**
   * The list of hue names available in your project.
   */
  hues: PropTypes.arrayOf(PropTypes.string),
  /**
   * Whether to render the dark theme.
   */
  dark: PropTypes.bool,
  /**
   * Any other props will be applied to
   * the root element.
   */
  'other props...': PropTypes.any,
};

/**
 * Shows the background palette for a theme.
 *
 * TODO Allow specifying the theme name to show
 * instead of the `dark` flag which limits us to
 * just those two themes.
 *
 * @param {object} props
 * @param {string} props.name - The name of the palette
 *   to show (ex. Primary, Grayscale, Error, etc).
 * @param {string[]} [props.hues] - The list of hues
 *   available for your theme if different than the default.
 * @param {boolean} [prop.dark] - Whether it is the dark
 *   theme you want to show.
 */
export function BackgroundPalette({
  hues = [
    'default',
    'input',
    'hover',
    'shaded',
    'deeply-shaded',
    'overlay',
    'fade',
    'focus',
    'highlight',
  ],
  className,
  ...rest
}) {
  return (
    <Palette
      className={combineClasses('sfBackgroundPalette', className)}
      hues={hues}
      {...rest}
    />
  );
}

BackgroundPalette.propTypes = {
  /**
   * The name of the palette to show.
   */
  name: PropTypes.string.isRequired,
  /**
   * The list of hue names available in your project.
   */
  hues: PropTypes.arrayOf(PropTypes.string),
  /**
   * Whether to render the dark theme.
   */
  dark: PropTypes.bool,
  /**
   * Any other props will be applied to
   * the root element.
   */
  'other props...': PropTypes.any,
};

/**
 * Shows the shadows palette for a theme.
 *
 * TODO Allow specifying the theme name to show
 * instead of the `dark` flag which limits us to
 * just those two themes.
 *
 * @param {object} props
 * @param {string} props.name - The name of the palette
 *   to show (ex. Primary, Grayscale, Error, etc).
 * @param {string[]} [props.hues] - The list of hues
 *   available for your theme if different than the default.
 * @param {boolean} [prop.dark] - Whether it is the dark
 *   theme you want to show.
 */
export function ShadowsPalette({
  hues = [
    'overlay',
    'card',
  ],
  className,
  ...rest
}) {
  return (
    <Palette
      className={combineClasses('sfShadowsPalette', className)}
      hues={hues}
      {...rest}
    />
  );
}

ShadowsPalette.propTypes = {
  /**
   * The name of the palette to show.
   */
  name: PropTypes.string.isRequired,
  /**
   * The list of hue names available in your project.
   */
  hues: PropTypes.arrayOf(PropTypes.string),
  /**
   * Whether to render the dark theme.
   */
  dark: PropTypes.bool,
  /**
   * Any other props will be applied to
   * the root element.
   */
  'other props...': PropTypes.any,
};

/**
 * Shows the gradient palette for a theme.
 *
 * TODO Allow specifying the theme name to show
 * instead of the `dark` flag which limits us to
 * just those two themes.
 *
 * @param {object} props
 * @param {string} props.name - The name of the palette
 *   to show (ex. Primary, Grayscale, Error, etc).
 * @param {string[]} [props.hues] - The list of hues
 *   available for your theme if different than the default.
 * @param {boolean} [prop.dark] - Whether it is the dark
 *   theme you want to show.
 */
export function GradientsPalette({
  hues = [
    'light',
    'focus',
    'primary',
  ],
  className,
  ...rest
}) {
  return (
    <Palette
      className={combineClasses('sfGradientsPalette', className)}
      hues={hues}
      {...rest}
    />
  );
}


GradientsPalette.propTypes = {
  /**
   * The name of the palette to show.
   */
  name: PropTypes.string.isRequired,
  /**
   * The list of hue names available in your project.
   */
  hues: PropTypes.arrayOf(PropTypes.string),
  /**
   * Whether to render the dark theme.
   */
  dark: PropTypes.bool,
  /**
   * Any other props will be applied to
   * the root element.
   */
  'other props...': PropTypes.any,
};

