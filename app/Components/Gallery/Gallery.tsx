
"use client";

import React, { useEffect, useState } from "react";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import "./Gallery.css";
import CrumbBanner from "@/app/Components/CrumbBanner/CrumbBanner";
const galleryData = [
  {
    id: 1,
    image: "/assets/images/Gallery/gal4.jpg",
    title: "ProSIM Team Tree Planting",
    description:
      "The ProSIM team is actively involved in tree planting as part of our commitment to environmental sustainability and the cause of a greener planet.",
    featured: true,
  },
  {
    id: 2,
    image: "/assets/images/Gallery/gal2.jpg",
    title: "Environmental Sustainability",
  },
  {
    id: 3,
    image: "/assets/images/Gallery/gal3.jpg",
    title: "Greener Planet Initiative",
  },
  {
    id: 4,
    image: "/assets/images/Gallery/gal-05.jpg",
    title: "CORDEL Workshop – World Nuclear Association",
    description:
      "ProSIM contributes to the Nuclear Design Code Harmonization efforts by World Nuclear Association.",
    featured: true,
  },
  {
    id: 5,
    image: "/assets/images/Gallery/gal-06.jpg",
    title: "FRAMATOME Factory Visit",
    description:
      "Dr Shamasundar, ProSIM, visited the factories of FRAMATOME at St. Marcel and Le Creusot in France, along with select delegates of the CORDEL workshop.",
    featured: true,
  },
  {
    id: 6,
    image: "/assets/images/Gallery/gallery-01.jpg",
    title: "ProSIM Gallery",
  },
  {
    id: 7,
    image: "/assets/images/Gallery/gallery-02.jpg",
    title: "ProSIM Gallery",
  },
  {
    id: 8,
    image: "/assets/images/Gallery/gallery-03.jpg",
    title: "ProSIM Gallery",
  },
  {
    id: 9,
    image: "/assets/images/Gallery/gallery-04.jpg",
    title: "ProSIM Gallery",
  },
  {
    id: 10,
    image: "/assets/images/Gallery/gallery-05.jpg",
    title: "ProSIM Gallery",
  },
  {
    id: 11,
    image: "/assets/images/Gallery/gallery-06.jpg",
    title: "ProSIM Gallery",
  },
  {
    id: 12,
    image: "/assets/images/Gallery/gallery-07.jpg",
    title: "ProSIM Gallery",
  },
  {
    id: 13,
    image: "/assets/images/Gallery/gallery-08.jpg",
    title: "ProSIM Gallery",
  },
  {
    id: 14,
    image: "/assets/images/Gallery/gallery-09.jpg",
    title: "ProSIM Gallery",
  },
  {
    id: 15,
    image: "/assets/images/Gallery/gallery-10.jpg",
    title: "ProSIM Gallery",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryData)[number] | null
  >(null);

  /* Lock body scroll when popup is open */
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  /* ESC key */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Breadcrumb */}
      <CrumbBanner
        title="Gallery"
        subtitle="Moments from ProSIM — events, factory visits, workshops and community initiatives."
        image="/assets/images/about/prosim_enhanced.png"
        imageInset="/assets/images/about/1.webp"
        imageCaption="ProSIM moments"
      />

      <section className="ps-gallery-section">
        <div className="ps-gallery-container">

          {/* HEADER */}

          <ScrollAnimation>
            <div className="ps-gallery-header">
              <span className="ps-gallery-subtitle">
                PROSIM
              </span>

              <h1 className="ps-gallery-title">
                Our <strong> Gallery</strong> 
              </h1>

   

              <p className="ps-gallery-intro">
                Explore moments from ProSIM&apos;s engineering,
                environmental sustainability and nuclear energy
                initiatives.
              </p>
            </div>
          </ScrollAnimation>

          {/* FEATURED CONTENT */}

          <div className="ps-gallery-featured">

            {/* CARD 1 */}

            <ScrollAnimation>
              <div
                className="ps-gallery-feature-card"
                onClick={() => setSelectedImage(galleryData[0])}
              >
                <div className="ps-gallery-image">
                  <img
                    src={galleryData[0].image}
                    alt={galleryData[0].title}
                  />

                  <div className="ps-gallery-overlay">
                    <div className="ps-gallery-view">
                      <span>+</span>
                    </div>
                  </div>

                  <div className="ps-gallery-number">
                    01
                  </div>
                </div>

                <div className="ps-gallery-feature-content">
                  <span>ENVIRONMENT</span>

                  <h2>
                    {galleryData[0].title}
                  </h2>

                  <p>
                    {galleryData[0].description}
                  </p>

                  <button type="button">
                    View Image <span>→</span>
                  </button>
                </div>
              </div>
            </ScrollAnimation>

            {/* CARD 2 */}

            <ScrollAnimation>
              <div
                className="ps-gallery-feature-card"
                onClick={() => setSelectedImage(galleryData[3])}
              >
                <div className="ps-gallery-image">
                  <img
                    src={galleryData[3].image}
                    alt={galleryData[3].title}
                  />

                  <div className="ps-gallery-overlay">
                    <div className="ps-gallery-view">
                      <span>+</span>
                    </div>
                  </div>

                  <div className="ps-gallery-number">
                    02
                  </div>
                </div>

                <div className="ps-gallery-feature-content">
                  <span>NUCLEAR ENERGY</span>

                  <h2>
                    {galleryData[3].title}
                  </h2>

                  <p>
                    {galleryData[3].description}
                  </p>

                  <button type="button">
                    View Image <span>→</span>
                  </button>
                </div>
              </div>
            </ScrollAnimation>

          </div>

          {/* SMALL GALLERY */}

          <ScrollAnimation>
            <div className="ps-gallery-grid">
              {galleryData
                .filter(
                  (_, index) =>
                    index !== 0 &&
                    index !== 3 &&
                    index !== 4
                )
                .map((item, index) => (
                  <div
                    className="ps-gallery-item"
                    key={item.id}
                    onClick={() =>
                      setSelectedImage(item)
                    }
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <div className="ps-gallery-item-overlay">
                      <div className="ps-gallery-plus">
                        +
                      </div>

                      <div className="ps-gallery-item-title">
                        {item.title}
                      </div>
                    </div>

                    <span className="ps-gallery-index">
                      {String(index + 3).padStart(2, "0")}
                    </span>
                  </div>
                ))}
            </div>
          </ScrollAnimation>

          {/* FRAMATOME FEATURE */}

          <ScrollAnimation>
            <div
              className="ps-gallery-story"
              onClick={() =>
                setSelectedImage(galleryData[4])
              }
            >
              <div className="ps-gallery-story-image">
                <img
                  src={galleryData[4].image}
                  alt={galleryData[4].title}
                />

                <div className="ps-gallery-overlay">
                  <div className="ps-gallery-view">
                    <span>+</span>
                  </div>
                </div>
              </div>

              <div className="ps-gallery-story-content">
                <span>INTERNATIONAL COLLABORATION</span>

                <h2>
                  {galleryData[4].title}
                </h2>

                <p>
                  {galleryData[4].description}
                </p>

                <div className="ps-gallery-story-link">
                  Explore Image <span>→</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>

        </div>
      </section>

      {/* LIGHTBOX */}

      {selectedImage && (
        <div
          className="ps-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="ps-lightbox-close"
            onClick={() =>
              setSelectedImage(null)
            }
            aria-label="Close"
          >
            ×
          </button>

          <div
            className="ps-lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="ps-lightbox-caption">
              <h3>
                {selectedImage.title}
              </h3>

              {selectedImage.description && (
                <p>
                  {selectedImage.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

