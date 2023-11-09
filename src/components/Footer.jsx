import React from "react";
import useThemaStore from "../store/thema";

export default function Footer() {
  const { isDark, setIsDark } = useThemaStore();
  return (
    <footer className={`footer ${isDark ? "dark" : "white"}`}>
      <button onClick={() => setIsDark(isDark)}>테마 변경</button>
    </footer>
  );
}
