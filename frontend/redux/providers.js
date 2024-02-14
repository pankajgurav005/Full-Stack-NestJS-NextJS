"use client"

import { stores } from "./store";
const { Provider } = require("react-redux");
export function Providers({children}) {
    return (
      <Provider store={stores}>
        {children}
      </Provider>
    )
};