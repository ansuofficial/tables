import { TableData } from "./tableData";
console.log(TableData)
const TableBody = () => {
  return (
    <div className="bg-slate-200 h-[100vh]">
      <div>
        <input type="text" className="ring-1" />
      </div>
      <form className="p-4 ring">
        <thead className="flex ring">
          <tr className="ring flex w-full justify-between">
            <th className="odd:bg-yellow-200 even:bg-violet-200 w-full">FirstName</th>
            <th className="odd:bg-yellow-200 even:bg-violet-200 w-full">LastName</th>
            <th className="odd:bg-yellow-200 even:bg-violet-200 w-full">Phone</th>
            <th className="odd:bg-yellow-200 even:bg-violet-200 w-full">Contact</th>
            <th className="odd:bg-yellow-200 even:bg-violet-200 w-full">Cost</th>
            <th className="odd:bg-yellow-200 even:bg-violet-200 w-full">Status</th>
          </tr>
        </thead>
        <tbody>
            
        </tbody>
      </form>
    </div>
  );
};

export default TableBody;
