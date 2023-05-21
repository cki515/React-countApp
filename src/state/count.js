import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const doneCountAtom = atom({
  key: "app/doneCountAtom",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const noticeSnackbarInfoAtom = atom({
  key: "app/noticeSnackbarInfoAtom",
  default: {
    open: false,
    msg: "",
    severity: "",
    autoHideDuration: 0,
  },
});

export const recordsAtom = atom({
  key: "app/recordsAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
