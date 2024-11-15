import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { defaultData, Usertype } from "./data";
import { useState } from "react";
import Action from "../../../components/action";
import CustomTable from "../../../components/customtable";
import { useFetchItems } from "../../../utility/tanstackQuery";
import Loading from "../../../components/loader";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@headlessui/react";

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
  const [page, setPage] = useState(1);
  const queryKey = "userdetails";
  const {
    data: user,
    isPending,
    isError,
  } = useFetchItems(`/admin/users?page=${page}`, queryKey, page);

  const table = useReactTable({
    data: user?.users[0].data || defaultData,
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
          <div className="relative block w-full overflow-x-auto align-middle">
            <div>
              <div className="head text-center">
                <h1 className="text-2xl">Users</h1>
              </div>
            </div>
            <CustomTable table={table} />
          </div>
          <div className="pagination flex justify-center items-center mt-2">
            {/* prev */}
            <div>
              {page <= 1 ? (
                <Button disabled={true}>
                  <ChevronLeftIcon className="h-8 cursor-not-allowed hover:text-gray-200 hover:bg-red-300" />
                </Button>
              ) : (
                <Button onClick={() => setPage(page - 1)}>
                  <ChevronLeftIcon className="h-8 cursor-pointer hover:text-purple-500 hover:bg-gray-300" />
                </Button>
              )}

              {/* next */}
              {page == user?.users[0].metaData[0].totalPages ? (
                <Button disabled={true}>
                  <ChevronRightIcon className="h-8 cursor-not-allowed hover:text-gray-200 hover:bg-red-300" />
                </Button>
              ) : (
                <Button onClick={() => setPage(page + 1)}>
                  <ChevronRightIcon className="h-8 cursor-pointer hover:text-purple-500 hover:bg-gray-300" />
                </Button>
              )}
            </div>

            <div className="number">
              <span>
                Page: {user?.users[0].metaData[0].pageNumber} -
                {user?.users[0].metaData[0].totalPages}
              </span>
              {/* <span>
                Number of users: {user?.users[0].metaData[0].totalUsers}{" "}
              </span> */}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default User;
