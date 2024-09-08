import { list, check, todo, home } from "./Icons";

const menu = [
  {
    id: 1,
    title: "ALL TASKS",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "TO DO!",
    icon: list,
    link: "/important",
  },
  {
    id: 3,
    title: "IN PROGRESS",
    icon: todo,
    link: "/incomplete",
  },
  {
    id: 4,
    title: "COMPLETED!",
    icon: check,
    link: "/completed",
  },
];

export default menu;
