

export const Navlinks = [
    {
        label: "Products",
        href: "/all-products",
        type: "link",
        icon: "/images/box.png",
    },

    {
        label: "Industries",
        href: "/industries",
        type: "mega",
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
                        href: "/mylar-bags",
                        icon: "/images/box.png",
                    },
                    {
                        label: "CBD Boxes",
                        href: "/cbd-boxes",
                        icon: "/images/box.png",
                    },
                    {
                        label: "Mailer Boxes",
                        href: "/mailer-boxes",
                        icon: "/images/box.png",
                    },
                    {
                        label: "Kraft Boxes",
                        href: "/kraft-boxes",
                        icon: "/images/box.png",
                    },
                    {
                        label: "Cardboard Boxes",
                        href: "/cardboard-boxes",
                        icon: "/images/box.png",
                    },
                    {
                        label: "Shapes & Styles",
                        href: "/shapes-styles",
                        icon: "/images/box.png",
                    },
                    {
                        label: "Pet Boxes",
                        href: "/pet-boxes",
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
        type: "dropdown",
        children: [
            { label: "Corrugated", href: "/material/corrugated" },
            { label: "Kraft", href: "/material/kraft" },
            { label: "Rigid", href: "/material/rigid" },
        ],
    },

    {
        label: "Shapes & Styles",
        href: "/products",
        type: "dropdown",
        children: [
            { label: "Auto Lock", href: "/shapes/auto-lock" },
            { label: "Tuck End", href: "/shapes/tuck-end" },
        ],
    },

    {
        label: "Contact Us",
        href: "/contact",
        type: "link",
    },

    {
        label: "Blog",
        href: "/blog",
        type: "link",
    },
];

export type NavLink = {
    type: "link";
    label: string;
    href?: string;
    icon?: string;
};

export type Dropdown = {
    type: "dropdown";
    href?: string;
    label: string;
    children: { label: string; href: string }[];
    icon?: string;
};

export type MegaMenu = {
    type: "mega";
    href?: string;
    label: string;
    icon?: string;
    children: {
        group: string;
        items: {
            label: string;
            href: string;
            icon: string;
        }[];
    }[];
    footer?: {
        label: string;
        href: string;
    };
};

export type NavigationItem = NavLink | Dropdown | MegaMenu;