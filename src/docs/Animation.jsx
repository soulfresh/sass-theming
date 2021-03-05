import React from 'react';

import { combineClasses } from '@thesoulfresh/utils';

import styles from './Animation.module.scss';

export function AnimationSpeed() {
  const anims = [
   'xs', 's', 'm', 'l', 'xl'
  ];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    let timeout = setTimeout(() => {
      setIndex(i => {
        ++i;
        if (i >= anims.length) i = 0;
        return i;
      });
      timeout = null;
    }, 1000);

    return () => {
      if (timeout) clearTimeout(timeout);
    }
  });

  return (
    <div className={styles.AnimationSpeed}>
      {anims.map(s =>
        <div
          className={combineClasses(
            styles.anim,
            s,
            anims[index] === s ? 'active' : null,
          )}
        >{s}</div>
      )}
    </div>
  );
}
