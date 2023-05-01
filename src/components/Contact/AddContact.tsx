import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addContact } from "../../store/contact/ContactSlice";
import Sidebar from "../../fragments/Sidebar";

const AddContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    status: true,
  });

  const handleAddContact = () => {
    dispatch(
      addContact({
        id: uuidv4(),
        first_name: values.first_name,
        last_name: values.last_name,
        status: values.status,
      })
    );
    setValues({ first_name: "", last_name: "", status: true });
    navigate("/");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
        <div className="mt-10 max-w-xl mx-auto">
          <div className="flex flex-col">
            <label className="mb-2 text-base text-gray-800">First Name</label>
            <input
              className="bg-gray-200 py-2 px-3 border-2 outline-none"
              onChange={(e) =>
                setValues({ ...values, first_name: e.target.value })
              }
              value={values.first_name}
            />
          </div>

          <br />
          <div className="flex flex-col">
            <label className="mb-2 text-base text-gray-800">Last Name</label>
            <input
              className="bg-gray-200 py-2 px-3 border-2 outline-none"
              onChange={(e) =>
                setValues({ ...values, last_name: e.target.value })
              }
              value={values.last_name}
            />
          </div>
          <button
            className="bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700"
            onClick={handleAddContact}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
