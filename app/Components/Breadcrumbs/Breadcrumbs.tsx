"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "../Header/Header";
import "./Breadcrumbs.css";

type BreadcrumbItem = {
    name: string;
    href: string;
};

function normalizePath(path: string) {
    try {
        return decodeURIComponent(path)
            .replace(/\/+$/, "")
            .toLowerCase();
    } catch {
        return path.replace(/\/+$/, "").toLowerCase();
    }
}

function findBreadcrumb(
    items: typeof menuItems,
    pathname: string
): BreadcrumbItem[] | null {
    const currentPath = normalizePath(pathname);

    for (const item of items) {
        // Check dropdown items
        if (item.children) {
            for (const child of item.children) {
                if (
                    child.href !== "#" &&
                    normalizePath(child.href) === currentPath
                ) {
                    return [
                        {
                            name: item.name,
                            href: item.href,
                        },
                        {
                            name: child.name,
                            href: child.href,
                        },
                    ];
                }
            }
        }

        // Check normal menu item
        if (
            item.href !== "#" &&
            normalizePath(item.href) === currentPath
        ) {
            return [
                {
                    name: item.name,
                    href: item.href,
                },
            ];
        }
    }

    return null;
}

function getPageName(pathname: string) {
    const lastPart = pathname
        .split("/")
        .filter(Boolean)
        .pop();

    if (!lastPart) {
        return "Home";
    }

    return decodeURIComponent(lastPart)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function Breadcrumbs() {
    const pathname = usePathname();

    if (pathname === "/") {
        return null;
    }

    const hierarchy = findBreadcrumb(menuItems, pathname);

    return (
        <section className="breadcrumb-section">
            <div className="breadcrumb-container">
                <nav
                    className="breadcrumb-navigation"
                    aria-label="Breadcrumb"
                >
                    {/* HOME */}
                    <Link
                        href="/"
                        className="breadcrumb-link"
                    >
                        Home
                    </Link>

                    {hierarchy ? (
                        hierarchy.map((item, index) => (
                            <span
                                key={`${item.href}-${index}`}
                                className="breadcrumb-group"
                            >
                                <span className="breadcrumb-separator">
                                    /
                                </span>

                                {index === hierarchy.length - 1 ? (
                                    <span className="breadcrumb-current">
                                        {item.name}
                                    </span>
                                ) : (
                                    <span className="breadcrumb-parent">
                                        {item.name}
                                    </span>
                                )}
                            </span>
                        ))
                    ) : (
                        <>
                            <span className="breadcrumb-separator">
                                /
                            </span>

                            <span className="breadcrumb-current">
                                {getPageName(pathname)}
                            </span>
                        </>
                    )}
                </nav>
            </div>
        </section>
    );
}