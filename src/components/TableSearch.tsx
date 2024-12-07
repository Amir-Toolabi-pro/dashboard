import Image from "next/image";
import React from "react";

function TableSearch() {
  return (
    <div className="flex w-full md:w-fit gap-2 text-xs rounded-full ring-[1.5px] ring-gray-400 p-2">
      <Image src="/search.png" alt="" width={14} height={14} />
      <input
        className="w-[200px] bg-transparent outline-none"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}

export default TableSearch;
