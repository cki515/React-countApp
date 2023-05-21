import useNoticeSnackbarState from "../hooks/useNotice";
import { useRecordsState } from "../hooks/useRecord";
import { RecordModal } from "./RecordModal";

export default function RecordModifyModal({ id, state, closeDrawer }) {
  const recordsState = useRecordsState();
  const noticeSnackbarState = useNoticeSnackbarState();

  const close = () => {
    state.closeModal();
    closeDrawer();
  };

  const saveRecord = (recordCount) => {
    recordsState.modifyRecordById(id, recordCount);
    noticeSnackbarState.openBar(
      `Update the record of ${recordCount} sets of No. ${id}`
    );
    close();
  };

  const initialQuantity =
    id === null ? 0 : recordsState.findRecordById(id).count;

  return (
    <>
      <RecordModal
        state={state}
        closeDrawer={close}
        msg={`How many times would you like to correct the record of set No. ${id}`}
        saveRecord={saveRecord}
        initialQuantity={initialQuantity}
      ></RecordModal>
    </>
  );
}
