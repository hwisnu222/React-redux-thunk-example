import "./App.css";

// redux
import { useDispatch, useSelector } from "react-redux";

// actions
import { increment } from "./store/actions/counter.action";

function App() {
  // access state using useSelector hook
  const countReducer = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();

  const addCounter = () => {
    dispatch(increment());
  };

  return (
    <div className="App">
      <h3>{countReducer?.count}</h3>
      <button onClick={() => addCounter()}>Tambah</button>
    </div>
  );
}

export default App;
