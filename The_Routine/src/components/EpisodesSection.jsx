import React, { useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import episodesData from "../data/episodes.json";

const ytThumb = (youtubeId) =>
  `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
const ytLink = (youtubeId) => `https://www.youtube.com/watch?v=${youtubeId}`;

const EpisodesSection = ({ variant = "all", limit }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const episodes = useMemo(() => {
    let list = episodesData;

    if (variant === "latest") {
      list = episodesData.filter((e) => e.type === "latest");
      // Ordina per data (più recenti prima)
      list = list
        .slice()
        .sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        );
    } else if (variant === "popular") {
      list = episodesData.filter((e) => e.type === "popular");
    }

    if (limit && Number.isInteger(limit)) {
      list = list.slice(0, limit);
    }
    return list;
  }, [variant, limit]);

  return (
    <section
      id="episodes"
      className="episodes"
      aria-labelledby="episodes-title"
    >
      <div className="episodes__text">
        <h2 id="episodes-title">🎙️ Derniers épisodes</h2>
        <p>
          Découvrez <strong>The Routine</strong> : sport, bien-être et lifestyle
          — des conversations concrètes pour améliorer votre quotidien.
        </p>
      </div>

      <div className="episodes__cards">
        {episodes && episodes.length > 0 ? (
          episodes.map((ep, index) => (
            <div
              className="episodes__card"
              key={ep.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <a
                href={ytLink(ep.youtubeId)}
                target="_blank"
                rel="noopener noreferrer"
                className="episodes__link"
                aria-label={`${ep.title} — regarder sur YouTube`}
              >
                <img
                  src={ytThumb(ep.youtubeId)}
                  alt={ep.title}
                  loading="lazy"
                />
                <div className="episodes__overlay">
                  <h3>{ep.title}</h3>
                  <p>{ep.description}</p>
                  <div className="episodes__meta">
                    {ep.publishedAt && <span>{ep.publishedAt}</span>}
                    {ep.duration && <span>• {ep.duration}</span>}
                  </div>
                </div>
              </a>
            </div>
          ))
        ) : (
          <div className="episodes__empty">
            <p>Les épisodes arrivent bientôt. Restez à l’écoute !</p>
          </div>
        )}
      </div>

      <div className="episodes__button">
        <a
          href="https://www.youtube.com/"
          className="episodes__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir tous les épisodes
        </a>
      </div>
    </section>
  );
};

export default EpisodesSection;
