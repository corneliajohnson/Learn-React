import _ from "lodash";
import jsonPlaceholder from "../api/jsonPlaceholder";

//Universal/popular solution for overfetching
export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); //await: wait for fetchPosts

  //posts is updated on reducers/index.js
  //_uniq gets the unique userIds that are mapped over
  const userIds = _.uniq(_.map(getState().posts, "userId"));

  //for every userId call fetchUser and dispatch the result
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

//get user by id
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

//Memoize Solution for Overfetching
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

// });
