import { createBrowserRouter, Link } from "react-router-dom";
import RootLayout from "../modules/common/layout/RootLayout";
import ProductListing from "../modules/product/pages/ProductListing";
import Dashboard from "../modules/dashboard/pages/dashboard";
import ProductDetail from "../modules/product/pages/ProductDetail";
import ProductAdd from "../modules/product/pages/ProductAdd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "/products",
        element: <ProductListing />,
      },
      {
        path:"/products/:productId",
        element: <ProductDetail/>
      },
      {
        path:"/products/new",
        element: <ProductAdd/>
      }
    ],
  },
]);
export default router;
