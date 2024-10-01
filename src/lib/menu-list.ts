import { Tag, Users, Settings, Bookmark, SquarePen, LayoutGrid, LucideIcon } from "lucide-react";

type Submenu = {
	href: string;
	label: string;
	active: boolean;
};

type Menu = {
	href: string;
	label: string;
	active: boolean;
	icon: string;
	submenus: Submenu[];
};

type Group = {
	groupLabel: string;
	menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
	return [
		{
			groupLabel: "",
			menus: [
				{
					href: "/my-board",
					label: "My Board",
					active: pathname.includes("/my-board"),
					icon: "/assets/icons/layers.svg",
					submenus: [],
				},
			],
		},
		{
			groupLabel: "Dự án",
			menus: [
				{
					href: "/users",
					label: "Dự án F1",
					active: pathname.includes("/users"),
					icon: "/assets/image/5c106eb9a21a62675dde7e276cf1b70e.png",
					submenus: [],
				},
				{
					href: "/account",
					label: "Dự án THM",
					active: pathname.includes("/account"),
					icon: "/assets/image/5c106eb9a21a62675dde7e276cf1b70e.png",
					submenus: [],
				},
			],
		},
	];
}
