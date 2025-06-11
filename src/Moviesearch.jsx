import { useFormik } from "formik";
import axios from "axios";


function Moviesearch({setResults}){
    const typeMap = {
    All: "",
    Movies: "movie",
    Series: "series",
    Episode: "episode"
  };

    const formik = useFormik({
    initialValues: {
      searchQuery: "",
      type: "",
    },
     onSubmit: async (values) => {
      console.log("Search Query:", values.searchQuery);
      console.log("Type:", values.type);

      try {
        const selectedType = typeMap[values.type];
        const url = `http://www.omdbapi.com/?apikey=862e543b&s=${values.searchQuery}${selectedType ? `&type=${selectedType}` : ""}`;
        const response = await axios.get(url);
       
        setResults(response.data.Search || []);  // Store results
      } catch (error) {
        console.log("Error while fetching data:", error);
        setResults([]); // Reset results on error
      }
    },
  });
    return(
        <div>
         <div className=" flex flex-col items-center  mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Welcome to Reealsearch</h2>
        <p className="text-gray-700">
          Discover the latest movies and TV shows with our powerful search
          engine.
        </p>
        
          <form onSubmit={formik.handleSubmit} className="flex flex-wrap w-full my-4">
            
            <input
              type="text"
              value={formik.values.searchQuery}
              onChange={formik.handleChange}
              name="searchQuery"
              placeholder="Search for movies or TV shows..."
              className="w-full p-2 border border-gray-300 rounded m-2"
            />
            <select
              name="type"
              className="m-2 p-2 border border-gray-300 rounded"
              onChange={formik.handleChange}
              value={formik.values.type}
            >
              <option value="" disabled>
                Category
              </option>
              <option value="All">All</option>
              <option value="Movies">Movies</option>
              <option value="Series">Series</option>
              <option value="Episode">Episode</option>
            </select>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-sm m-2 hover:bg-blue-600 transition-colors">
              Search
            </button>
          </form>
        
      </div>
      </div>
    )
}

export default Moviesearch;