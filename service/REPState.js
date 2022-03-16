const makeCombineReducers = (_stateConfig) => {
  const _allReducers = {};

  Object.keys(_stateConfig).forEach((reducerKey) => {
    const REDUCER_ITEM = _stateConfig[reducerKey];

    const _actions = (state = REDUCER_ITEM.defaultStates, action) => {
      try {
        return REDUCER_ITEM.reducerActions(state, action)[action.type]();
      } catch (e) {
        // console.error('State', reducerKey);

        return state;
      }
    };
    _allReducers[reducerKey] = _actions;
  });

  return _allReducers;
};

const makeActions = (_stateConfig) => {
  const _allActions = {};

  Object.keys(_stateConfig).forEach((reducerKey) => {
    const REDUCER_ITEM = _stateConfig[reducerKey];

    if (REDUCER_ITEM.actionsFunctions) {
      Object.keys(REDUCER_ITEM.actionsFunctions).forEach((actionKey) => {
        _allActions[actionKey] = (args) => ({
          payload: REDUCER_ITEM.actionsFunctions[actionKey].handler(args),
          type: REDUCER_ITEM.actionsFunctions[actionKey].type,
        });
      });
    }
  });

  return _allActions;
};

const makeCombineEpic = (_stateConfig) => {
  const _allEpics = [];

  Object.keys(_stateConfig).forEach((reducerKey) => {
    const REDUCER_ITEM = _stateConfig[reducerKey];

    if (REDUCER_ITEM.epics) {
      Object.keys(REDUCER_ITEM.epics).forEach((epicKey) => {
        _allEpics.push( REDUCER_ITEM.epics[epicKey]);
      });
    }
  });

  return _allEpics;
};

export const creteREPState = (_stateConfig) => {
  const combineReducers = makeCombineReducers(_stateConfig);
  const actions = makeActions(_stateConfig);
  const epics = makeCombineEpic(_stateConfig);

  return {
    combineReducers,
    actions,
    epics,
  };
};
