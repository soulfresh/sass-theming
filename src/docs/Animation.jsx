import React from 'react';
import PropTypes from 'prop-types';

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

/**
 * Shows the animation speeds available to the theme.
 *
 * @param {object} props
 * @param {string[]} [props.speeds] - Customize the speeds
 *   available in your project.
 */
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

AnimationSpeed.propTypes = {
  /**
   * The list of speeds available in your theme.
   */
  speeds: PropTypes.arrayOf(PropTypes.string),
  /**
   * Any other props will be spread on the root
   * element.
   */
  'other props...': PropTypes.any,
};

/**
 * Displays list of easing functions available in your theme.
 *
 * @param {object} props
 * @param {string[]} [props.easings] - The list of easing
 *   functions available in your theme.
 */
export function AnimationEasing({
  easings = [
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
      {easings.map(s => <AnimationItem speed={s} key={s} />)}
    </div>
  );
}

AnimationEasing.propTypes = {
  /**
   * The list of speeds available in your theme.
   */
  easings: PropTypes.arrayOf(PropTypes.string),
  /**
   * Any other props will be spread on the root
   * element.
   */
  'other props...': PropTypes.any,
};

