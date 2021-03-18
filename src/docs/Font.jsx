import React from 'react';
import PropTypes from 'prop-types';
import { combineClasses } from '@thesoulfresh/utils';

export const defaultFamilies = ['Title', 'Body', 'Code'];
export const defaultWeights = ['Normal', 'Medium', 'Bold'];

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
  sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'],
  ...rest
}) {
  return (
    <div className={combineClasses('sfFont', className)} {...rest}>
      <h3 className="sfFontName">{ children }</h3>
      { sizes.reverse().map(s => (
        <Lorem
          className={`font-size-${s}`}
          key={s}
        />
      ))}
    </div>
  );
}


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
          <h3 className="font-name">{ f }</h3>
          <Lorem
            className={`font-size-xl`}
          />
        </div>
      ))}
    </div>
  );
}


export function FontSizes({
  className,
  ...rest
}) {
  return (
    <div
      className={combineClasses('sfFontFamilies', className)}
      {...rest}
    >
      <Font className={`font-body`}>Body Font</Font>
    </div>
  );
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
      <h3 className="font-name">{ children }</h3>
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

