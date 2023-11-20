import { TableData } from "./tableData";
import { useState } from "react";
const TableBody = () => {
  const [search, setSearch] = useState('')
  return (
    <div className="py-4 px-12">
      <div className="pb-4">
        <form action="">
          <input
            className="ring-1 ring-slate-300 w-full rounded py-2 px-4 text-center"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <table className="ring-1 ring-slate-200 rounded shadow-xl w-full hover:ring-slate-300 duration-300">
        <thead className="border-b text-gray-700">
          <tr className="flex">
            <th className="odd:bg-yellow-200 even:bg-violet-200 flex-1">
              FirstName
            </th>
            <th className="odd:bg-yellow-200 even:bg-violet-200 flex-1">
              LastName
            </th>
            <th className="odd:bg-yellow-200 even:bg-violet-200 flex-1">
              Phone
            </th>
            <th className="odd:bg-yellow-200 even:bg-violet-200 flex-1">
              Status
            </th>
          </tr>
        </thead>

        <tbody className="text-center text-sm text-stone-700">
          {TableData.filter( (f) => {
            return (
              search.toLowerCase() === '' ? f
              :f.FirstName.toLowerCase().includes(search)
            )
          }).map((item, index) => (
            <GetData {...item} key={index}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const GetData = (props) => {
  const {FirstName, LastName, Phone, Status} = props
  return (
    <tr className="flex">
       <td className="flex-1 odd:bg-yellow-50 even:bg-violet-50">{FirstName}</td>
       <td className="flex-1 odd:bg-yellow-50 even:bg-violet-50">{LastName}</td>
       <td className="flex-1 odd:bg-yellow-50 even:bg-violet-50">{Phone}</td>
       <td className="flex-1 odd:bg-yellow-50 even:bg-violet-50">{Status}</td>
     </tr>

  )
}

export default TableBody;
