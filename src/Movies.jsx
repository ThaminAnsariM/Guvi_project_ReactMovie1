function Movies({ result }) {
  return (
    <div className="w-72 bg-white rounded-xl shadow-lg overflow-hidden m-4 transform hover:scale-105 transition-transform duration-300">
      <img
        src={result.Poster !== "N/A" ? result.Poster : "https://via.placeholder.com/200x300?text=No+Image"}
        alt={result.Title || "No Title"}
        className="w-full h-80 object-cover"
      />
      <div className="p-4 flex flex-col justify-between h-40">
        <h1 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {result.Title || "Title Not Available"}
        </h1>
        <p className="text-sm text-gray-600 mb-1">
          Type: {result.Type ? result.Type.charAt(0).toUpperCase() + result.Type.slice(1) : "Unknown"}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          Year: {result.Year || "N/A"}
        </p>
        <p className="text-sm text-gray-600">
          IMDb ID: {result.imdbID || "N/A"}
        </p>
      </div>
    </div>
  );
}

export default Movies;
