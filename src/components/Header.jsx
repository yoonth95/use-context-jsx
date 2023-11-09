import React from "react";
import { atom, useAtomValue } from "jotai";
import { themeAtom } from "../App";

const isDarkSelector = atom(get => get(themeAtom));

export default function Header() {
  const isDark = useAtomValue(isDarkSelector);
  
  return (
    <header className={`header ${isDark ? "dark" : "white"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}
