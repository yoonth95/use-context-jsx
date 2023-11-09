import React from "react";
import { useRecoilState } from "recoil";
import { themaState } from "../store/atoms";


export default function Footer() {
  const [isDark, setIsDark] = useRecoilState(themaState);

  return (
    <footer className={`footer ${isDark ? "dark" : "white"}`}>
      <button onClick={() => setIsDark(!isDark)}>테마 변경</button>
    </footer>
  );
}
