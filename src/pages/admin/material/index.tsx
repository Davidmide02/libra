import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { defaultData, Materialtype } from "./data";
import { useState } from "react";

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
    header: "Availability",
    cell: (info) => {
      const value = info.getValue();
      return value ? "True" : "False";
    },
    footer: "availability",
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
    header: "count",
    cell: (info) => info.renderValue(),
    footer: "status",
  }),
];

const AdminMaterial = () => {
  const [data, setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="relative block w-full overflow-x-auto overflow-y-visible pb-20 align-middle">
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
                <th key={header.id}>
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
    </div>
  );
};

export default AdminMaterial;
