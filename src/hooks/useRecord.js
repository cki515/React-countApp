import { useRecoilState } from "recoil";
import { doneCountAtom, recordsAtom } from "../state/count";
import { useState } from "react";
import { dateToStr } from "../state/main";
import { produce } from "immer";

export function useRecordsState() {
  const goalCount = 100;
  const [records, setRecords] = useRecoilState(recordsAtom);
  const [doneCount, setDoneCount] = useRecoilState(doneCountAtom);
  const resCount = goalCount - doneCount;

  const saveRecord = (count) => {
    if (count === 0) return;
    setDoneCount(doneCount + count);
    const newRecord = {
      count: count,
      regDate: dateToStr(new Date()),
    };
    const newRecords = [newRecord, ...records];
    setRecords(newRecords);
  };

  const findIndexById = (id) => {
    if (id === null) return -1;
    if (id < 1) return -1;
    if (id > records.length) return -1;

    return records.length - id;
  };

  const removeRecordById = (id) => {
    const record = findRecordById(id);
    if (record == null) return;

    const index = findIndexById(id);
    if (index === -1) return;

    setRecords(
      produce(records, (draft) => {
        draft.splice(index, 1);
      })
    );
    setDoneCount(doneCount - record.count);
  };

  const findRecordById = (id) => {
    const index = findIndexById(id);
    if (index === -1) return null;

    return records[index];
  };

  const modifyRecordById = (id, count) => {
    const record = findRecordById(id);
    if (record == null) return;

    const index = findIndexById(id);
    if (index === -1) return;

    const diff = record.count - count;

    setRecords(
      produce(records, (draft) => {
        draft[index].count = count;
      })
    );
    setDoneCount(doneCount - diff);
  };

  return {
    goalCount,
    saveRecord,
    resCount,
    records,
    removeRecordById,
    findRecordById,
    modifyRecordById,
  };
}

export function useRecordModalState() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return {
    open,
    openModal,
    closeModal,
  };
}
