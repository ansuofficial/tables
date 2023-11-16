import { TableData } from "./tableData";

const TableBody = () => {
  return (
    <div className="py-4 px-12">
      <table className="ring-1 ring-slate-200 rounded shadow-xl w-full">
        <thead className="w-full flex border-b bg-green-400">
          <tr className="flex w-full">
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

        <tbody className="text-center">
          {TableData.map((item, index) => (
            <tr key={index} className="flex w-full">
              <td className="flex-1 odd:bg-yellow-50 even:bg-violet-50">
                {item.FirstName}
              </td>
              <td className="flex-1 odd:bg-yellow-50 even:bg-violet-50">
                {item.LastName}
              </td>
              <td className="flex-1 odd:bg-yellow-50 even:bg-violet-50">
                {item.Phone}
              </td>
              <td className="flex-1 odd:bg-yellow-50 even:bg-violet-50">
                {item.Status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBody;
