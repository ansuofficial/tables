

const Form = () => {
  return (
    <div className="mx-12">
      <form>
        <div>
          <div className="flex text-gray-700">
            <div className="p-4 hover:shadow-lg duration-300 rounded-[14px]">
              <label className="block mb-2 text-sm">FirstName</label>
              <input
                type="text"
                className="ring-1 ring-slate-400 h-6 p-6 rounded w-[100%] outline-none"
                placeholder="Enter your first name"
              />
            </div>
            <div className="p-4 hover:shadow-lg duration-300 rounded-[14px]">
              <label className="block mb-2 text-sm">FirstName</label>
              <input
                type="text"
                className="ring-1 ring-slate-400 h-6 p-6 rounded w-[100%] outline-none "
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div>
            <div className="py-4 text-gray-700 flex items-center">
              <div className=" p-4 hover:shadow-lg duration-300 rounded-[14px] ">
                <label className="block mb-2 text-sm">Pnone Number</label>
                <input
                  type="text"
                  className="ring-1 ring-slate-400 h-6 p-6 rounded w-[100%] outline-none"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="p-4">
                <select className="py-3 px-4 mt-7 rounded text-slate-500 font-bold">
                  <option value="Status">Status</option>
                  <option value="Completed">Completed</option>
                  <option value="Completed">Pending</option>
                  <option value="Completed">Cancelled</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form