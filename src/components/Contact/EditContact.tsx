import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editContact } from "../../store/contact/ContactSlice";
import { RootState } from "../../store/contact/type";
import Sidebar from "../../fragments/Sidebar";

const EditContact = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const contacts = useSelector((store: RootState) => store.contact);
  const navigate = useNavigate();
  //CHECKS EXISTING CONTACT ON THE BASIS OF ID PRESENT IN THE URL
  const existingContact = contacts.filter(
    (contact) => contact.id === params.id
  );
  const { first_name, last_name, status } = existingContact[0];
  const [values, setValues] = useState({
    first_name,
    last_name,
    status,
  });
  // MAIN LOGIC OF THE CODE WHERE FORM IS BEING HANDLED
  const handleEditContact = () => {
    dispatch(
      editContact({
        id: params.id as string,
        first_name: values.first_name,
        last_name: values.last_name,
        status: values.status,
      })
    );
    setValues({ first_name: "", last_name: "", status });
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
          <div className="flex gap-4">
            <label className="mb-2 text-base text-gray-800">
              Active Status
            </label>
            <input
              className="bg-gray-200 py-2 px-3 border-2 outline-none"
              type="checkbox"
              onClick={() =>
                values.status
                  ? setValues({ ...values, status: false })
                  : setValues({ ...values, status: true })
              }
              defaultChecked={values.status}
            />
          </div>
          <button
            className="bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700"
            onClick={handleEditContact}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
