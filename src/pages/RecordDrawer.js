import { Divider, List, ListItem, SwipeableDrawer } from "@mui/material";
import { useRecordModalState, useRecordsState } from "../hooks/useRecord";
import useNoticeSnackbarState from "../hooks/useNotice";
import RecordModifyModal from "./RecordModifyModal";

export function RecordOptionDrawer({ state }) {
  const recordsState = useRecordsState();
  const noticeSnackbarState = useNoticeSnackbarState();
  const recordModalState = useRecordModalState();

  const removeRecord = () => {
    if (window.confirm(`No : ${state.recordId} Delete it?`) == false) {
      state.close();
      return;
    }
    recordsState.removeRecordById(state.recordId);
    noticeSnackbarState.openBar(`Delete No ${state.recordId} Record`, "info");
    state.close();
  };

  return (
    <>
      <RecordModifyModal
        closeDrawer={state.close}
        state={recordModalState}
        id={state.recordId}
      />
      <SwipeableDrawer
        anchor="bottom"
        onOpen={() => {}}
        open={state.open}
        onClose={state.close}
      >
        <List className="!py-0">
          <ListItem className="!pt-6 !p-5">
            <span className="text-[color:var(--mui-color-primary-main)]">
              No : {state.recordId}
            </span>
            <span>&nbsp;</span>
            <span>Option Drawer</span>
          </ListItem>
          <Divider />
          <ListItem
            className="!pt-6 !p-5 !items-baseline"
            button
            onClick={recordModalState.openModal}
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
