import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "../layout.jsx";
import Home from "../components/Home/Home.jsx";
import About from "../components/About/About.jsx";
import User from "../components/User/User.jsx";
import Github, { gitHubInfoLoader } from "../components/GitHub/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="user/" element={<User />}>
        <Route path=":userId" element={<User />} />
      </Route>
      <Route loader={gitHubInfoLoader} path="github" element={<Github />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
