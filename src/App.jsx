import TableBody from "./components/table.jsx"
import Form from "./components/form.jsx"
import Sidebar from "./sences/sidebar/sidebar.jsx";
export default function App() {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-stone-200 to-violet-200">
      <Sidebar />
      <div className="ml-16">
        <TableBody />
        <Form />
      </div>
    </div>
  );
}
