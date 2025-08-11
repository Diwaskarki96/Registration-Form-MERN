import AuthGuard from "../guard/AuthGuard";
import MainLayout from "../layout/MainLayout";


import HomePage from "../pages/Home";
import Test from "../pages/Test";


export const mainRoutes = [
  {
    path: "/",
    element: (
      <AuthGuard>
        <MainLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "test",
        element: <Test />,
      
      },
      // {
      //   path: "movie-detail/:id",
      //   element: <MovieDetail />,
      // },

      // {
      //   path: "profile/:id",
      //   element: <ProfilePage />,
      // },

      // {
      //   path: "about-me",
      //   element: <AboutMePage />,
      // },
    ],
  },
];
