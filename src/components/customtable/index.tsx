import { flexRender, Table } from "@tanstack/react-table";

type CustomTableProps<T> = {
  table: Table<T>;
};

const CustomTable = <T,>({ table }: CustomTableProps<T>) => {
  return (
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
  );
};

export default CustomTable;
