import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import AppRoutes from "./routes"
import { BASE_PATH } from "./config"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={BASE_PATH}>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
)