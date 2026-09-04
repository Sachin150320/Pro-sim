"use client";

import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import "./CrumbBanner.css";

type CrumbBannerProps = {
  title?: string;
  subtitle?: string;
  image?: string;
  imageInset?: string;
  imageCaption?: string;
};

export default function CrumbBanner({
  title,
  subtitle,
  image,
  imageInset,
  imageCaption,
}: CrumbBannerProps) {
  return (
    <section className="crumb-banner">
      <div className="crumb-banner-inner">
        <div className="crumb-banner-crumbs">
          <Breadcrumbs />
        </div>

        <div className={`crumb-banner-grid${image ? " has-media" : ""}`}>
          <div className="crumb-banner-text">
            {title && <h1>{title}</h1>}
            {subtitle && <p>{subtitle}</p>}
          </div>

          {image && (
            <div className="crumb-banner-media">
              <figure className="crumb-banner-media-main">
                <img src={image} alt={title || "ProSIM"} loading="eager" />
                {imageCaption && <figcaption>{imageCaption}</figcaption>}
              </figure>
              {imageInset && (
                <figure className="crumb-banner-media-inset">
                  <img src={imageInset} alt="" loading="lazy" />
                </figure>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
