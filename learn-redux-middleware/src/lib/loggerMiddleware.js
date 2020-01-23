const loggerMiddleware = store => next => action => {
  console.group(action && action.type); // grouping by action type
  console.log('Previous state', store.getState());
  console.log('action', action);
  next(action);
  console.log('Next state', store.getState());
  console.groupEnd(); //end group
};

export default loggerMiddleware;