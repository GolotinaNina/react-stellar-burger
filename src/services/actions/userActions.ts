import { AppThunk } from "../../types/thunk";
import { TUser } from "../../types/types";
import { tokens } from "../../utils/tokens";
export const SET_AUTH_CHECKED = "SET_AUTH_CHECKED";
export const SET_USER = "SET_USER";
export const SET_USER_ERROR = "SET_USER_ERROR"


export type setAuthCheckedActions = {
  type: typeof SET_AUTH_CHECKED,
  payload: boolean
}

export type setUserAction = {
  type: typeof SET_USER,
  payload: TUser | null;
}


export type TUserAction =
    | setAuthCheckedActions
    | setUserAction

export const setAuthChecked = (value:boolean):setAuthCheckedActions => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

export const setUser = (user:null | TUser):setUserAction => ({
  type: SET_USER,
  payload: user,
});

export const getUser = (): AppThunk<Promise<void>> => {
  return async (dispatch) => {
    try {
      const res = await tokens.getUser();
      dispatch(setUser(res.user));
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
};

export const login = (email: string, pass: string): AppThunk<Promise<void>> => {
  return async (dispatch) => {
    try {
      const res = await tokens.login(email, pass);
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      dispatch(setUser(res.user));
      dispatch(setAuthChecked(true));
    } catch (error) {
      console.error("Error:", error);
    }
  };
};

export const logout = (): AppThunk<Promise<void>> => {
  return async (dispatch) => {
    try {
      await tokens.logout();
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      dispatch(setUser(null));
    } catch (error) {
      console.error("Error:", error);
    }
  };
};


export const checkUserAuth = (): AppThunk => {
  return (dispatch) => {
    if (localStorage.getItem("accessToken")) {
      dispatch(getUser())
        .catch((error) => {
          console.error("Error fetching user:", error);
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          dispatch(setUser(null));
        })
        .finally(() => dispatch(setAuthChecked(true)));
    } else {
      dispatch(setAuthChecked(true));
    }
  };
};



