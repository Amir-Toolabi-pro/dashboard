

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { classesData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Class = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

const columns = [
  {
    header: "Class Name",
    accessor: "name",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];


function ClassListPage() {

  const renderRow = (item: Class) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight" >
      <td className="flex items-center gap-4 p-4">
      {item.name}
      </td>
      <td className="hidden md:table-cell" >
        {item.capacity}
      </td>
      <td className="hidden md:table-cell" >
        {item.grade}
      </td>
      <td className="hidden md:table-cell" >
        {item.supervisor}
      </td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" ? (
            <>
            <FormModal table="class" type="update" id={item.id} />
            <FormModal table="class" type="delete" id={item.id} />
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
        <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex gap-4 items-center self-end">
            <button className="w-8 h-8 rounded-full flex justify-center items-center bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 rounded-full flex justify-center items-center bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <FormModal table="class" type="create" />
          </div>
        </div>
      </div>
      {/* list */}
      <Table columns={columns} renderRow={renderRow} data={classesData} />
      {/* pagination */}
      <Pagination />
    </div>
  );
}

export default ClassListPage;