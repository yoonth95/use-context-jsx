import React from "react";
import useThemaStore from "../store/thema";

export default function Header() {
  const { isDark } = useThemaStore();
  return (
    <header className={`header ${isDark ? "dark" : "white"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}
