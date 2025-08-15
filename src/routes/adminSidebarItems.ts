import AddTour from "@/pages/admin/AddTour";
import Analytics from "@/pages/admin/Analytics";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
    {
      title: "Dashboard",
      items: [
        {
          title: "Analytics",
          url: "/admin/analytics",
          component: Analytics,
        },
      ],
    },
    {
      title: "Tour Management",
      items: [
        {
          title: "Add Tour Type",
          url: "/admin/add-tour-type",
          component: AddTour,
        },
        {
          title: "Add Tour",
          url: "/admin/add-tour",
          component: AddTour,
        },
      ],
    },
  ]