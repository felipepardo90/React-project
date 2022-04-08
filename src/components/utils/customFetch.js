const customFetch = (time, task) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      true ? res(task) : rej("Error");
    }, time);
  });
};

export default customFetch;
