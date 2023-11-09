import React from "react";
import { useAtom } from "jotai";
import { themeAtom } from "../App";

export default function Footer() {
  const [isDark, setIsDark] = useAtom(themeAtom);

  return (
    <footer className={`footer ${isDark ? "dark" : "white"}`}>
      <button onClick={() => setIsDark(!isDark)}>테마 변경</button>
    </footer>
  );
}
