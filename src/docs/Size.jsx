import React from 'react';

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

Size.propTypes = {
};

export function Sizes({
  className,
  ...rest
}) {
  const sizes = ['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'];

  return (
    <div className={combineClasses('sfSizes', className)} {...rest}>
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
    <div className={combineClasses('sfSizes', className)} {...rest}>
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
    <div className={combineClasses('sfRadius', className)} {...rest}>
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
    <div className={combineClasses('sfRadii', className)} {...rest}>
      { sizes.map(s => (
        <Radius key={s} size={s} className={`radius-${s}`} />
      ))}
    </div>
  );
}

Radii.propTypes = {
};

