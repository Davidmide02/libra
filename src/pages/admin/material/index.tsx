import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { defaultData, Materialtype } from "./data";
import { useState } from "react";
import Action from "../../../components/action";
import { PlusIcon } from "@heroicons/react/24/outline";
// import { CustomTable } from "../../../components/table";

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
      <table className="min-w-full border-separate border-spacing-0">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="th border-b bg-indigo-600 text-white bg-opacity-75 p-4 text-center text-sm font-medium"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="sm:even:bg-gray-50 hover:bg-indigo-300 hover:text-white even:hover:bg-indigo-300"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="text-brand-textBlack w-max max-w-full overflow-visible p-4 text-center text-sm"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="th border-b bg-indigo-600 text-white bg-opacity-75 p-4 text-center text-sm font-medium"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      {/* <CustomTable columns data/> */}
    </div>
  );
};

export default AdminMaterial;
