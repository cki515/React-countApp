import { Divider, List, ListItem, SwipeableDrawer } from "@mui/material";
import { useRecordsState } from "../hooks/useRecord";
import useNoticeSnackbarState from "../hooks/useNotice";

export function RecordOptionDrawer({ state }) {
  const recordsState = useRecordsState();
  const noticeSnackbarState = useNoticeSnackbarState();
  const removeRecord = () => {
    recordsState.removeRecordById(state.recordId);
    state.close();
    noticeSnackbarState.openBar(`Delete No ${state.recordId} Record`, "info");
  };
  return (
    <>
      <SwipeableDrawer
        anchor="bottom"
        onOpen={() => {}}
        open={state.open}
        onClose={state.close}
      >
        <List className="!py-0">
          <ListItem className="!pt-6 !p-5">
            No : {state.recordId} Option Drawer
          </ListItem>
          <Divider />
          <ListItem
            className="!pt-6 !p-5 !items-baseline"
            button
            onClick={() => {}}
          >
            <i className="fa-solid fa-pen-to-square"></i>&nbsp;Update
          </ListItem>
          <ListItem
            className="!pt-6 !p-5 !items-baseline"
            button
            onClick={removeRecord}
          >
            <i className="fa-solid fa-trash-can"></i>&nbsp;Delete
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  );
}
