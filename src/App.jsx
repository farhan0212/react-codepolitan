import "./App.css";
import { RouterProvider } from "react-router-dom";
import { GlobalContext } from "./context";
import { router } from "./routers";
function App() {
  const user = {
    name: "John Doe",
    role: "Admin",
  };

  return (
    <>
      <div className="App">
        <GlobalContext.Provider value={user}>
          <RouterProvider router={router}></RouterProvider>
        </GlobalContext.Provider>
      </div>
    </>
  );
}

export default App;
