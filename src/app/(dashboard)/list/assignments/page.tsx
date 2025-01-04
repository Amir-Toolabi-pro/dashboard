import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { assignmentsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Assignment = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "DueDate",
    accessor: "due date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const AssignmentPageList = () => {

  const renderRow = (item: Assignment) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight" >
      <td className="flex items-center gap-4 p-4">
      {item.subject}
      </td>
      <td>
        {item.class}
      </td>
      <td className="hidden md:table-cell" >
        {item.teacher}
      </td>
      <td className="hidden md:table-cell" >
        {item.dueDate}
      </td>
      <td>
        <div className="flex items-center gap-2">
          
          {role === "admin" ? (
            <>
              <FormModal table="assignment" type="update" id={item.id} />
              <FormModal table="assignment" type="delete" id={item.id} />
            </>
            
          ) : null}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 flex-1 m-4 mt-0 rounded-md">
      {/* top */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Assignment</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex gap-4 items-center self-end">
            <button className="w-8 h-8 rounded-full flex justify-center items-center bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 rounded-full flex justify-center items-center bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <FormModal table="assignment" type="create" />
          </div>
        </div>
      </div>
      {/* list */}
      <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
      {/* pagination */}
      <Pagination />
    </div>
  );
};
export default AssignmentPageList;
