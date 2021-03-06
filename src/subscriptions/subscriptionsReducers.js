import {
  LOGOUT,
  LOGIN_SUCCESS,
  ACCOUNT_SWITCH,
  INIT_SUBSCRIPTIONS,
  EVENT_SUBSCRIPTION_ADD,
  EVENT_SUBSCRIPTION_REMOVE,
} from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
    case LOGIN_SUCCESS:
    case ACCOUNT_SWITCH:
      return [];
    case INIT_SUBSCRIPTIONS:
      return action.subscriptions;
    case EVENT_SUBSCRIPTION_ADD:
      return state.concat(
        action.subscriptions.filter(x =>
          !state.find(y => x.stream_id === y.stream_id)
        )
      );
    case EVENT_SUBSCRIPTION_REMOVE: {
      return state.filter(x =>
        !action.subscriptions.find(y => x.stream_id === y.stream_id)
      );
    }
    default:
      return state;
  }
};
