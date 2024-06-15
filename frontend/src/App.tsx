import { Provider } from "react-redux";
import { store } from "./store/store";
import AppEntry from "./AppEntry";

function App() {
  return (
    <Provider store={store}>
      <AppEntry />
    </Provider>
  );
}

export default App;
