import React from 'react';
// import PropTypes from 'prop-types';

import { combineClasses } from '@thesoulfresh/utils';

import styles from './Size.module.scss';

export default function Size({
  name,
  className,
  ...rest
}) {
  return (
    <div className={combineClasses(styles.Size, className)} {...rest}>
      <div className={styles.name}>{ name }</div>
      <div className="measurement"></div>
    </div>
  );
}

Size.propTypes = {
};

export function Sizes({
  className,
  ...rest
}) {
  const sizes = ['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'];

  return (
    <div className={combineClasses(styles.Sizes, className)} {...rest}>
      { sizes.map(s =>
        <Size key={s} name={s} className={`size-${s}`} />
      )}
    </div>
  );
}

Sizes.propTypes = {
};

export function Breakpoints({
  className,
  ...rest
}) {
  const sizes = ['xs', 's', 'm', 'l', 'xl'];

  return (
    <div className={combineClasses(styles.Sizes, className)} {...rest}>
      { sizes.map(s =>
        <Size key={s} name={s} className={`breakpoint-${s}`} />
      )}
    </div>
  );
}

Breakpoints.propTypes = {
};

export function Radius({
  size,
  className,
  ...rest
}) {
  return (
    <div className={combineClasses(styles.Radius, className)} {...rest}>
      { size }
    </div>
  );
}

Radius.propTypes = {
};

export function Radii({
  className,
  ...rest
}) {
  let sizes = ['s', 'm', 'l'];

  return (
    <div className={combineClasses(styles.Radii, className)} {...rest}>
      { sizes.map(s => (
        <Radius key={s} size={s} className={`radius-${s}`} />
      ))}
    </div>
  );
}

Radii.propTypes = {
};

