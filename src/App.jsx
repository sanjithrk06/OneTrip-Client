// App.js
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router"; // Import the router instance

const App = () => {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
};

export default App;
