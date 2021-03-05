import React from 'react';
import { combineClasses } from '@thesoulfresh/utils';

import styles from './Font.module.scss';

export const fontFamilies = ['Title', 'Body', 'Code'];
export const fontWeights = ['Normal', 'Medium', 'Bold'];

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

export function Font({
  children,
  className,
  ...rest
}) {
  let sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'];

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
  ...rest
}) {
  return (
    <div
      className={combineClasses(styles.FontFamilies, className)}
      {...rest}
    >
      { fontFamilies.map(f => (
        <Font className={`font-${f.toLowerCase()}`} key={f}>{ f }</Font>
      ))}
    </div>
  );
}


export function FontWeight({
  className,
  children,
  ...rest
}) {
  return (
    <div
      className={combineClasses(styles.FontWeight, className)}
      {...rest}
    >
      <h3>{ children }</h3>
      { fontFamilies.map(f => (
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
  className,
  ...rest
}) {
  return (
    <div className={combineClasses(styles.FontWeights, className)} {...rest}>
      { fontWeights.map(w => (
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

