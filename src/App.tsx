import { Fragment, useState } from "react";
import "./App.css";
import Header from "./layouts/header/Header";
import { Input } from "./components/baseComponents/Input";
import { TextArea } from "./components/baseComponents/TextArea";
import { Select } from "./components/baseComponents/Select";
import NewSelect from "./components/baseComponents/NewSelect";
function App() {
  const [value, setValue] = useState<string>('');
  const [value1, setValue1] = useState<string>('');
  console.log(value);

  return (
    <Fragment>
      <Header />
      <main className="m-2">
        {/* <Input label="نام کاربری"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          isInvalid={false}
          helperText="نام کاربری شامل اعداد هم است"
        />
        <TextArea label="توضیحات"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={5}

        /> */}
        <NewSelect value={value}
          onChange={(value) => setValue(value)}
          placeholder="انتخاب کنید"
          options={[
            {
              label: 'رده 1',
              value: '1'
            },
            {
              label: 'رده 2',
              value: '2'
            },
            {
              label: 'رده 3',
              value: '3'
            }
          ]} />
        <Select label="رده سازمانی"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          options={[
            {
              label: 'رده 1',
              value: '1'
            },
            {
              label: 'رده 2',
              value: '2'
            },
            {
              label: 'رده 3',
              value: '3'
            }
          ]}
        />
      </main>
    </Fragment>
  );
}

export default App;
