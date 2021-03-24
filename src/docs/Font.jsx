import React from 'react';
import PropTypes from 'prop-types';
import { combineClasses } from '@thesoulfresh/utils';

export const defaultFamilies = ['Title', 'Body', 'Code'];
export const defaultWeights = ['Normal', 'Medium', 'Bold'];
export const defaultSizes = ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'];

export function Lorem({
  className,
  ...rest
}) {
  return (
    <div className={combineClasses('sfLorem', className)} {...rest}>
      The quick brown fox jumps over the lazy dog.
    </div>
  );
}

/**
 * @param {object} props
 * @param {*} [props.children]
 * @param {string[]} [props.sizes]
 */
export function Font({
  children,
  className,
  sizes = defaultSizes,
  ...rest
}) {
  return (
    <div className={combineClasses('sfFont', className)} {...rest}>
      { sizes.reverse().map(s => (
        <Lorem
          className={`font-size-${s}`}
          key={s}
        />
      ))}
    </div>
  );
}

/**
 * Shows the font families available in your theme.
 *
 * @param {object} props
 * @param {string[]} [props.families] - The list of families
 *   in your theme if different than the defaults.
 */
export function FontFamilies({
  className,
  families = defaultFamilies,
  children,
  ...rest
}) {
  return (
    <div
      className={combineClasses('sfFontFamilies', className)}
      {...rest}
    >
      { families.map(f => (
        <div key={f}
          className={combineClasses(
            `font-${f.toLowerCase()}`,
            'sfFont',
          )}
        >
          <h3 className="sfFontName">{ f }</h3>
          <Lorem
            className={`font-size-xl`}
          />
        </div>
      ))}
    </div>
  );
}

FontFamilies.propTypes = {
  /**
   * The list of families in your theme if different
   * than the defaults
   */
  families: PropTypes.arrayOf(PropTypes.string),
  /**
   * Any other props you specify will be applied
   * to the root element.
   */
  'other props...': PropTypes.any,
}


/**
 * Shows the font sizes available in your theme.
 *
 * @param {object} props
 * @param {string[]} [props.sizes] - The list of families
 *   in your theme if different than the defaults.
 */
export function FontSizes({
  className,
  sizes = defaultSizes,
  ...rest
}) {
  return (
    <div
      className={combineClasses('sfFontFamilies', className)}
      {...rest}
    >
      <Font className={`font-body`} />
    </div>
  );
}

FontSizes.propTypes = {
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
}

export function FontWeight({
  className,
  children,
  families = defaultFamilies,
  ...rest
}) {
  return (
    <div
      className={combineClasses('sfFontWeight', className)}
      {...rest}
    >
      <h3 className="sfFontName">{ children }</h3>
      { families.map(f => (
        <Lorem
          key={f}
          className={combineClasses(
            'sfFontWeightLorem',
            `font-${f.toLowerCase()}`,
            'show-family-name',
          )}
        />
      ))}
    </div>
  );
}

/**
 * Shows the font families available in your theme.
 *
 * @param {object} props
 * @param {string[]} [props.weights] - The list of families
 *   in your theme if different than the defaults.
 */
export function FontWeights({
  weights = defaultWeights,
  className,
  ...rest
}) {
  return (
    <div className={combineClasses('sfFontWeights', className)} {...rest}>
      { weights.map(w => (
        <FontWeight
          className={`font-weight-${w.toLowerCase()}`}
          key={w}
        >
          { w }
        </FontWeight>
      ))}
    </div>
  );
}

FontWeights.propTypes = {
  /**
   * The list of weights in your theme if different
   * than the defaults
   */
  weights: PropTypes.arrayOf(PropTypes.string),
  /**
   * Any other props you specify will be applied
   * to the root element.
   */
  'other props...': PropTypes.any,
}

