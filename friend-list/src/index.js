import React from "react";
import ReactDOM from "react-dom/client";
import { Container } from "./Friends";
import { Header } from "./Header";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Container />
  </>
);
