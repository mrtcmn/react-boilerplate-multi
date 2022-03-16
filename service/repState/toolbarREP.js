import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { of, concat } from 'rxjs';
import { repsFunction } from '@service/utils/repUtil';

export const toolbar = {
  defaultStates: {
    count: 0,
    countText: 0,
  },
  actions: ['SET_COUNT', 'SET_COUNT_TEXT'],
  actionsFunctions: {
    setCount: {
      type: 'SET_COUNT',
      handler: ({ count }) => count,
    },
    setCountText: {
      type: 'SET_COUNT_TEXT',
      handler: ({ count }) => count,
    },
  },
  reducerActions: (state, action) => ({
    SET_COUNT: () => ({
      ...state,
      count: action.payload,
    }),
    SET_COUNT_TEXT: () => ({
      ...state,
      countText: action.payload,
    }),
  }),
  epics: {
    setCountEpic: (action$, state$) =>
      action$.pipe(
        ofType('SET_COUNT'),
        mergeMap((action) => {
          console.log('setCountEpic');

          return concat(
            of(
              repsFunction(toolbar.actionsFunctions.setCountText)({
                count: action.payload,
              })
            )
          );
        })
      ),
  },
};
