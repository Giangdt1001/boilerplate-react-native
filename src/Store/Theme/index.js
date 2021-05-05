const initData = {
  theme: null,
  darkMode: false
};

const themeReducers = (state = initData, { type, payload }) => {
  switch (type) {
    case 'theme/setDefaultTheme':
      return { ...state, theme: payload.theme, darkMode: payload.darkMode };
    case 'theme/changeTheme':
      let data = { ...state, theme: payload.theme, darkMode: payload.darkMode }
      console.log("data", data);
      return data;
    default:
      return state;
  }
};

export default themeReducers;
