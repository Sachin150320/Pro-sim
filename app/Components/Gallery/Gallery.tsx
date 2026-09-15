"use client";

import React, { useEffect, useState } from "react";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import "./Gallery.css";
import CrumbBanner from "@/app/Components/CrumbBanner/CrumbBanner";

type GalleryItem = {
  id: number;
  image: string;
  images?: string[]; // optional: multiple images for a single story (shown in popup)
  title: string;
  category?: string;
  description?: string;
};

const galleryData: GalleryItem[] = [

 {
    id: 6,
    image: "/assets/images/Gallery/gallery-30.jpg",
    images: [
      "/assets/images/Gallery/gallery-30.jpg",
      "/assets/images/Gallery/gallery-23.jpg",
      "/assets/images/Gallery/gallery-24.jpg",
      "/assets/images/Gallery/gallery-25.jpg",
      "/assets/images/Gallery/gallery-26.jpg",
      "/assets/images/Gallery/gallery-27.jpg",
      "/assets/images/Gallery/gallery-28.jpg",
      "/assets/images/Gallery/gallery-29.jpg",
      "/assets/images/Gallery/gallery-22.jpg",
      "/assets/images/Gallery/gallery-31.jpg",
    ],
    title: "6th International Climate Summit 2026 – PHD Chamber of Commerce & Industry",
    category: "Nuclear Energy & Policy",
    description:
      "Dr S Shamasundar, Managing Director of ProSIM, delivered a lecture and was a panelist in the session on \"India's Nuclear Energy and SMR Roadmap\" during the 6th International Climate Summit 2026, organised by PHD Chamber of Commerce & Industry in Delhi on 2nd September 2026. He spoke on the importance of nuclear energy in India's energy transition and the need to develop an energy mix comprising Nuclear Energy, Bio Energy, and locally available coal, and noted how the path-changing SHANTI Act positions India to become a global nuclear energy powerhouse with participation of private players. During the panel discussion on India's Nuclear Energy and SMR Roadmap, he interacted with Dr A K Nayak (former Head, NCPW, DAE), Dr Ravi Sharma (Inflexion, Singapore), Mr Mukesh Rustagi (Co-Chair, Environment and Climate Change Subcommittee, PHDCCI), Prof Kamal Bajoria (formerly professor at IIT Bombay and Cambridge University), Mr Prasenjit Pal (Former ED, NTPC Nuclear Division) and Mr Sudhir Thorwe (Reliance), and also met Dr Anil Kakodkar, former Chairman of the Atomic Energy Commission, who was the chief guest and delivered the inaugural address.",
  },




  {
    id: 4,
    image: "/assets/images/Gallery/gal-05.jpg",
    title: "CORDEL Workshop – World Nuclear Association",
    category: "Nuclear Energy",
    description:
      "ProSIM contributes to the Nuclear Design Code Harmonization efforts by World Nuclear Association.",
  },
  {
    id: 5,
    image: "/assets/images/Gallery/gal-06.jpg",
    title: "FRAMATOME Factory Visit",
    category: "International Collaboration",
    description:
      "Dr Shamasundar, ProSIM, visited the factories of FRAMATOME at St. Marcel and Le Creusot in France, along with select delegates of the CORDEL workshop.",
  },
 
  { id: 16, image: "/assets/images/Gallery/gallery-11.jpg", title: "ProSIM Gallery" },
  { id: 17, image: "/assets/images/Gallery/gallery-12.jpg", title: "ProSIM Gallery" },
  { id: 18, image: "/assets/images/Gallery/gallery-13.jpg", title: "ProSIM Gallery" },
  { id: 19, image: "/assets/images/Gallery/gallery-14.jpg", title: "ProSIM Gallery" },
  { id: 20, image: "/assets/images/Gallery/gallery-15.jpg", title: "ProSIM Gallery" },
  { id: 21, image: "/assets/images/Gallery/gallery-16.jpg", title: "ProSIM Gallery" },
  { id: 22, image: "/assets/images/Gallery/gallery-17.jpg", title: "ProSIM Gallery" },
  { id: 23, image: "/assets/images/Gallery/gallery-18.jpg", title: "ProSIM Gallery" },
  { id: 24, image: "/assets/images/Gallery/gallery-19.jpg", title: "ProSIM Gallery" },
  { id: 25, image: "/assets/images/Gallery/gallery-20.jpg", title: "ProSIM Gallery" },
 

  { id: 7, image: "/assets/images/Gallery/gallery-02.jpg", title: "ProSIM Gallery" },
  { id: 8, image: "/assets/images/Gallery/gallery-03.jpg", title: "ProSIM Gallery" },
  { id: 9, image: "/assets/images/Gallery/gallery-04.jpg", title: "ProSIM Gallery" },
  { id: 10, image: "/assets/images/Gallery/gallery-05.jpg", title: "ProSIM Gallery" },
  { id: 11, image: "/assets/images/Gallery/gallery-06.jpg", title: "ProSIM Gallery" },


];

const stories = galleryData.filter((item) => item.description);
const photos = galleryData.filter((item) => !item.description);

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  /* Reset to first image whenever a new item is opened */
  useEffect(() => {
    setActiveImageIndex(0);
  }, [selectedImage]);

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

      {/* ============================================================
          STORIES  —  images that carry a write-up
      ============================================================ */}
      <section className="gl-stories-section">
        <div className="gl-container">
          <ScrollAnimation className="gl-section-head">
            <span className="gl-eyebrow">Highlights</span>
            <h2>
              Stories behind the <strong>photographs</strong>
            </h2>
            <p>
              A closer look at the events, collaborations and initiatives that
              have shaped ProSIM.
            </p>
          </ScrollAnimation>

          <div className="gl-stories">
            {stories.map((item, index) => (
              <ScrollAnimation key={item.id} delay={index * 100}>
                <article
                  className="gl-story"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="gl-story-media">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <span className="gl-story-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="gl-view-btn" aria-hidden="true">
                      +
                    </span>
                  </div>

                  <div className="gl-story-body">
                    {item.category && (
                      <span className="gl-story-cat">{item.category}</span>
                    )}
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className="gl-story-link">
                      View image <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PHOTO GALLERY  —  image only, no write-up
      ============================================================ */}
      <section className="gl-photos-section">
        <div className="gl-container">
          <ScrollAnimation className="gl-section-head">
            <span className="gl-eyebrow">Photo Gallery</span>
            <h2>
              Moments at <strong>ProSIM</strong>
            </h2>
          </ScrollAnimation>

          <div className="gl-photo-grid">
            {photos.map((item) => (
              <button
                type="button"
                className="gl-photo"
                key={item.id}
                onClick={() => setSelectedImage(item)}
                aria-label={`View ${item.title}`}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="gl-photo-overlay" aria-hidden="true">
                  <span className="gl-view-btn">+</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage &&
        (() => {
          const imageList =
            selectedImage.images && selectedImage.images.length > 0
              ? selectedImage.images
              : [selectedImage.image];

          return (
            <div className="ps-lightbox" onClick={() => setSelectedImage(null)}>
              <button
                type="button"
                className="ps-lightbox-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                ×
              </button>

              <div
                className="ps-lightbox-content"
                onClick={(event) => event.stopPropagation()}
              >
                <img
                  src={imageList[activeImageIndex]}
                  alt={`${selectedImage.title} ${activeImageIndex + 1}`}
                />

                {imageList.length > 1 && (
                  <div className="ps-lightbox-thumbs">
                    {imageList.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`ps-lightbox-thumb${
                          idx === activeImageIndex ? " active" : ""
                        }`}
                        onClick={() => setActiveImageIndex(idx)}
                        aria-label={`View image ${idx + 1}`}
                      >
                        <img src={img} alt={`${selectedImage.title} thumbnail ${idx + 1}`} />
                      </button>
                    ))}
                  </div>
                )}

                {(selectedImage.description || selectedImage.title) && (
                  <div className="ps-lightbox-caption">
                    {selectedImage.category && (
                      <span className="ps-lightbox-cat">{selectedImage.category}</span>
                    )}
                    <h3>{selectedImage.title}</h3>
                    {selectedImage.description && <p>{selectedImage.description}</p>}
                  </div>
                )}
              </div>
            </div>
          );
        })()}
    </>
  );
}