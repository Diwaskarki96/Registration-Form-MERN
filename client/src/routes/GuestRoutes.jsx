import App from "../App";
import GuestGuard from "../guard/GuestGuard";
import GuestLayout from "../layout/GuestLayout";

import Login from "../pages/Login";
import Registration from "../pages/Registration";

export const guestRoutes = [
  {
    path: "/",
    element: (
      <GuestGuard>
        <GuestLayout />
      </GuestGuard>
    ),
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Registration />,
      },
    ],
  },
];
