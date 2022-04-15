const customFetch = (time, task, type, IDcode) => {
  return new Promise((res, rej) => {

    const filter = type === 'C' ? task.filter(p=>p.category === IDcode) : task.find(p => p.id === parseInt(IDcode))
    setTimeout(() => {
        IDcode ? res(filter) : res(task)
    }, time);
  });
};
export default customFetch;


