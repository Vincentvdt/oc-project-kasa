import {createBrowserRouter} from "react-router-dom"
import App from "./App.tsx";
import Home from "./views/Home/Home.tsx";
import About from "./views/About/About.tsx";
import AccommodationDetail from "./views/AccommodationDetail/AccommodationDetail.tsx";
import Error404 from "./views/Error404/Error404.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'a-propos',
                element: <About/>
            },
            {
                path: 'logements/:id',
                element: <AccommodationDetail/>
            }
        ]
    }

])