import { useState } from "react";
import Form from "./components/form";
import Footer from "./components/footer";
import "./App.css";
import ShowAge from "./components/showAge";

function App() {
  const [age, setAge] = useState({
    years: "",
    months: "",
    days: "",
  });

  return (
    <>
      <div className="card bg-white py-12 px-6 my-48 max-w-md lg:p-12 lg:min-w-card">
        <Form setAge={setAge} />
        <ShowAge age={age} />
      </div>
      <Footer />
    </>
  );
}

export default App;
