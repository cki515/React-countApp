import { RecoilRoot } from "recoil";
import App from "./App";
import { HashRouter } from "react-router-dom";

export default function Root() {
  return (
    <>
      <RecoilRoot>
        <HashRouter>
          <App />
        </HashRouter>
      </RecoilRoot>
    </>
  );
}
