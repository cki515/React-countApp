import { useRecoilState } from "recoil";
import { todosAtom } from "../states";

function WritePage() {
  const [todos, setTodos] = useRecoilState(todosAtom);
  return (
    <>
      <h1>Write Page</h1>
      {todos.length}
    </>
  );
}

export default WritePage;
