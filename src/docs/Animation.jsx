import React from 'react';

import { combineClasses } from '@thesoulfresh/utils';

import styles from './Animation.module.scss';

export function AnimationItem({
  speed,
}) {
  const [active, setActive] = React.useState(false);
  return (
    <button
      className={combineClasses(
        styles.anim,
        speed,
        active ? 'active' : null,
      )}
      onClick={() => setActive(a => !a)}
    >{speed}</button>
  );
}

export function AnimationSpeed({
  speeds = ['xs', 's', 'm', 'l', 'xl'],
  className,
  ...rest
}) {
  return (
    <div
      className={combineClasses(styles.AnimationSpeed, className)}
      {...rest}
    >
      Click The Buttons
      {speeds.map(s => <AnimationItem speed={s} key={s} />)}
    </div>
  );
}

export function AnimationEasing({
  speeds = [
    'linear',
    'in',
    'out',
    'in-out',
    'in-soft',
    'out-soft',
    'in-out-soft',
    'in-hard',
    'out-hard',
    'in-out-hard',
    'in-bounce',
    'out-bounce',
    'in-out-bounce',
  ],
  className,
  ...rest
}) {
  return (
    <div
      className={combineClasses(styles.AnimationEasing, className)}
      {...rest}
    >
      Click The Buttons
      {speeds.map(s => <AnimationItem speed={s} key={s} />)}
    </div>
  );
}
