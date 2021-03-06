export type AuthReducerActionTypes =
  | {
      type: 'LOGIN';
      payload: string;
    }
  | {
      type: 'REGISTER';
      payload: string;
    };
type authState = {
  user: string | null;
};

const authReducer = (
  state: authState,
  action: AuthReducerActionTypes
): authState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
