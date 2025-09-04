import { Fragment, useState } from "react";
import "./App.css";
import Header from "./layouts/header/Header";
import { Input } from "./components/baseComponents/Input";
import { TextArea } from "./components/baseComponents/TextArea";
function App() {
  const [value, setValue] = useState<string>('');
  return (
    <Fragment>
      <Header />
      <main className="m-2">
        <Input label="نام کاربری"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          isInvalid={false}
          helperText="نام کاربری شامل اعداد هم است"
        />
        <TextArea label="توضیحات"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={5}
          
        />
      </main>
    </Fragment>
  );
}

export default App;
