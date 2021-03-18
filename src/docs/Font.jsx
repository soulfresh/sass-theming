import React from 'react';
import PropTypes from 'prop-types';
import { combineClasses } from '@thesoulfresh/utils';

import styles from './Font.module.scss';

export const defaultFamilies = ['Title', 'Body', 'Code'];
export const defaultWeights = ['Normal', 'Medium', 'Bold'];

export function Lorem({
  className,
  ...rest
}) {
  return (
    <div className={combineClasses('lorem', className)} {...rest}>
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
    <div className={combineClasses(styles.Font, className)} {...rest}>
      <h3 className="font-name">{ children }</h3>
      { sizes.reverse().map(s => (
        <Lorem
          className={`font-size-${s} ${styles.fontSize}`}
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
      className={combineClasses(styles.FontFamilies, className)}
      {...rest}
    >
      { families.map(f => (
        <div key={f}
          className={combineClasses(
            `font-${f.toLowerCase()}`,
            styles.Font,
          )}
        >
          <h3 className="font-name">{ f }</h3>
          <Lorem
            className={`font-size-xl ${styles.fontSize}`}
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
      className={combineClasses(styles.FontFamilies, className)}
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
      className={combineClasses(styles.FontWeight, className)}
      {...rest}
    >
      <h3 className="font-name">{ children }</h3>
      { families.map(f => (
        <Lorem
          key={f}
          className={combineClasses(
            styles.fontWeightLorem,
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
    <div className={combineClasses(styles.FontWeights, className)} {...rest}>
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

