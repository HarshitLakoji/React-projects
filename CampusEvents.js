import React, { useEffect, useState } from "react";
import styles from "./CampusEvents.module.css";

const categories = [
  {
    title: "Academics",
    color: "bg-blue-800",
    body: "Engaging sessions that enhance academic knowledge and professional skills. Academic events include guest lectures, technical paper presentations, competitions, and career-oriented programs that provide students with a platform to expand their learning beyond classrooms.",
    images: [
      "/images/academics/1.jpg",
      "/images/academics/2.jpg",
      "/images/academics/3.jpg",
      "/images/academics/4.jpg",
      "/images/academics/5.jpg",
    ],
  },
  {
    title: "Cultural",
    color: "bg-pink-700",
    body: "Celebrations and expressions of diverse cultures through art, music, and tradition. Cultural events foster creativity and community through music nights, dance performances, art exhibitions, and cultural fests that reflect the vibrant diversity of campus life.",
    images: [
      "/images/cultural/1.jpg",
      "/images/cultural/2.jpg",
      "/images/cultural/3.jpg",
      "/images/cultural/4.jpg",
      "/images/cultural/5.jpg",
    ],
  },
  {
    title: "Social",
    color: "bg-yellow-700",
    body: "Social events provide a fun and interactive environment to foster community building. Some of the key events include blood donation drives, AIDS awareness campaigns, and environmental sustainability activities.",
    images: [
      "/images/social/1.jpg",
      "/images/social/2.jpg",
      "/images/social/3.jpg",
      "/images/social/4.jpg",
      "/images/social/5.jpg",
    ],
  },
  {
    title: "Sports & Fitness",
    color: "bg-green-800",
    body: "Promoting health and team spirit through games, workouts, and challenges. This includes inter-college tournaments, fitness bootcamps, and wellness activities aimed at fostering physical well-being and teamwork.",
    images: [
      "/images/sports/1.jpg",
      "/images/sports/2.jpg",
      "/images/sports/3.jpg",
      "/images/sports/4.jpg",
      "/images/sports/5.jpg",
    ],
  },
  {
    title: "Workshops & Development",
    color: "bg-purple-700",
    body: "Skill-building and personal growth through interactive and informative sessions. These workshops include resume writing, leadership training, coding bootcamps, and personal development seminars.",
    images: [
      "/images/workshops/1.jpg",
      "/images/workshops/2.jpg",
      "/images/workshops/3.jpg",
      "/images/workshops/4.jpg",
      "/images/workshops/5.jpg",
    ],
  },
];

const CampusEvents = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Campus Events</h1>

      <div className={styles.grid}>
        {categories.map((category, index) => (
          <div
            key={index}
            className={`${styles.card} ${styles[category.color]}`}
            onClick={() => toggleExpand(index)}
          >
            <h2 className={styles.cardTitle}>{category.title}</h2>
            <p className={styles.cardBody}>
              {expandedIndex === index
                ? category.body
                : `${category.body.slice(0, 100)}...`}
            </p>
            <div className={styles.imageGrid}>
              {category.images
                .slice(0, expandedIndex === index ? category.images.length : 4)
                .map((src, imgIdx) => (
                  <img
                    key={imgIdx}
                    src={src}
                    alt={`${category.title} ${imgIdx + 1}`}
                    className={styles.cardImage}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>

      {expandedIndex !== null && (
        <div className={styles.overlay} onClick={() => setExpandedIndex(null)}>
          <div
            className={styles.expandedContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={styles.expandedTitle}>
              {categories[expandedIndex].title}
            </h2>
            <p className={styles.expandedBody}>
              {categories[expandedIndex].body}
            </p>
            <div className={styles.expandedImages}>
              {categories[expandedIndex].images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`${categories[expandedIndex].title} ${idx + 1}`}
                  className={styles.expandedImage}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampusEvents;
