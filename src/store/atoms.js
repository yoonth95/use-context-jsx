import { atom } from "recoil";

export const themaState = atom({
  key: "themaState", // 전역적으로 고유한 값
  default: false // 초깃값
});