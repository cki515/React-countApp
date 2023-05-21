import { Button } from "@mui/material";
import { CountNumber } from "../state/main";
import { RecordModal } from "./RecordModal";
import { useRecordsState, useRecordModalState } from "../hooks/useRecord";

function MainPage() {
  const recordsState = useRecordsState();
  const recordModalState = useRecordModalState();
  return (
    <div className="flex flex-1 justify-center items-center">
      <div>
        <div className="text-[100px] text-[color:var(--mui-color-primary-main)] font-mono">
          <CountNumber
            start={recordsState.goalCount}
            end={recordsState.resCount}
            duration={3}
          />
        </div>
        <div className="flex justify-center">
          <Button variant="contained" onClick={recordModalState.openModal}>
            Record
          </Button>
          <RecordModal state={recordModalState} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
