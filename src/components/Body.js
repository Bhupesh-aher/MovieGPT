import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import About from "./About";




const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path: "/browse",
            element: <Browse/>
        },
        {
        path: "/about", // ⬅️ New route
        element: <About />,
        },
        
    ])

    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}


export default Body;