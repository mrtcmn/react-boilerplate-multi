export const repsFunction = (action) => (args) => ({
  type: action.type,
  payload: action.handler(args),
});
