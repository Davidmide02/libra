import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { defaultData, Materialtype } from "./data";
import { useState } from "react";
import Action from "../../../components/action";
import { PlusIcon } from "@heroicons/react/24/outline";
import CustomTable from "../../../components/customtable";

const columnHelper = createColumnHelper<Materialtype>();

const columns = [
  columnHelper.accessor("title", {
    header: "Title",
    cell: (info) => info.getValue(),
    footer: "title",
  }),
  columnHelper.accessor("author", {
    cell: (info) => info.getValue(),
    header: () => "Author",
    footer: "author",
  }),
  columnHelper.accessor("availability", {
    header: "Available",
    cell: (info) => {
      const value = info.getValue();
      return value ? "True" : "False";
    },
    footer: "available",
  }),
  columnHelper.accessor("request", {
    header: "Request",
    footer: "request",
  }),
  columnHelper.accessor("status", {
    header: "Status",
    footer: "status",
  }),
  columnHelper.accessor("count", {
    header: "Count",
    cell: (info) => info.renderValue(),
    footer: "count",
  }),
  columnHelper.display({
    id: "action",
    header: "Action",
    cell: () => <Action />,
    footer: "action",
  }),
];

const AdminMaterial = () => {
  const [data] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="relative block w-full overflow-x-auto overflow-y-visible pb-20 align-middle">
      <div>
        <div className="head text-center p-2 mb-2">
          <h1 className="text-2xl">Materials</h1>
        </div>
        <div className="add flex flex-col items-end mb-2">
          <PlusIcon className="h-10 w-20 p-2 bg-gray-100 border-2 cursor-pointer"></PlusIcon>
        </div>
      </div>

      <CustomTable table={table} />
    </div>
  );
};

export default AdminMaterial;
