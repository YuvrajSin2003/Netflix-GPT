const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 absolute text-white bg-gradient-to-r">
      <h1 className="text-6xl font-bold ">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-gray-500 text-black p-4 px-16 text-xl bg-opacity-50 rounded-lg">
          ▶️Play
        </button>
        <button className="mx-2  bg-black text-white p-4 px-16 text-xl bg-opacity-50 rounded-lg">
          More Infor
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
