import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, RouterContextProvider } from "react-router-dom";
import { NuqsAdapter } from "nuqs/adapters/react";
import { ModalProvider } from "./context/ModalContext.tsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <NuqsAdapter>
          <ModalProvider>
            <App />
          </ModalProvider>
        </NuqsAdapter>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
