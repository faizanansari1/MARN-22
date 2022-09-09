import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistor } from "./redux/store";
import Main from "./main/Main";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastContainer
          position="bottom-center"
          hideProgressBar={false}
          autoClose={1000}
          // autoClose={false}
          // newestOnTop={true}
          draggable={false}
          rtl={false}
        />
        <Main />
      </PersistGate>
    </Provider>
  );
}

export default App;
