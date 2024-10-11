import {
  FolderIcon,
  HomeIcon,
  UsersIcon,
  StarIcon,
  BellIcon,
} from "@heroicons/react/24/outline";


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
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: true },
  { name: "User", href: "/user", icon: UsersIcon, current: false },
  {
    name: "Material",
    href: "/adminmaterial",
    icon: FolderIcon,
    current: false,
  },
];
