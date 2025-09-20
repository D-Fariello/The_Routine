import React, { useMemo } from "react";
import reels from "../data/reels.json";

const toEmbedSrc = (item) => {
  const idFromPermalink =
    item?.permalink?.match(/\/reel\/([^/]+)\//)?.[1] || null;
  const id = item.id || idFromPermalink;
  return id ? `https://www.instagram.com/reel/${id}/embed` : null;
};

const ReelsSection = ({
  title = "Reels Instagram",
  profileUrl = "https://www.instagram.com/the.routineofficial/",
}) => {
  const embeds = useMemo(
    () =>
      reels
        .map((r) => ({ ...r, embedSrc: toEmbedSrc(r) }))
        .filter((r) => r.embedSrc),
    []
  );

  return (
    <section id="reels" className="reels" aria-labelledby="reels-title">
      <div className="reels__header">
        <h2 id="reels-title">🎬 Reels Instagram</h2>
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
            Voir le profil
          </a>
        </div>
      </div>

      <div className="reels__grid">
        {embeds.map((item, idx) => (
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
                scrolling="no"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ReelsSection;
