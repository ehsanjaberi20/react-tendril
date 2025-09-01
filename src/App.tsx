import { Fragment } from "react";
import "./App.css";
import Header from "./layouts/header/Header";
import styled from "@emotion/styled";
const Button = styled.button`
  padding: 5px 10px;
  background-color: hotpink;
  font-size: 20px;
  border-radius: 4px;
  color: black;
  &:hover {
    color: white;
  }
  &:active {
    background-color: #000;
  }
`;
function App() {
  return (
    <Fragment>
      <Header />
      <main className="m-2">
        <Button>click here!</Button>
        <div
          css={{
            backgroundColor: "hotpink",
            "&:hover": {
              color: "lightgreen",
            },
          }}
        >
          EhsanJaberi
        </div>
        <div className="text-blue-500">ReactJs Components</div>
      </main>
    </Fragment>
  );
}

export default App;
