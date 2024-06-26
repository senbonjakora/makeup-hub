import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/ProductsPage";
import ProductsCartPage from "./pages/ProductsCartPage";
import FavoriteProductsPage from "./pages/FavoriteProductsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetailsPage />,
        errorElement: <ErrorPage />,
      },

      {
        path: "/productsCart",
        element: <ProductsCartPage />,
      },

      {
        path: "/favoriteProducts",
        element: <FavoriteProductsPage />,
      },
    ],
  },
]);

export default routes;
