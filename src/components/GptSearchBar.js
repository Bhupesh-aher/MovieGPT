import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { chatSession } from "../utils/AIModel";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    // search movie in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
        const json = await data.json(); 
        return json.results;
    }

    const handleGptSearchClick = async () => {
    const text = searchText.current.value;

    const prompt = `
    Act as a movie recommendation system.
    Return ONLY valid JSON in this format:

    {
    "movies": ["Movie1", "Movie2", "Movie3", "Movie4", "Movie5"]
    }

    Now recommend 5 movies for: "${text}"
    `;

    try {
        const result = await chatSession.sendMessage(prompt);
        const rawText = result?.response?.text();

        console.log("Raw GPT Response:", rawText);

        // Safe parse
        let parsed;
        try {
        parsed = JSON.parse(rawText);
        } catch (e) {
        console.error("JSON parse failed. Fixing raw output...");
        // Try to extract JSON from mixed text
        const match = rawText.match(/\{[\s\S]*\}/);
        if (match) parsed = JSON.parse(match[0]);
        else throw new Error("GPT returned invalid JSON");
        }

        const movieNames = parsed.movies;
        if (!Array.isArray(movieNames)) {
        console.error("Invalid structure:", parsed);
        return;
        }

        // Fetch each movie from TMDB
        const tmdbResults = await Promise.all(
        movieNames.map((movie) => searchMovieTMDB(movie))
        );

        dispatch(addGptMovieResult({ movieNames, movieResults: tmdbResults }));

    } catch (err) {
        console.error("GPT Search error:", err);
    }
};

    return (
         <div className="pt-[40%] md:pt-[10%] flex justify-center">
            <form className="w-11/12 md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                <input 
                ref={searchText}
                className="p-4 m-4 col-span-9" type="text" 
                placeholder={lang[langKey].gptSearchPlaceholder}/>

                <button className="px-1 md:py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg"
                onClick={handleGptSearchClick}>
                    {lang[langKey].search}
                    </button>
            </form>
         </div>
    )
}

export default GptSearchBar;