import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import CustomRoute from "./router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Router>
          <CustomRoute />
          <ToastContainer />
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
