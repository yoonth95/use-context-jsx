import React from "react";
import { useSnapshot } from "valtio";
import { themeState } from "../store/themeState";

export default function Header() {
  const themeSnapshot = useSnapshot(themeState);

  return (
    <header className={`header ${themeSnapshot.isDark ? "dark" : "white"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}
