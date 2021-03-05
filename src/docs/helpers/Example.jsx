import React from 'react';

import { combineClasses } from '~/util';
import { MiniTitle } from '~/components';

import styles from './Example.module.scss';

export function RowOfItems(s) {
  return (
    <div style={styles} className={styles.RowOfItems}>
      { s() }
    </div>
  );
}

export function ColumnOfItems(s) {
  return (
    <div className={styles.ColumnOfItems}>
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
      dark ? styles.dark : null,
      dark ? 'dark' : null,
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
      styles.LightTheme,
      className,
      column ? styles.ColumnOfItems : null,
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
    className={combineClasses(styles.ColumnOfItems, className)}
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
    className={combineClasses(styles.RowOfItems, className)}
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
    className={combineClasses(styles.Centered, className)}
    {...rest}
  />
);

