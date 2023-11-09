import React from "react";
import { atom, useAtomValue } from "jotai";
import { themeAtom } from "../App";

const isDarkSelector = atom(get => get(themeAtom));

export default function Content() {
  const isDark = useAtomValue(isDarkSelector);

  return (
    <div className={`content ${isDark ? "dark" : "white"}`}>
      <p>이 사이트는 프론트엔드 테킷 수강생과 함께 공부하는 사이트입니다.</p>
    </div>
  );
}
