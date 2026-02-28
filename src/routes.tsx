import { Routes, Route, Navigate } from "react-router-dom"
import App from "./App"
import EditPage from "./pages/EditPage"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="dogtag" element={<App />} />
      <Route path="edit" element={<EditPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}