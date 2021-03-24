import React from 'react';
import PropTypes from 'prop-types';

import { combineClasses } from '@thesoulfresh/utils';

export default function Size({
  name,
  className,
  ...rest
}) {
  return (
    <div className={combineClasses('sfSize', className)} {...rest}>
      <div className={'name'}>{ name }</div>
      <div className="sfMeasurement"></div>
    </div>
  );
}

/**
 * Shows the sizes available in your theme.
 *
 * @param {object} props
 * @param {string[]} [props.sizes] - The list of families
 *   in your theme if different than the defaults.
 */
export function Sizes({
  sizes = ['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'],
  className,
  ...rest
}) {
  return (
    <div className={combineClasses('sfSizes', className)} {...rest}>
      { sizes.map(s =>
        <Size key={s} name={s} className={`size-${s}`} />
      )}
    </div>
  );
}

Sizes.propTypes = {
  /**
   * The list of sizes in your theme if different
   * than the defaults
   */
  sizes: PropTypes.arrayOf(PropTypes.string),
  /**
   * Any other props you specify will be applied
   * to the root element.
   */
  'other props...': PropTypes.any,
};


/**
 * Shows the breakpoints available in your theme.
 *
 * @param {object} props
 * @param {string[]} [props.sizes] - The list of families
 *   in your theme if different than the defaults.
 */
export function Breakpoints({
  sizes = ['xs', 's', 'm', 'l', 'xl'],
  className,
  ...rest
}) {
  return (
    <div className={combineClasses('sfSizes', className)} {...rest}>
      { sizes.map(s =>
        <Size key={s} name={s} className={`breakpoint-${s}`} />
      )}
    </div>
  );
}

Breakpoints.propTypes = {
  /**
   * The list of sizes in your theme if different
   * than the defaults
   */
  sizes: PropTypes.arrayOf(PropTypes.string),
  /**
   * Any other props you specify will be applied
   * to the root element.
   */
  'other props...': PropTypes.any,
};


export function Radius({
  size,
  className,
  ...rest
}) {
  return (
    <div className={combineClasses('sfRadius', className)} {...rest}>
      { size }
    </div>
  );
}


/**
 * Shows the radius values available in your theme.
 *
 * @param {object} props
 * @param {string[]} [props.sizes] - The list of families
 *   in your theme if different than the defaults.
 */
export function Radii({
  sizes = ['s', 'm', 'l'],
  className,
  ...rest
}) {
  return (
    <div className={combineClasses('sfRadii', className)} {...rest}>
      { sizes.map(s => (
        <Radius key={s} size={s} className={`radius-${s}`} />
      ))}
    </div>
  );
}

Radii.propTypes = {
  /**
   * The list of sizes in your theme if different
   * than the defaults
   */
  sizes: PropTypes.arrayOf(PropTypes.string),
  /**
   * Any other props you specify will be applied
   * to the root element.
   */
  'other props...': PropTypes.any,
};

