import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Dashboard from "./pages/Dashboard";
// import Map from "./components/Map/Map";
import SimpleMap from "./components/Map/CovidMap";
// import CovidMap from "./components/Map/Map";
import CovidMap from "./components/Map/CovidMap";
import LineGraph from "./components/Chart/LineGraph";
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
