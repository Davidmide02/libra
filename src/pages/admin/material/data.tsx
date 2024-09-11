export type Materialtype = {
  title: string;
  author: string[];
  availability: boolean;
  request: string;
  status: string;
  count: number;
};

export const defaultData: Materialtype[] = [
  {
    title: "tanner",
    author: ["linsley"],
    availability: true,
    request: "pending",
    status: "accepted",
    count: 3,
  },
  {
    title: "tandy",
    author: ["miller"],
    availability: true,
    request: "pending",
    status: "rejected",
    count: 0,
  },
  {
    title: "joe",
    author: ["dirte"],
    availability: false,
    request: "pending",
    status: "accepted",
    count: 5,
  },
  {
    title: "tanner",
    author: ["linsley"],
    availability: true,
    request: "pending",
    status: "accepted",
    count: 3,
  },
  {
    title: "tandy",
    author: ["miller"],
    availability: true,
    request: "pending",
    status: "rejected",
    count: 0,
  },
  {
    title: "joe",
    author: ["dirte"],
    availability: false,
    request: "pending",
    status: "accepted",
    count: 5,
  },
  {
    title: "tanner",
    author: ["linsley"],
    availability: true,
    request: "pending",
    status: "accepted",
    count: 3,
  },
  {
    title: "tandy",
    author: ["miller"],
    availability: true,
    request: "pending",
    status: "rejected",
    count: 0,
  },
  {
    title: "joe",
    author: ["dirte"],
    availability: false,
    request: "pending",
    status: "accepted",
    count: 5,
  },
];
