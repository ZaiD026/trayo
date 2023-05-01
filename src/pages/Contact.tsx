import ContactList from "../components/Contact/ContactList";
import Sidebar from "../fragments/Sidebar";
const Contact = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
        <h1 className="text-center font-bold text-2xl text-gray-700">
          Contacts
        </h1>
        <ContactList />
      </div>
    </div>
  );
};
export default Contact;
