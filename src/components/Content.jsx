import React from "react";
import { useSnapshot } from "valtio";
import { themeState } from "../store/themeState";

export default function Content() {
  const themeSnapshot = useSnapshot(themeState);

  return (
    <div className={`content ${themeSnapshot.isDark ? "dark" : "white"}`}>
      <p>이 사이트는 프론트엔드 테킷 수강생과 함께 공부하는 사이트입니다.</p>
    </div>
  );
}
