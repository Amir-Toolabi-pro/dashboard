"use client";
import Image from "next/image";
import { useState } from "react";
import TeacherForm from "./forms/TeacherForm";

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="flex flex-col p-3 gap-3">
        <span className="text-center font-medium">
          All data will be deleted. Are you sure?
        </span>
        <button className="bg-red-700 text-white py-2 px-3 rounded-md border-none w-max self-center">
          delete
        </button>
      </form>
    ) : (
      <TeacherForm type="create"/>
    );
  };

  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className={`flex items-center justify-center rounded-full ${size} ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open ? (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-hidden">
          <div className="bg-white p-3 rounded-md overflow-hidden relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] ">
            <Form/>
            <div
              className="absolute top-3 right-3 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default FormModal;
