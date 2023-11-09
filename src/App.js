import React from "react";
import "./App.css";
import Page from "./components/Page";
import { atom } from "jotai";

export const themeAtom = atom(false);

function App() {
  return <Page />;
}

export default App;
