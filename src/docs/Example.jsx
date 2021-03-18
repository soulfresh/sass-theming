import React from 'react';

import { combineClasses } from '~/util';
import { MiniTitle } from '~/components';

export function RowOfItems(s) {
  return (
    <div className={'sfRowOfItems'}>
      { s() }
    </div>
  );
}

export function ColumnOfItems(s) {
  return (
    <div className={'sfColumnOfItems'}>
      { s() }
    </div>
  );
}

function render(children) {
  return typeof(children) === 'function'
    ? children()
    : children;
}

// Non Decorators
// You can use these directly as components.
export const Example = React.forwardRef(({
  children,
  dark,
  className,
  ...rest
}, ref) =>
  <div
    data-testid="Example"
    ref={ref}
    className={combineClasses(
      className,
      dark ? 'sfDark' : null,
    )}
    {...rest}
  >
    { render(children) }
  </div>
);

/**
 * Renders a column of content with a title using
 * the default light theme.
 */
export const LightTheme = React.forwardRef(({
  className,
  children,
  column,
  title = 'LightTheme',
  ...rest
}, ref) =>
  <Example
    ref={ref}
    className={combineClasses(
      'sfLightTheme',
      className,
      column ? 'sfColumnOfItems' : null,
    )}
    {...rest}
  >
    <MiniTitle>{ title }</MiniTitle>
    { render(children) }
  </Example>
);

/**
 * Renders a column of content with a title using
 * the dark theme.
 */
export const DarkTheme = React.forwardRef((props, ref) =>
  <LightTheme dark title="Dark Theme" {...props} ref={ref} />
);

/**
 * Render a column of items.
 */
export const Column = React.forwardRef(({
  className,
  ...rest
}, ref) =>
  <Example
    ref={ref}
    className={combineClasses('sfColumnOfItems', className)}
    {...rest}
  />
);

/**
 * Render a row of items.
 */
export const Row = React.forwardRef(({
  className,
  ...rest
}, ref) =>
  <Example
    ref={ref}
    className={combineClasses('sfRowOfItems', className)}
    {...rest}
  />
);

/**
 * Center a single peice of content.
 */
export const Centered = React.forwardRef(({
  className,
  ...rest
}, ref) =>
  <Example
    ref={ref}
    className={combineClasses('sfCentered', className)}
    {...rest}
  />
);

