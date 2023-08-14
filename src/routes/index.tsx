import { Outlet, createBrowserRouter } from "react-router-dom";
import Signin from "../pages/signin";
import AccountLayout from "../layout/account";
import Signup from "../pages/signup";
import Logout from "../pages/logout";
import LiveMatch from "../pages/matches";
import NewsDetails from "../pages/News/NewsDetails";
import NewsContainer from "../pages/News";
import Preferances from "../layout/account/Preferances";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AccountLayout />,
    children: [
      { index: true, element: [<LiveMatch />, <NewsContainer />] },
      {
        path: "/articles/:articleID",
        element: <NewsDetails />,
      },
      {
        path: "/preferances",
        element: <Preferances />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);

export default router;
