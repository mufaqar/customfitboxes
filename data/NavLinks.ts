export const Navlinks = [
    {
        label: "Products",
        href: "/all-products",
        type: "link" as const,
        icon: "/images/box.png",
    },

    {
        label: "Industries",
        href: "/industries",
        type: "mega" as const,
        icon: "/images/box.png",
        children: [
            {
                group: "Shop By Industries",
                items: [
                    {
                        label: "Corrugated Boxes",
                        href: "/category/corrugated-boxes",
                        icon: "/images/box.png",
                    },
                    {
                        label: "Mylar Bags",
                        href: "/category/mylar-bags",
                        icon: "/images/box.png",
                    },
                    {
                        label: "CBD Boxes",
                        href: "/category/cbd-boxes",
                        icon: "/images/box.png",
                    },
                    {
                        label: "Mailer Boxes",
                        href: "/category/mailer-boxes",
                        icon: "/images/box.png",
                    },
                    {
                        label: "Kraft Boxes",
                        href: "/category/kraft-boxes",
                        icon: "/images/box.png",
                    },
                    {
                        label: "Cardboard Boxes",
                        href: "/category/cardboard-boxes",
                        icon: "/images/box.png",
                    },
                    {
                        label: "Shapes & Styles",
                        href: "/category/shapes-styles",
                        icon: "/images/box.png",
                    },
                    {
                        label: "Pet Boxes",
                        href: "/category/pet-boxes",
                        icon: "/images/box.png",
                    },
                ],
            },
        ],
        footer: {
            label: "Show All",
            href: "/industries",
        },
    },

    {
        label: "Box by Material",
        href: "/products",
        type: "dropdown" as const,
        children: [
            { label: "Corrugated", href: "/material/corrugated" },
            { label: "Kraft", href: "/material/kraft" },
            { label: "Rigid", href: "/material/rigid" },
        ],
    },

    {
        label: "Shapes & Styles",
        href: "/products",
        type: "dropdown" as const,
        children: [
            { label: "Auto Lock", href: "/shapes/auto-lock" },
            { label: "Tuck End", href: "/shapes/tuck-end" },
        ],
    },

    {
        label: "Contact Us",
        href: "/contact-us",
        type: "link" as const,
    },

    {
        label: "Blog",
        href: "/blog",
        type: "link" as const,
    },
];

// Type Definitions
export type NavLink = {
    type: "link";
    label: string;
    href: string;  // Made required since all your links have href
    icon?: string;
};

export type DropdownItem = {
    label: string;
    href: string;
};

export type Dropdown = {
    type: "dropdown";
    label: string;
    href?: string;  // Optional as dropdowns might not need a parent href
    children: DropdownItem[];
    icon?: string;
};

export type MegaMenuItem = {
    label: string;
    href: string;
    icon: string;  // Made required since all mega menu items have icons
};

export type MegaMenuGroup = {
    group: string;
    items: MegaMenuItem[];
};

export type MegaMenuFooter = {
    label: string;
    href: string;
};

export type MegaMenu = {
    type: "mega";
    label: string;
    href?: string;  // Optional
    icon?: string;
    children: MegaMenuGroup[];
    footer?: MegaMenuFooter;
};

export type NavigationItem = NavLink | Dropdown | MegaMenu;