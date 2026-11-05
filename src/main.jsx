import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Die from "./components/Die";
import MainSection from "./components/MainSection";
createRoot(document.getElementById("root")).render(
  <>
    <MainSection />
  </>,
);
