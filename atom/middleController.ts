import { atom } from "recoil";

export type MiddleController = {
  isTable: string;
  limitError: string;
  fieldEmptyError: string;
};

const defaultPostState: MiddleController = {
  isTable: "",
  limitError: "",
  fieldEmptyError: "",
};

export const middleControllers = atom<MiddleController>({
  key: "MiddleControllers",
  default: defaultPostState,
});
