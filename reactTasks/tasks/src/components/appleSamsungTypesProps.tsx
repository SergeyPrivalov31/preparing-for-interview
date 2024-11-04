import React from "react";
import { SmartphoneComponent } from "./SmartPhone";

export function AppleSamsungTypesProps() {
  return (
    <div>
      <h2>Задача на типизацию</h2>
      <SmartphoneComponent
        smartphone="samsung"
        componentProps={{ androidVersion: 12, model: "Galaxy S" }}
      />
      <SmartphoneComponent
        smartphone="apple"
        componentProps={{ model: "15", iosVersion: 12.1 }}
      />
    </div>
  );
}

/*import './App.css';
import { SmartphoneComponent } from './SmartPhone';

function App() {
  return (
    <div className="App">
      <SmartphoneComponent
        smartphone="samsung"
        componentProps={{ model: '15 Pro', color: 'black' }}
      />
    </div>
  );
}

export default App;
 */
