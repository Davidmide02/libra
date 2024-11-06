import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { defaultData, Usertype } from "./data";
import { useEffect, useState } from "react";
import Action from "../../../components/action";
import CustomTable from "../../../components/customtable";
import { useFetchItems } from "../../../utility/tanstackQuery";
import Loading from "../../../components/loader";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

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
    cell: (info) => info.getValue() || "free",
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
  const [data, setData] = useState(defaultData);
  const [page, setPage] = useState(1);
  const queryKey = "userdetails";
  const {
    data: user,
    isPending,
    isError,
  } = useFetchItems(`/admin/users?page=${page}`, queryKey);

  useEffect(() => {
    if (user) {
      setData(user?.users[0].data);
      console.log("let see", user.users[0].data);
    }
  }, [user]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      {isPending ? (
        <Loading />
      ) : isError ? (
        <>Error Fetching users, kindly try again</>
      ) : (
        <>
          <div className="relative block w-full overflow-x-auto overflow-y-visible pb-20 align-middle">
            <div>
              <div className="head text-center p-2 mb-2">
                <h1 className="text-2xl">Users</h1>
              </div>
            </div>
            <CustomTable table={table} />
          </div>
          <div className="pagination flex flex-col justify-center items-center">
            <div className="number"></div>
            <div className="arr flex">
              <ChevronLeftIcon className="h-8 cursor-pointer hover:text-purple-500 hover:bg-gray-300" />
              <ChevronRightIcon className="h-8 cursor-pointer hover:text-purple-500 hover:bg-gray-300" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default User;
