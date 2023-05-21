import { useRecordsState } from "../hooks/useRecord";
import RecordListItem from "./RecordList";
import { RecordOptionDrawer } from "./RecordDrawer";
import useRecordOptionDrawerState from "../hooks/useDrawer";

function HistoryPage() {
  const recordsState = useRecordsState();
  const recordOptionDrawerState = useRecordOptionDrawerState();
  return (
    <>
      <RecordOptionDrawer state={recordOptionDrawerState} />
      <div className="flex-1">
        <ul>
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
