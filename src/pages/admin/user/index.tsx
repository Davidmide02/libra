import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { defaultData, Usertype } from "./data";
import { useState } from "react";
import Action from "../../../components/action";
import CustomTable from "../../../components/customtable";

const columnHelper = createColumnHelper<Usertype>();

const columns = [
  columnHelper.accessor("username", {
    header: "Username",
    cell: (info) => info.getValue(),
    footer: "username",
  }),
  columnHelper.accessor("email", {
    cell: (info) => info.getValue(),
    header: () => "Email",
    footer: "email",
  }),

  columnHelper.accessor("status", {
    header: "Status",
    footer: "status",
  }),

  columnHelper.display({
    id: "action",
    header: "Action",
    cell: () => <Action />,
    footer: "action",
  }),
];

const User = () => {
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
          <h1 className="text-2xl">Users</h1>
        </div>
      </div>
      <CustomTable table={table} />
    </div>
  );
};

export default User;
