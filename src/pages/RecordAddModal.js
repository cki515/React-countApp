import useNoticeSnackbarState from "../hooks/useNotice";
import { useRecordsState } from "../hooks/useRecord";
import { RecordModal } from "./RecordModal";

export default function RecordAddModal({ state }) {
  const recordsState = useRecordsState();
  const noticeSnackbarState = useNoticeSnackbarState();

  const saveRecord = (recordCount) => {
    recordsState.saveRecord(recordCount);
    noticeSnackbarState.openBar(`You did ${recordCount} Sets this time.`);
  };
  return (
    <>
      <RecordModal
        state={state}
        msg="How many times did you do it?"
        saveRecord={saveRecord}
      ></RecordModal>
    </>
  );
}
