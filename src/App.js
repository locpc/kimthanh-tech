import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./provider/auth";
import NotFound from "./pages/NotFound";
import Home from "./pages/home";
import "./App.css";
import SignIn from "./pages/sign-in";
import Header from "./components/header";
import Revenue from "./pages/revenue";
import RevenueDetails from "./pages/revenue-details";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/revenue" element={<Revenue />} />
            <Route
              path="/revenue/:revenueId"
              element={<RevenueDetails />}
            ></Route>
          </Route>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
