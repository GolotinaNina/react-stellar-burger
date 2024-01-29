import { PROFILE_ENDPOINT, checkResponse } from "./base-URL";
import { POST_REGISTER_ENDPOINT } from "./base-URL";
import { POST_PASSWORD_RESET_ENDPOINT } from "./base-URL";
import { POST_RESET_ENDPOINT } from "./base-URL";
import { setUser } from "../services/actions/userActions";
import { fetchWithRefresh } from "./reset-api";
import { AppThunk } from "../types/thunk";
import { TRegistration } from "../types/token";
import { TResUser } from "../types/types";
import { login } from "../services/actions/userActions";

export const register =  (name: string, pass: string, email: string): AppThunk => async (dispatch) => {
  try {
    const response = await fetch(POST_REGISTER_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: pass,
        name: name,
      }),
    })
    if (response.ok){
      const checkedResponse =  await checkResponse<TRegistration>(response)
      localStorage.setItem("accessToken", checkedResponse.accessToken);
      localStorage.setItem("refreshToken", checkedResponse.refreshToken);
      dispatch(login(email, pass));
      return checkedResponse;
    }
  } catch(e) {
    return Promise.reject(e)
  }
};

export const forgotPassword = async (email: string) => {
  const res = await fetch(POST_PASSWORD_RESET_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  });
  return await checkResponse(res);
};

export function postApiResetPassword(email:string) {
  forgotPassword(email)
    .then((res) => {
      console.log(res);
      localStorage.setItem("resetPasswordFlag", String(true));
    })
    .catch((err) => {
      console.log(err);
    });
}

export const resetPassword = async (newPassword: string, token: string) => {
  const res = await fetch(POST_RESET_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: newPassword,
      token: token,
    }),
  });
  return await checkResponse(res);
};

export function postApiReset(newPassword:string, token:string) {
  resetPassword(newPassword, token)
    .then((res) => {
      localStorage.removeItem("resetPasswordFlag");
    })
    .catch((err) => {
      console.log(err);
    });
}

export const updateUser = (email:string, name:string, password:string):AppThunk<Promise<unknown>> => {
  return (dispatch) => {
    const accessToken: string | null = localStorage.getItem("accessToken");
    return fetchWithRefresh<TResUser>(PROFILE_ENDPOINT, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: accessToken!,
      },
      body: JSON.stringify({
        email,
        name,
        password,
      }),
    }).then((res) => {
      dispatch(setUser(res.user));
    });
  };
};

