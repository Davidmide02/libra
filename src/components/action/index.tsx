import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

export default function Action() {
  return (
    <div className="">
      <Menu __demoMode>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-indigo-400 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-indigo-200 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Options
          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton>

        <MenuItems
          transition
          anchor="right"
          className="rounded-xl border border-indigo-200 bg-gray-700 p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white text-green-500">
              <CheckCircleIcon className="size-4" />
              Approve
            </button>
          </MenuItem>
          <div className="border-y-2 border-white/20 rounded-lg"/>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white text-red-400">
              <XCircleIcon className="size-4" />
              Reject
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
        </MenuItems>
      </Menu>
    </div>
  );
}
