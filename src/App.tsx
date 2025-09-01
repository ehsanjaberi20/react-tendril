import { Fragment } from "react";
import "./App.css";
import Header from "./layouts/header/Header";
import { Input } from "./components/baseComponents/Input";
function App() {
  return (
    <Fragment>
      <Header />
      <main className="m-2">
        <Input label="نام کاربری" size="md"/>
      </main>
    </Fragment>
  );
}

export default App;
