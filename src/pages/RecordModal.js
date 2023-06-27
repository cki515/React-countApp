import { Button, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { myConfetti } from "../state/main";
import { useRecordsState } from "../hooks/useRecord";

export function RecordModal({ state, msg, saveRecord: _saveRecord, initialQuantity = 0, closeDrawer }) {
  const recordsState = useRecordsState();
  const [recordCount, setRecordCount] = useState(initialQuantity);

  useEffect(() => {
    setRecordCount(initialQuantity);
  }, [initialQuantity]);

  const changeRecordCount = (count) => {
    if (count > 0) {
      myConfetti({
        particleCount: count * 10,
        spread: 160,
      });
    }

    if (recordCount + count < 0) {
      setRecordCount(0);
    } else if (recordCount + count >= recordsState.resCount) {
      setRecordCount(recordsState.resCount);
    } else {
      setRecordCount(recordCount + count);
    }
  };

  const saveRecord = () => {
    if (recordCount === 0) return;
    _saveRecord(recordCount);
    setRecordCount(0);
    state.closeModal();
  };

  const cancleRecord = () => {
    setRecordCount(initialQuantity);
    state.closeModal();
    if (closeDrawer) closeDrawer();
  };

  return (
    <>
      <Modal className="flex justify-center items-center" open={state.open} onClose={cancleRecord}>
        <div className="bg-white rounded-[20px] p-7 w-full max-w-lg">
          <div className="select-none text-center font-bold text-2xl">{msg}</div>
          <div className="text-center">
            <span className="select-none text-[120px] font-mono text-[color:var(--mui-color-primary-main)]">
              {String(recordCount).padStart(2, "0")}
            </span>
          </div>
          <div className="flex justify-center gap-2">
            <Button variant="contained" onClick={() => changeRecordCount(5)}>
              +5
            </Button>
            <Button variant="contained" onClick={() => changeRecordCount(1)}>
              +1
            </Button>
            <Button variant="contained" onClick={() => changeRecordCount(-5)}>
              -5
            </Button>
            <Button variant="contained" onClick={() => changeRecordCount(-1)}>
              -1
            </Button>
          </div>
          <div className="mt-5 flex justify-center gap-2">
            <Button variant="contained" onClick={saveRecord}>
              Record
            </Button>
            <Button variant="contained" onClick={cancleRecord}>
              Cancle
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
