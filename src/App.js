import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home'
import User from './components/User';


import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';


const App = () =>  (
    <div class="app">
        <Navbar></Navbar>
        <Outlet/>
        <Footer></Footer>
    </div>
)


const appRouter=createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        // errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/User",
                element: <User/> 
             },
            //  {
            //     path: "/contact",
            //     element: <Contact/>
            //  },
            //  {
            //     path: "/restaurant/:resId",
            //     element: <RestaurantMenu/>
            //  },

            // {
            //     path: "/instamart",
            //     element:( 
            //     <Suspense fallback={<Shimmer/>}>
            //         <Instamart/>
            //     </Suspense>),
            // },

        ]
    },

]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);