import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import CustomLayout from "./containers/Layout";
import BaseRouter from "./routes";

function App() {
  return (
    <div>
      <Router>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
