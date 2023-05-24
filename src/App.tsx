import "./App.css";
import { RouterProvider, useNavigate } from "react-router-dom";
import { routerOfApp } from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import { useAppSelector } from "./hooks/hook";
import Login from "./components/Login";
function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <RouterProvider router={routerOfApp}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
