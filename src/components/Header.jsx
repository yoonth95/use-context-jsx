import React from "react";
import { useRecoilValue } from "recoil";
import { themaState } from "../store/atoms";

export default function Header() {
  const isDark = useRecoilValue(themaState);
  
  return (
    <header className={`header ${isDark ? "dark" : "white"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}
