import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { App } from "./pages/AppPage";
import { Home } from "./pages/HomePage";
import { Personalization } from "./pages/Personalization";
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from "react-toastify";

const rootElement = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

if (!rootElement) {
  throw new Error("Failed to find root element");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/personalization",
    element: <Personalization />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
