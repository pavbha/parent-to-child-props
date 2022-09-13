import "./styles.css";
import { useState } from "react";
import Child from "./child";

export default function App() {
  const [data, setData] = useState("");
  const parentToChild = () => {
    setData("im parent to child data");
  };
  return (
    <div>
      <Child ParentToChild={data} />
      <div>
        <button onClick={() => parentToChild()}>click me im parent </button>
      </div>
    </div>
  );
}
