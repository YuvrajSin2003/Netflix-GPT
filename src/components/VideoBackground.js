// import { useSelector } from "react-redux";
// import useMovieTrailer from "../hooks/useMovieTrailer";


// const VideoBackground = ({movieId}) => {
//     const trailerVide = useSelector(store => store.movies?.trailerVide)
//     useMovieTrailer(movieId);

//   return (
//     <div className="w-screen h-screen">
//       <iframe
//       className="w-screen h-screen aspect-video"
//         width="560"
//         height="315"
//         src={"https://www.youtube.com/embed/d9erkpdh5o0?si=LrlrEBdXhfAAjURu"+trailerVide?.key}
//         title="YouTube video player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         referrerpolicy="strict-origin-when-cross-origin"
//       ></iframe>
//     </div>
//   );
// };

// export default VideoBackground;



import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVide = useSelector((store) => store.movies?.trailerVide);
  useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVide?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
