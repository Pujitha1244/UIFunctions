import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <h1>Ui</h1>
      </Provider>
    </div>
  );
}

export default App;
