import { TableData } from "./tableData";
const TableBody = () => {
  return (
   <div className="ring py-4 px-12">
     <table className="w-full ring-1 ring-slate-200 rounded  shadow-xl">
      <thead className="mb-4">
        <tr>
          <th className="flex-1 odd:bg-yellow-200 even:bg-violet-200">FirstName</th>
          <th className="flex-1 odd:bg-yellow-200 even:bg-violet-200">LastName</th>
          <th className="flex-1 odd:bg-yellow-200 even:bg-violet-200">Phone</th>
          <th className="flex-1 odd:bg-yellow-200 even:bg-violet-200">Status</th>
        </tr>
      </thead>

      <tbody className="text-center">
       {TableData.map( (item) => {
        return (     
        <tr className="">
          <td className="flex-1 odd:bg-yellow-50 even:bg-violet-50">{item.FirstName}</td>
          <td className="flex-1 odd:bg-yellow-50 even:bg-violet-50">{item.LastName}</td>
          <td className="flex-1 odd:bg-yellow-50 even:bg-violet-50">{item.Phone}</td>
          <td className="flex-1 odd:bg-yellow-50 even:bg-violet-50">{item.Status}</td>
        </tr>
        )
       })}
      </tbody>
    </table>
   </div>
  );
}
export default TableBody;
