import { atom } from "recoil";

const defaultPostState = {};

export const publicStateUpdate = atom({
  key: "PublicStateUpdate ",
  default: defaultPostState,
});
