import React from "react";
import { useSelector } from 'react-redux';


export default function Header() {
  const {isDark} = useSelector((state) => state.thema);

  return (
    <header className={`header ${isDark ? "dark" : "white"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}
