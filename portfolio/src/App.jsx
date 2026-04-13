import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster as Sonner } from "./components/ui/sonner"; // Sửa @ thành ./ nếu cần
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import Index from "./pages/index"; // Đã bỏ đuôi .tsx
import NotFound from "./pages/NotFound"; // Đã bỏ đuôi .tsx

// Khởi tạo Query Client để quản lý dữ liệu (nếu Hòa có dùng API sau này)
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Trang chủ Portfolio của Hòa */}
            <Route path="/" element={<Index />} />
            
            {/* Trang 404 khi người dùng nhập sai đường dẫn */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;