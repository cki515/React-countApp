import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom: persistAtomCount } = recoilPersist({
  key: "persistAtomCount",
});

const { persistAtom: persistAtomRecords } = recoilPersist({
  key: "persistAtomRecords",
});

export const doneCountAtom = atom({
  key: "app/doneCountAtom",
  default: 0,
  effects_UNSTABLE: [persistAtomCount],
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
  effects_UNSTABLE: [persistAtomRecords],
});
