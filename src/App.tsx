import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function App() {
  return (
    // WRAPPED IN THE QueryClientProvider FOR REACT QUERY
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
