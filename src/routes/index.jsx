import { createBrowserRouter } from "react-router-dom";

import Hero from "../pages/Hero/Hero.page";
import Blog from "../pages/Blog/Blog.page";
import About from "../pages/About/About.page";
import Contact from "../pages/Contact/Contact.page";
import ErrorPage from "../pages/ErrorPage/ErrorPage.page";
import Experience from "../pages/Experience/Experience.page";
import Navigation from "../components/Navigation/Navigation";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigation />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <Hero />,
            },
            {
                path: 'experience',
                element: <Experience />,
            },
            {
                path: 'blog',
                element: <Blog />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
        ]
    },
]);

export default router;
