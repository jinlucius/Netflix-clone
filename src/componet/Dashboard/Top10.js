// import React, { useEffect, useRef, useState } from "react";
// import "./Top10.css";
// import movies from "../../data/deta"; // (rename to data.js later better)

// function Top10Section() {
//   const ref = useRef();
//   const [visibleCount, setVisibleCount] = useState(0);

//   const topMovies = movies
//     .filter((m) => m.category === "Top10")
//     .sort((a, b) => a.rank - b.rank);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!ref.current) return;

//       const rect = ref.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       const progress = Math.min(
//         1,
//         Math.max(0, (windowHeight - rect.top) / windowHeight)
//       );

//       const count = Math.floor(progress * topMovies.length);

//       setVisibleCount(count);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [topMovies.length]);

//   return (
//     <div ref={ref} className="top10">
//       <h2>Top 10 in India 🔥</h2>

//       <div className="top10_container">
//         {topMovies.map((movie, i) => (
//           <div
//             key={movie.id}
//             className={`card ${i < visibleCount ? "show" : ""}`}
//           >
//             {/* 🔥 Netflix style background number */}
//             <div className="rank_bg">{movie.rank}</div>

//             <img src={movie.image} alt={movie.title} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Top10Section;