// import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
// import FetchOne from './FetchOne'

// // This state is common to all the "user" module, and can be modified by any "user" reducers
// const sliceInitialState = {
//   item: {},
// }

// export default buildSlice('user', [FetchOne], sliceInitialState).reducer

const initData = {

};

const themeReducers = (state = initData, { type, payload }) => {
  switch (type) {
    case 'fetchOne':
      return { ...state };
    case 'LOGIN_SUCCESS':
      return { ...state, data: payload };

    default:
      return state;
  }
};

export default themeReducers;
