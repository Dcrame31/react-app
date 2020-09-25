import React from "react";

export default function manageUsers(
  state = {
    users: [],
    loading: false,
  },
  action
) {
  switch (action.type) {
    case "USERS_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "USERS_LOADED":
      return {
        ...state,
        campgrounds: action.payload,
        loading: false,
      };
    case "USER_ADDING":
      return {
        ...state,
        loading: true,
      };
    case "USER_ADDED":
      return {
        ...state,
        users: [...state.users, action.payload],
        loading: false,
      };
    default:
      return state;
  }
}
