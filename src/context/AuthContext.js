import React, { useState} from "react";
import createDataContext from './createDataContext';
import Post from '../components/RestPost';
import {Get} from '../components/RestGet';
const authReducer = (state, action) => {
  switch (action.type) {
    case 'signout':
      return {token: null, email: ''};
    case 'signin':
    return {
            email: action.payload.email,
            token: action.payload.token,
          };
    case 'signup':
      return {
        token: action.payload.token,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

const signup = dispatch => {
  return ({email, password, password2}) => {
    Post("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_1/login",
                JSON.stringify({
                 email: email,
                 password: password,
                 password2: password2,
                 firstName: "NULL",
                 lastName: "NULL",
                 phoneNumber: "NULL",
                 }))
  };
};

const signin = dispatch => {
const [account, setAccount] = useState("");
  return ({email, password}) => {
    // Do some API Request here
   Get("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_1/login","?email="+email+"&password="+password)
   .then(response => setAccount(response));
    if(account == "User info correct"){
    dispatch({
      type: 'signin',
      payload: {
        token: 'some access token here',
        email,
      },
    });
    }
  };
};

const signout = dispatch => {
  return () => {
    dispatch({type: 'signout'});
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup},
  {token: null, email: ''},
);
