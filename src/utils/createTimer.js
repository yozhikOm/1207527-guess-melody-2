function createTimer(time, callback) {
  return {
    tick: () => {
      time = time - 1;

      if (time === 0) {
        callback();
      }
      return time;
    }
  };
}

export {createTimer};
