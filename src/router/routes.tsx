import {
//   CalendarIcon,
//   ChartPieIcon,
//   DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  StarIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
// import {
//   ChevronDownIcon,
//   MagnifyingGlassIcon,
// } from "@heroicons/react/20/solid";

export const UserNav = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  //   { name: "User", href: "/user", icon: UsersIcon, current: false },
  {
    name: "Material",
    href: "/material",
    icon: FolderIcon,
    current: false,
  },
  { name: "Favourite", href: "#", icon: StarIcon, current: false },
  { name: "Notifiction", href: "#", icon: BellIcon, current: false },
  //   { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];

export const AdminNav = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  { name: "User", href: "/user", icon: UsersIcon, current: false },
  {
    name: "Material",
    href: "/adminmaterial",
    icon: FolderIcon,
    current: false,
  },
//   { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
//   { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
//   { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
