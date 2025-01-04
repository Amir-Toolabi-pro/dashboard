import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { announcementsData, eventsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Announcement = {
  id: number;
  title: string;
  class: string;
  date: string;
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const AnnouncementPageList = () => {
  const renderRow = (item: Announcement) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <FormModal table="announcement" type="update" id={item.id} />
          </Link>
          {role === "admin" ? (
            // <button className="w-7 h-7 flex justify-center items-center rounded-full bg-lamaPurple ">
            //   <Image src="/delete.png" alt="" width={16} height={16} />
            // </button>
            <FormModal table="announcement" type="delete" id={item.id} />
          ) : null}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 flex-1 m-4 mt-0 rounded-md">
      {/* top */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">
          All Announcements
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex gap-4 items-center self-end">
            <button className="w-8 h-8 rounded-full flex justify-center items-center bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 rounded-full flex justify-center items-center bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 rounded-full flex justify-center items-center bg-lamaYellow">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* list */}
      <Table columns={columns} renderRow={renderRow} data={announcementsData} />
      {/* pagination */}
      <Pagination />
    </div>
  );
};
export default AnnouncementPageList;
