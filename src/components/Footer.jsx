import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsDark } from "../redux/themaSlice";

export default function Footer() {
  const {isDark} = useSelector((state) => state.thema);
  const dispatch = useDispatch();

  return (
    <footer className={`footer ${isDark ? "dark" : "white"}`}>
      <button onClick={() => dispatch(setIsDark(!isDark))}>테마 변경</button>
    </footer>
  );
}
