import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routerOfApp } from "./routes/routes";
function App() {
  return (
    <div className="App container">
      <RouterProvider router={routerOfApp}></RouterProvider>
    </div>
  );
}

export default App;
