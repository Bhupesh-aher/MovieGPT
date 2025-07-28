# Movie-GPT 🎥✨

**Movie-GPT** is a modern, AI-powered movie discovery platform. This app provides a stunning and interactive UI where users can explore movies and series, discover new releases, and get personalized movie recommendations. The app leverages the power of **GPT** for smart movie recommendations based on user search queries and preferences. It also supports **multiple languages.**

## ⚠️ Disclaimer



This project is built purely for educational and personal portfolio purposes.

It is **not affiliated with, endorsed by, or connected to Netflix Inc.**  
All trademarks and copyrights belong to their respective owners.

No real user data is stored or used. Authentication is demo-only and for UI experience simulation.

---

StreamGPT is a modern, AI-powered movie discovery platform. It offers a sleek, Netflix-inspired user interface where users can browse top-rated, trending, and upcoming movies. The app features personalized movie recommendations powered by GPT and supports multiple languages.

---


## 🚀 Live Demo

🎬  This project is currently under review due to branding updates. It will be redeployed soon.





## 🔥 Features

- **AI-Powered Movie Recommendations**:
    - The app allows users to search for movies or series by genre using the **GPT API**.
    - Users can mix and match genres, and the AI will generate movie/series recommendations based on their input.
    - These movie names are then used to fetch detailed information from the **TMDB API** (cover images, descriptions, ratings, etc.).
- **Movie Trailers**:
    - Background movie trailers continuously play, providing an immersive visual experience, just like OTP platforms.
- **Multiple Movie Categories**:
    - Movies and series are categorized under **Recommended**, **Upcoming**, **Action**, and more.
    - Data is fetched from the **TMDB API**, which provides up-to-date movie information and trailers.
- **Custom Search Feature**:
    - The app features a **GPT Search** bar that allows users to search for movies or series by genre.
    - The user’s search query is sent to the **GPT API**, which intelligently generates movie/series recommendations based on the selected genres or preferences.
- **User Authentication**:
    - Secure user sign-in/sign-up with **Firebase Authentication** (email/password or Google login).
    - User information (email, password, username) is stored securely in **Firebase**.
- **State Management**:
    - **Redux** is used for managing global app state, including user authentication and movie data.
    - Custom hooks abstract the logic for fetching data (like movie trailers, upcoming movies, etc.), making the app more modular and maintainable.
- **Multilingual Support**:
    - The app supports multiple languages for a global user base, allowing users to view content in their preferred language.
- **Responsive UI**:
    - Built with **Tailwind CSS**, the app is fully responsive and adapts to all screen sizes.
- **High Performance**:
    - Optimized to handle API calls efficiently and provide real-time search results with minimal latency.



## Screenshots
![Image 1](public/assets/moviegpt1.png)
![Image 1](public/assets/netflix%20gpt%20movies.png)
![Image 1](public/assets/Screenshot%202025-07-28%20234247.png)

## Technologies

- **Frontend**:
    - **React.js**: For building a dynamic, responsive user interface.
    - **Tailwind CSS**: A utility-first CSS framework used to design beautiful and responsive UI components.
    - **Redux**: For managing global state, including user data, movie data, and search results.
    - **Custom React Hooks**: For encapsulating logic related to fetching movie data, trailers, and recommendations.
    - **React Router**: For handling page navigation and routing within the app.
- **Backend**:
    - **GPT API (OpenAI)**: Powers the AI-based movie recommendation feature by processing search queries and suggesting movies/series.
    - **TMDB API**: The Movie Database API, used to fetch movie details, images, trailers, and other data for displaying on the platform.
    - **Firebase**: For **authentication** (sign-up/sign-in) and **data storage** (user information).
- **Authentication**:
    - **Firebase Authentication**: For easy and secure user sign-in via **Google** or **email/password**.
- **Languages**:
    - Built-in **multilingual support** to cater to a wider audience.






## Performance Optimizations

- **Efficient API Calls**:
    - The app uses **debouncing** for the search functionality, reducing the number of API calls to the **GPT API** and **TMDB API**, improving performance and responsiveness.
- **Redux for Global State Management**:
    - **Redux** is used to manage and persist state across components, reducing unnecessary re-renders and improving performance when interacting with movie data.
- **Custom Hooks for Data Fetching**:
    - Custom hooks are created to manage data fetching for different types of movies and trailers, making the code more modular and efficient.
- **Responsive Design**:
    - The app is built using **Tailwind CSS**, ensuring a smooth, mobile-first design that adjusts perfectly to different screen sizes.



