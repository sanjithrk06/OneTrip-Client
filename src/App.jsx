// App.js
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router"; // Import the router instance

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
