
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./index.css";

import HomePage from "./pages/HomePage.tsx";
import Authentication from "./pages/AuthenticationPage.tsx";
import CategoryItemPage from "./pages/CategoryItemPage.tsx";
import PricingPage from "./pages/PricingPage.tsx";
import ShopingCartPage from "./pages/ShopingCartPage.tsx";
import AiGeneratorPage from "./pages/AiGeneratorPage.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Authentication />} />
      <Route path="/cart" element={<ShopingCartPage />} />
      <Route path="/plans" element={<PricingPage />} />
      <Route path="/image/:cat" element={<CategoryItemPage />} />
      <Route path="/aigen" element={<AiGeneratorPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
