
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import "./Breadcrumbs.css";

export default function Breadcrumbs() {
    const pathname = usePathname();

    const pathSegments = pathname
        .split("/")
        .filter((segment) => segment);

    // Get current page name
    const currentPage =
        pathSegments.length > 0
            ? pathSegments[pathSegments.length - 1]
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())
            : "Home";

    return (
        <section className="breadcrumb-section">
            <div className="breadcrumb-container">

                <div className="breadcrumb-content">

                    {/* Page Heading */}
                    <h2 className="breadcrumb-title">
                        {currentPage}
                    </h2>

                    {/* Breadcrumb */}
                    <div className="breadcrumb-navigation">

                        <Link href="/" className="breadcrumb-home">
                            Home
                        </Link>

                        {pathSegments.length > 0 && (
                            <>
                                <span className="breadcrumb-arrow">
                                    ›
                                </span>

                                {pathSegments.map((segment, index) => {
                                    const href =
                                        "/" +
                                        pathSegments
                                            .slice(0, index + 1)
                                            .join("/");

                                    const isLast =
                                        index === pathSegments.length - 1;

                                    const formattedName = segment
                                        .replace(/-/g, " ")
                                        .replace(/\b\w/g, (char) =>
                                            char.toUpperCase()
                                        );

                                    return (
                                        <span
                                            key={href}
                                            className="breadcrumb-group"
                                        >
                                            {isLast ? (
                                                <span
                                                    className="breadcrumb-current"
                                                    aria-current="page"
                                                >
                                                    {formattedName}
                                                </span>
                                            ) : (
                                                <>
                                                    <Link
                                                        href={href}
                                                        className="breadcrumb-link"
                                                    >
                                                        {formattedName}
                                                    </Link>

                                                    <span className="breadcrumb-arrow">
                                                        ›
                                                    </span>
                                                </>
                                            )}
                                        </span>
                                    );
                                })}
                            </>
                        )}

                    </div>
                </div>

            </div>
        </section>
    );
}

