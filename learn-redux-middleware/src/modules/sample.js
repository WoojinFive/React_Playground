import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';
import { startLoading, finishLoading } from './loading';
import createRequestSaga from '../lib/createRequestSaga';

//define action type
//3 action types per 1 request

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
// const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
// const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

//generating thunk function

// export const getPost = createRequestThunk(GET_POST, api.getPost);
// export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);


// function* getPostSaga(action) {
//   yield put(startLoading(GET_POST)); //start loading

//   try {
//     const post = yield call(api.getPost, action.payload); // api.getPost(action.payload);
//     yield put({
//       type: GET_POST_SUCCESS,
//       payload: post.data
//     });
//   } catch (e) {
//     yield put({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true
//     });
//   }
//   yield put(finishLoading(GET_POST));
// }

// function* getUsersSaga() {
//   yield put(startLoading(GET_USERS)); //start loading

//   try {
//     const users = yield call(api.getUsers); // api.getPost(action.payload);
//     yield put({
//       type: GET_USERS_SUCCESS,
//       payload: users.data
//     });
//   } catch (e) {
//     yield put({
//       type: GET_USERS_FAILURE,
//       payload: e,
//       error: true
//     });
//   }
//   yield put(finishLoading(GET_USERS));
// }

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

// export const getPost = id => async dispatch => {
//   dispatch({ type: GET_POST });
//   try {
//     const response = await api.getPost(id);
//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: response.data
//     }); // request success
//   } catch (e) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       palyoad: e,
//       error: true
//     }); //error
//     throw e;
//   }
// };

// export const getUsers = () => async dispatch => {
//   dispatch({ type: GET_USERS });
//   try {
//     const response = await api.getUsers();
//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: response.data
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_USERS_FAILURE,
//       payload: e,
//       error: true
//     });
//     throw e;
//   }
// };

//initial state

const initialState = {
  // loading: {
  //   GET_POST: false,
  //   GET_USERS: false
  // },
  post: null,
  users: null
};

const sample = handleActions(
  {
    // [GET_POST]: state => ({
    //   ...state,
      // loading: {
      //   ...state.loading,
      //   GET_POST: true //request start
      // }
    //   post: action.payload
    // }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      // loading: {
      //   ...state.loading,
      //   GET_POST: false //request done
      // },
      post: action.payload
    }),
    // [GET_POST_FAILURE]: (state, action) => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_POST: false //request done
    //   }
    // }),
    // [GET_USERS]: state => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_USERS: true //request start
    //   }
    // }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      // loading: {
      //   ...state.loading,
      //   GET_USERS: false //request done
      // },
      users: action.payload
    }),
    // [GET_USERS_FAILURE]: (state, action) => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_USERS: false //request done
    //   }
    // })
  },
  initialState
);

export default sample;