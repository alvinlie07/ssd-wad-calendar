import exportedFn from "../helpers/functions";
import { eventOnCalendar } from "../helpers/utils";

const AddForm = ({
  id,
  selectedDate,
  handleClose,
  closeModal,
}: {
  id?:string;
  selectedDate: string;
  closeModal: Function;
  handleClose: Function;
}) => {
  const state = {
    name: "",
    email: "",
    time: "",
  };

  // if(!!event){
  //   state.email = event.email;
  //   state.name = event.name;
  //   state.time = event.time;
  // }
  
  const handleInput = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    if (fieldName == "name") {
      state.name = fieldValue;
    } else if (fieldName == "time") {
      state.time = fieldValue;
    } else {
      state.email = fieldValue;
    }
    console.log('id in addform',id);
    // console.log(state.name, state.time, state.email);
    // setFormData((prevState: any) => ({
    //   ...prevState,
    //   [fieldName]: fieldValue
    // }));
  };

  return (
    <div className="__dialog-wrapper">
      <div className="__dialog-title">
        <h2>Form {exportedFn.formattedDate(new Date(selectedDate))}</h2>
        <button
          className="__dialog-btn-cancel __x-button"
          type="submit"
          onClick={() => closeModal()}
        >
          close
        </button>
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Event Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="name"
              placeholder="Masukan nama event"
              onChange={handleInput}
              autoComplete="address-level2"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-4">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Event Time
          </label>
          <div className="mt-2">
            <input
              type="text"
              onChange={handleInput}
              placeholder="00:00 AM/PM"
              name="time"
              autoComplete="address-level2"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-4">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Event From
          </label>
          <div className="mt-2">
            <input
              type="text"
              onChange={handleInput}
              name="email"
              placeholder="abc@example.com"
              autoComplete="address-level2"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <button
        className="__dialog-btn __dialog-btn-close"
        type="submit"
        onClick={() => handleClose(state, id)}
      >
        {id != '' ? 'Ubah' : 'Tambah'}
      </button>
    </div>
  );
};

export default AddForm;