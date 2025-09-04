import { Fragment, useState } from "react";
import "./App.css";
import Header from "./layouts/header/Header";
import { Input } from "./components/baseComponents/Input";
function App() {
  const [value, setValue] = useState<string>('');
  return (
    <Fragment>
      <Header />
      <main className="m-2">
        <Input label="نام کاربری"
          size="sm"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          isInvalid={true}
        />
      </main>
    </Fragment>
  );
}

export default App;
