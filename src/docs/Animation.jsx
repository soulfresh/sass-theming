import React from 'react';

import { combineClasses } from '@thesoulfresh/utils';

export function AnimationItem({
  speed,
}) {
  const [active, setActive] = React.useState(false);
  return (
    <div
      className={combineClasses(
        "sfAnimationItem",
        speed,
        active ? 'active' : null,
      )}
    >
      <button
        className="anim"
        onClick={() => setActive(a => !a)}
      >{speed}</button>
    </div>
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
      <div className="sfDescription">Click The Boxes Below</div>
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
      <div className="sfDescription">Click The Boxes Below</div>
      {speeds.map(s => <AnimationItem speed={s} key={s} />)}
    </div>
  );
}
