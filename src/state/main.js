import React, { useEffect, useRef } from "react";
import useNoticeSnackbarState from "../hooks/useNotice";
import { Alert as MuiAlert, Snackbar } from "@mui/material";
import { CountUp } from "countup.js";

function dateToStr(date) {
  //   Sat May 13 2023 19:57:36
  //   2023-05-13 19:57:36
  const pad = (n) => {
    return n < 10 ? "0" + n : n;
  };
  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    " " +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":" +
    pad(date.getSeconds())
  );
}

function CountNumber({ start = 0, end = 1000, duration = 2 }) {
  const spanRef = useRef(null);
  const countUpRef = useRef(null);

  useEffect(() => {
    if (countUpRef.current == null) {
      countUpRef.current = new CountUp(spanRef.current, end, {
        startVal: start,
        duration: duration,
        formattingFn: (num) => String(num).padStart(3, "0"),
      });
      countUpRef.current.start();
    } else {
      countUpRef.current.update(end);
    }

    return () => {};
  }, [start, end, duration]);

  return <span ref={spanRef} />;
}

export const myConfetti = require("canvas-confetti").create(document.querySelector("#confetti-canvas"), {
  resize: true,
  useWorker: true,
});

function NoticeSnackbar() {
  const state = useNoticeSnackbarState();

  const Alert = React.forwardRef((props, ref) => {
    return <MuiAlert {...props} ref={ref} variant="filled" />;
  });

  return (
    <>
      <Snackbar open={state.open} autoHideDuration={state.autoHideDuration} onClose={state.closeBar}>
        <Alert severity={state.severity}>{state.msg}</Alert>
      </Snackbar>
    </>
  );
}

export { CountNumber, dateToStr, NoticeSnackbar };
