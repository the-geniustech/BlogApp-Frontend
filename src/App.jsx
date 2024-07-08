import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// import Home from "./pages/Home";
import store from "./store";
import Login from "./pages/Login";
// import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import NewsDetails from "./pages/NewsDetails";
import { Toaster } from "react-hot-toast";
import Signup from "./pages/Signup";
import { Provider } from "react-redux";
import CreateNews from "./pages/CreateNews";
import AccountSettings from "./pages/AccountSettings";
// import { useUser } from "./features/authentication/useUser";
// import Spinner from "./ui/Spinner";
// import ProtectedRoute from "./ui/ProtectedRoute";
import EditPost from "./pages/EditPost";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="newsdetails/:id" element={<NewsDetails />} />
              <Route path="account" element={<AccountSettings />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="createpost" element={<CreateNews />} />
            <Route path="editpost/:id" element={<EditPost />} />
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
