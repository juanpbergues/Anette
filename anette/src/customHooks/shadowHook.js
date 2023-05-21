/* eslint-disable require-jsdoc */
import {useState} from 'react';

export function useScrollWithShadow() {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const onScrollHandler = (event) => {
    setScrollTop(event.target.scrollTop);
    setScrollHeight(event.target.scrollHeight);
    setClientHeight(event.target.clientHeight);
  };

  function getBoxShadow() {
    const isBottom = clientHeight === scrollHeight - scrollTop;
    const isTop = scrollTop === 0;
    const isBetween = scrollTop > 0 && clientHeight < scrollHeight - scrollTop;

    let boxShadow = {top: false, down: false};

    if (isTop) {
      boxShadow = {...boxShadow, down: true};
    } else if (isBetween) {
      boxShadow = {down: true, top: true};
    } else if (isBottom) {
      boxShadow = {...boxShadow, top: true};
    }
    return boxShadow;
  }

  return {boxShadow: getBoxShadow(), onScrollHandler};
}
