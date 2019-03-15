export default function ({dispatch}) {
  return next => action => {
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    return action.payload
      .then(response => {
        console.log('api response >>>>>>>>', response);
        const newAction = {...action, payload: response};
        dispatch(newAction);
      });
  };
};
