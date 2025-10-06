import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

const queryClient=new QueryClient()
const api = axios.create({
  baseURL: "https://api.example.com",
  timeout: 5000, // optional
  headers: { "Content-Type": "application/json" },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
