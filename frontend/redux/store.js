const { configureStore } = require("@reduxjs/toolkit");
import reducer from "./slice";

export const stores = configureStore({
  reducer
});