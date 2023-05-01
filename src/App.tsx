import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function App() {
  return (
    // <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
    // </div>
  );
}

export default App;
