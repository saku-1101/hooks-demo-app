import React from "react";
import ReactDOM from "react-dom/client";
import MemoListContainer from "./MemoListContainer.tsx";
import "./index.css";
import Layout from "./layout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <MemoListContainer />
    </Layout>
  </React.StrictMode>
);
