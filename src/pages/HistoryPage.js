import { useRecordsState } from "../hooks/useRecord";
import RecordListItem from "./RecordList";
import { RecordOptionDrawer } from "./RecordDrawer";
import useRecordOptionDrawerState from "../hooks/useDrawer";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HistoryPage() {
  const recordsState = useRecordsState();
  const recordOptionDrawerState = useRecordOptionDrawerState();
  const navigate = useNavigate();

  if (recordsState.records.length === 0) {
    return (
      <div className="flex flex-1 justify-center items-center text-5xl">
        <div className="flex flex-col gap-4">
          <span className="text-[color:var(--mui-color-primary-main)]">There is no record.</span>
          <Button variant="contained" onClick={() => navigate(-1)}>
            Go Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <RecordOptionDrawer state={recordOptionDrawerState} />
      <div className="flex-1">
        <ul className="px-6 sm:px-8 pb-6 sm:pb-8">
          {recordsState.records.map((record, index) => (
            <RecordListItem
              key={index}
              record={record}
              index={index}
              no={recordsState.records.length - index}
              optionDrawer={recordOptionDrawerState.openDrawer}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default HistoryPage;
