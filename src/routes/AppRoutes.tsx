import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddContact from "../components/Contact/AddContact";
import EditContact from "../components/Contact/EditContact";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/charts" element={<Dashboard />} />
          <Route path="/add-contact" element={<AddContact />} />
          <Route path="/edit-contact/:id" element={<EditContact />} />
        </Routes>
      </Router>
    </>
  );
}
export default AppRoutes;
