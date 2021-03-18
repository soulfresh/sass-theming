import React from 'react';

import { combineClasses } from '@thesoulfresh/utils';

export function AnimationItem({
  speed,
}) {
  const [active, setActive] = React.useState(false);
  return (
    <button
      className={combineClasses(
        'anim',
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
      className={combineClasses('sfAnimationSpeed', className)}
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
      className={combineClasses('sfAnimationEasing', className)}
      {...rest}
    >
      Click The Buttons
      {speeds.map(s => <AnimationItem speed={s} key={s} />)}
    </div>
  );
}
