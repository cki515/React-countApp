import { useMemo, useState } from "react";

export default function useRecordOptionDrawerState() {
  const [recordId, setRecordId] = useState(null);
  const open = useMemo(() => recordId !== null, [recordId]);
  const close = () => setRecordId(null);
  const openDrawer = (id) => setRecordId(id);

  return {
    recordId,
    open,
    close,
    openDrawer,
  };
}
