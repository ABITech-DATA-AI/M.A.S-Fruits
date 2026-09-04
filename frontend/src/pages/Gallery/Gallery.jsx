import React, { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import monthanBanana from "../../assets/gallery/1.jpg";
import hillBanana from "../../assets/gallery/2.jpg";
import redBanana from "../../assets/gallery/3.jpg";
import aboutImage from "../../assets/gallery/4.jpg";
import farmImage from "../../assets/gallery/5.jpg";
import yelakkiBanana from "../../assets/gallery/6.jpg";
import elaichiBanana from "../../assets/gallery/7.jpg";
import poovanBanana from "../../assets/gallery/8.jpg";
import rawBanana from "../../assets/gallery/9.jpg";
import Redbanana from "../../assets/gallery/10.jpg";
import Redbana from "../../assets/gallery/11.jpg";
import Redban from "../../assets/gallery/12.jpg";
import Redba from "../../assets/gallery/13.jpg";

import "./Gallery.css";
import harvestVideo1 from "../../assets/gallery/videos/harvest-1.mp4";
import harvestVideo2 from "../../assets/gallery/videos/harvest-2.mp4";
import harvestVideo3 from "../../assets/gallery/videos/harvest-3.mp4";
import harvestVideo4 from "../../assets/gallery/videos/harvest-4.mp4";

const galleryItems = [
  { id: 1, title: "Fresh from the Farm", category: "Farms", image: farmImage },
  { id: 2, title: "Hill Banana Harvest", category: "Harvest", image: hillBanana },
  { id: 3, title: "Red Banana", category: "Banana Varieties", image: redBanana },
  { id: 4, title: "Natural Farm Life", category: "Farms", image: aboutImage },
  { id: 5, title: "Red Banana", category: "Banana Varieties", image: monthanBanana },
  { id: 6, title: "Yelakki Banana", category: "Banana Varieties", image: yelakkiBanana },
  { id: 7, title: "Elaichi Banana", category: "Banana Varieties", image: elaichiBanana },
  { id: 8, title: "Poovan Banana", category: "Banana Varieties", image: poovanBanana },
  { id: 9, title: "Raw Banana", category: "Harvest", image: rawBanana },
  { id: 10, title: "Redbanana", category: "Banana Varieties", image: Redbanana },
  { id: 11, title: "Redbanan", category: "Banana Varieties", image: Redbana },
  { id: 12, title: "Redbana", category: "Banana Varieties", image: Redban },
  { id: 13, title: "Redban", category: "Banana Varieties", image: Redba },

];

const filters = ["All", "Farms", "Harvest", "Banana Varieties"];

const harvestVideos = [
  { id: "v1", title: "Fresh Banana Harvest", src: harvestVideo1 },
  { id: "v2", title: "Banana Farm Harvest", src: harvestVideo2 },
  { id: "v3", title: "Fresh from the Farm", src: harvestVideo3 },
  { id: "v4", title: "Harvest Moments", src: harvestVideo4 },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeFilter),
    [activeFilter]
  );

  const visible = useMemo(() => {
    if (!filtered.length) return [];
    return [-2, -1, 0, 1, 2].map(
      (offset) => filtered[(activeIndex + offset + filtered.length) % filtered.length]
    );
  }, [filtered, activeIndex]);

  const changeSlide = (direction) => {
    setActiveIndex(
      (current) => (current + direction + filtered.length) % filtered.length
    );
  };

  const selectFilter = (filter) => {
    setActiveFilter(filter);
    setActiveIndex(0);
  };

  const active = filtered[activeIndex] || filtered[0];

  return (
    <section className="gallery-section section-first">
      <div className="gallery-shell">
        <div className="gallery-heading">
          <h1>Moments from our <em>farm</em></h1>
          <p>
            A visual journey through our banana farms, fresh harvests and
            naturally grown varieties.
          </p>
        </div>

        

        <div className="gallery-stage" aria-live="polite">
          {visible.map((item, position) => (
            <button
              type="button"
              className={`gallery-slide gallery-slide-${position}`}
              key={`${item.id}-${position}`}
              onClick={() => {
                if (position === 2) return;
                changeSlide(position < 2 ? -1 : 1);
              }}
              aria-label={`View ${item.title}`}
            >
              <img src={item.image} alt={item.title} />
              {position === 2 && (
                <span className="gallery-caption">
                  <small>{item.category}</small>
                  <strong>{item.title}</strong>
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="gallery-controls">
          <button type="button" onClick={() => changeSlide(-1)} aria-label="Previous image">
            <ChevronLeft size={20} />
          </button>
          <span>
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(filtered.length).padStart(2, "0")}
          </span>
          <button type="button" onClick={() => changeSlide(1)} aria-label="Next image">
            <ChevronRight size={20} />
          </button>
        </div>

        <section className="gallery-video-section" aria-label="Harvest videos">
          <div className="gallery-video-heading">
            <span>WATCH OUR FARM</span>
            <h2>Harvest <em>in motion</em></h2>
            <p>Real moments from our banana farms and fresh harvest.</p>
          </div>

          <div className="gallery-video-grid">
            {harvestVideos.map((video) => (
              <article className="gallery-video-card" key={video.id}>
                <div className="gallery-video-frame">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    src={video.src}
                    aria-label={video.title}
                  />
                  <span className="gallery-video-label">▶ PLAY VIDEO</span>
                </div>
                <h3>{video.title}</h3>
              </article>
            ))}
          </div>
        </section>

        

        <div className="gallery-bottom-copy">
          <span>Grown with care</span>
          <span>•</span>
          <span>Picked fresh</span>
          <span>•</span>
          <span>Delivered naturally</span>
        </div>
      </div>
    </section>
  );
}
