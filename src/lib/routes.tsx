import App from "../App";
import Home from "../layouts/Home";
import Shop from "../layouts/Shop";
import UnexpectedError from "../layouts/UnexpectedError";

export default [
  {
    path: '/',
    element: <App />,
    errorElement: <UnexpectedError />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
    ],
  },
]
