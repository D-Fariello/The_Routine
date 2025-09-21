// src/sections/ReelsSection.jsx
import React, { useMemo } from "react";
import reels from "../data/reels.json";

const toEmbedSrc = (item) => {
  const idFromPermalink =
    item?.permalink?.match(/\/reel\/([^/]+)\//)?.[1] || null;
  const id = item?.id || idFromPermalink;
  return id ? `https://www.instagram.com/reel/${id}/embed` : null;
};

const ReelsSection = ({
  title = "Reels Instagram",
  profileUrl = "https://www.instagram.com/the.routineofficial/",
  ctaLabel = "Accéder à Instagram",
  limit,
}) => {
  const embeds = useMemo(() => {
    const list = (Array.isArray(reels) ? reels : [])
      .map((r) => ({ ...r, embedSrc: toEmbedSrc(r) }))
      .filter((r) => r.embedSrc);
    return Number.isInteger(limit) ? list.slice(0, limit) : list;
  }, [limit]);

  const hasReels = embeds.length > 0;

  return (
    <section id="reels" className="reels" aria-labelledby="reels-title">
      <div className="reels__header">
        <h2 id="reels-title">{title}</h2>
        <p className="reels__subtitle">
          Un aperçu rapide de nos coulisses, conseils et moments forts du
          podcast.
        </p>
        <div className="reels__actions">
          <a
            className="reels__cta"
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ctaLabel}
          </a>
        </div>
      </div>

      {/* Si aucun reel valide, on affiche des placeholders cliquables */}
      <div className="reels__grid">
        {hasReels
          ? embeds.map((item, idx) => (
              <article
                className="reels__card"
                key={item.id || item.permalink || idx}
              >
                <div className="reels__frame" aria-roledescription="video">
                  <iframe
                    src={item.embedSrc}
                    className="reels__iframe"
                    title={`Reel Instagram ${idx + 1}`}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    scrolling="no"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                  />
                </div>
              </article>
            ))
          : Array.from({ length: 4 }).map((_, i) => (
              <article className="reels__card" key={`ph-${i}`}>
                <div className="reels__frame reels__frame--placeholder">
                  <a
                    href={profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reels__play"
                    aria-label="Accéder à Instagram"
                  >
                    ▶
                  </a>
                </div>
              </article>
            ))}
      </div>
    </section>
  );
};

export default ReelsSection;
