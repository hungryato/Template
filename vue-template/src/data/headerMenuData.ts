
import type { MainMenuItem } from "@/types/headerMenuType";

export const menuList: MainMenuItem[] = [
  {
    label: "1Depth-1",
    trigger: "gnb",
    children: [
      {
        label: "1-2Depth-1",
        trigger: "gnb",
        title: "1-2Depth-1 title",
        children: [
          { label: "1-Last depth", isLink: true, href: "#" },
          { label: "1-Last depth", isLink: false },
        ],
      },
      {
        label: "1-2Depth-2",
        trigger: "gnb",
        title: "1-2Depth-2 title",
        children: [
          { label: "2-Last depth", isLink: true, href: "#" },
          { label: "2-Last depth", isLink: false },
        ],
      },
      {
        label: "1-2Depth-3",
        trigger: "gnb",
        title: "1-2Depth-3 title",
        children: [
          { label: "3-Last depth", isLink: true, href: "#" },
          { label: "3-Last depth", isLink: false },
        ],
      },
    ],
  },
  {
    label: "1Depth-2",
    trigger: "gnb",
    children: [
      {
        label: "2-2Depth-1",
        trigger: "gnb",
        title: "2-2Depth-1 title",
        children: [
          { label: "1-Last depth", isLink: true, href: "#" },
          { label: "1-Last depth", isLink: false },
        ],
      },
      {
        label: "2-2Depth-2",
        trigger: "gnb",
        title: "2-2Depth-2 title",
        children: [
          { label: "2-Last depth", isLink: true, href: "#" },
          { label: "2-Last depth", isLink: false },
        ],
      },
      {
        label: "2-2Depth-3",
        trigger: "gnb",
        title: "2-2Depth-3 title",
        children: [
          { label: "3-Last depth", isLink: true, href: "#" },
          { label: "3-Last depth", isLink: false },
        ],
      },
    ],
  },
];