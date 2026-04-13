import { createRoot } from "react-dom/client";
import App from "./App"; // Đã bỏ đuôi .tsx, Vite sẽ tự tìm App.jsx
import "./index.css";

// Xóa dấu "!" sau getElementById
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<App />);
}