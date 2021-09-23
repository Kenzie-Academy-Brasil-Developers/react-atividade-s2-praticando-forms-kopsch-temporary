import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import HomePage from "./components/HomePage";

function App() {
  const [userData, setUserData] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        {userData ? <HomePage data={userData} /> : <Form setUserData={setUserData} userData={userData}/>}
      </header>
    </div>
  );
}

export default App;
