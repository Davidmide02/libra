import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Materialtype } from "./data";
import Action from "../../../components/action";
import { PlusIcon } from "@heroicons/react/24/outline";
import CustomTable from "../../../components/customtable";
import { useFetchItems } from "../../../utility/tanstackQuery";
import Loading from "../../../components/loader";

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

const AdminMaterial = () => {
  const queryKey = "Admin";
  const {
    data: material,
    isPending,
    isError,
  } = useFetchItems("/admin", queryKey);
  console.log(material?.allMaterials);
  const data = material?.allMaterials;
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
        <> Error here dude, you no go like try again</>
      ) : (
        <div className="relative block align-middle">
          <div>
            <div className="head text-center p-2 mb-2">
              <h1 className="text-2xl">Materials</h1>
            </div>
            <div className="add flex flex-col items-end mb-2">
              <PlusIcon className="h-10 w-20 p-2 bg-gray-100 border-2 cursor-pointer"></PlusIcon>
            </div>
          </div>
          <div className="w-full overflow-x-auto pb-20">
            <CustomTable table={table} />
          </div>
        </div>
      )}
    </>
  );
};

export default AdminMaterial;
