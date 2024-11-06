import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { defaultData, Materialtype } from "./data";
import Action from "../../../components/action";
import { PlusIcon } from "@heroicons/react/24/outline";
import CustomTable from "../../../components/customtable";
import { useFetchItems } from "../../../utility/tanstackQuery";
import Loading from "../../../components/loader";
import { Button } from "@headlessui/react";

import { useEffect, useState } from "react";
import CreateForm from "../form";

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
  columnHelper.accessor("category", {
    cell: (info) => {
      const value = info.getValue();
      return value ? value : "science";
    },
    header: () => "Category",
    footer: "author",
  }),
  columnHelper.accessor("isavailable", {
    header: "Available",
    cell: (info) => {
      const value = info.getValue();
      return value ? "True" : "False";
    },
    footer: "available",
  }),
  columnHelper.accessor("requests", {
    header: "Request",
    cell: (info) => {
      const value = info.getValue();
      return value ? "True" : "False";
    },
    footer: "request",
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
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const AdminMaterial = () => {
  const [data, setData] = useState<Materialtype[]>(defaultData);
  const queryKey = "Admin";
  const {
    data: material,
    isPending,
    isError,
  } = useFetchItems("/admin", queryKey);

  useEffect(() => {
    if (material) {
      setData(material?.allMaterials);
    }
  }, [material]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const [isOpen, setIsOpen] = useState(false);
  function open() {
    setIsOpen(true);
  }

  // function close() {
  //   setIsOpen(false);
  // }
  return (
    <>
      {isPending ? (
        <Loading />
      ) : isError ? (
        <> Error here dude, you no go like try again</>
      ) : (
        <div className="relative block align-middle">
          <div>
            <div className="head text-center p-2 mb-2">
              <h1 className="text-2xl">Materials</h1>
            </div>
            <div className="add flex flex-col items-end mb-2">
              <Button onClick={open}>
                <PlusIcon className="h-10 w-20 p-2 bg-gray-100 border-2 cursor-pointer" />
              </Button>
            </div>
          </div>
          <div className="w-full overflow-x-auto pb-20">
            <CustomTable table={table} />
          </div>
          <div className="form">
            <div className={classNames(isOpen ? "block" : "hidden")}>
              <div className="absolute top-0 bg-gray-100 w-full p-4">
                <CreateForm setIsOpen={setIsOpen} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminMaterial;
