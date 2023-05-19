import { atom } from "recoil";

export const todosAtom = atom({
  key: "app/todosAtom",
  default: [],
});
