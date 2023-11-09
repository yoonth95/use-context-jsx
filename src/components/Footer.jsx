import React from "react";
import { useSnapshot } from "valtio";
import { themeState } from "../store/themeState";

export default function Footer() {
  const themeSnapshot = useSnapshot(themeState);

  return (
    <footer className={`footer ${themeSnapshot.isDark ? "dark" : "white"}`}>
      <button onClick={() => (themeState.isDark = !themeState.isDark)}>테마 변경</button>
    </footer>
  );
}
