// NewsCard.jsx
import React, { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaEye,
} from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

const DEFAULT_TRUNCATE = 180;

const NewsCard = ({ news }) => {
  // Defensive destructuring in case some nested fields are missing
  const {
    title = "Untitled",
    rating = { number: 0, badge: "" },
    total_view = 0,
    author = { name: "Unknown", published_date: null, img: "" },
    thumbnail_url = "",
    details = "",
    tags = [],
  } = news || {};

  // allow float rating (e.g. 4.3)
  const ratingNumber = typeof rating.number === "number" ? rating.number : 0;

  const [expanded, setExpanded] = useState(false);

  const formattedDate = author.published_date
    ? new Date(author.published_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  const toggleExpanded = () => setExpanded((s) => !s);

  // Build star icons (max 5) supporting halves
  const renderStars = (value) => {
    const stars = [];
    let remaining = Math.max(0, Math.min(5, value));
    for (let i = 0; i < 5; i += 1) {
      if (remaining >= 1) {
        stars.push(<FaStar key={i} className="inline-block" />);
      } else if (remaining >= 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="inline-block" />);
      } else {
        stars.push(<FaRegStar key={i} className="inline-block" />);
      }
      remaining -= 1;
    }
    return stars;
  };

  // truncated text logic: if shorter than limit, don't show Read More
  const shouldTruncate = details.length > DEFAULT_TRUNCATE;

  const truncatedText = shouldTruncate
    ? details.slice(0, DEFAULT_TRUNCATE).trim()
    : details;

  return (
    <article className="card bg-base-100 shadow-md border border-gray-200 rounded-xl overflow-hidden mb-6">
      {/* Top: author + actions */}
      <header className="flex justify-between items-center px-5 py-5 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img || "https://via.placeholder.com/48"}
            alt={author.name || "Author"}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm leading-tight mb-1">{author.name}</h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500 text-lg">
          <button
            aria-label="bookmark"
            className="hover:text-primary focus:outline-none"
          >
            <CiBookmark size={24} />
          </button>
          <button
            aria-label="share"
            className="hover:text-primary focus:outline-none"
          >
            <IoShareSocialOutline size={24} />
          </button>
        </div>
      </header>

      {/* Title */}
      <div className="px-5 pt-4">
        <h2 className="text-xl font-bold leading-snug text-primary">
          {title}
        </h2>
      </div>

      {/* Image */}
      {thumbnail_url ? (
        <figure className="px-5 mt-5 mb-5">
          <img
            src={thumbnail_url}
            alt={title}
            className="rounded-lg w-full h-auto object-cover"
            loading="lazy"
          />
        </figure>
      ) : null}

      {/* Details with Read More toggle */}
      <div className="px-5 pb-5 mb-5 border-b border-base-300">
        <p className="text-sm text-gray-600">
          {expanded ? details : `${truncatedText}${shouldTruncate ? "..." : ""}`}
        </p>

        {/* Show button only when truncation applies */}
        {shouldTruncate && (
          <button
            onClick={toggleExpanded}
            className="mt-2 text-orange-500 font-medium text-sm hover:underline focus:outline-none"
            aria-expanded={expanded}
            aria-controls={`news-details-${news?.id || "unknown"}`}
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        )}
      </div>

      {/* Tags (optional small row) */}
      {tags && tags.length > 0 && (
        <div className="px-5 pb-3">
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 5).map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 border rounded-md text-gray-600"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Footer: rating + views */}
      <footer className="flex justify-between items-center px-5 pt-2 pb-5 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-xl text-orange-400 font-medium" aria-hidden>
            {renderStars(ratingNumber)}
          </div>
          <span className="ml-1 text-gray-700 font-medium">
            {Number.isFinite(ratingNumber) ? ratingNumber.toFixed(1) : "0.0"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaEye className="text-gray-500 text-xl" />
          <span className="font-medium">{total_view.toLocaleString()}</span>
        </div>
      </footer>
    </article>
  );
};

export default NewsCard;
