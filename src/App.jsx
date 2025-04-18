import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PlantsPage } from "./PlantsPage";
import { UsersPage } from "./UsersPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { LogoutPage } from "./LogoutPage";
import { SchedulesPage } from "./SchedulesPage";
import { HomePage } from "./HomePage";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});
const router = createBrowserRouter([
  {
    element: (
      <AuthProvider store={store}>
        <div>
          <Header />
          <Outlet />
          <SignupPage />
          <LoginPage />
          <LogoutPage />
          <br></br>
          <Footer />
        </div>
      </AuthProvider>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/plants",
        element: <PlantsPage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/schedules",
        element: <SchedulesPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
