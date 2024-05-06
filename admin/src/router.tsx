import { createBrowserRouter } from "react-router-dom";
import ScrollToTop from "./shared/ScrollToTop";
import AppLayout from "./shared/AppLayout";
import { HOME_PATH, LOGIN_URL, USER_PATH, AD_PRODUCT_PATH, 
  AD_EMP_PATH, AD_INVOICE_PATH, SEARCH_PRODUCT, PRODUCT_REPORT, AD_INVOICE_SEARCH } from "./urls";
import Login from "./shared/Login";
import ProtectedComponent from "./shared/ProtectComponent";
import Home from "./pages/Home";
import User from "./pages/User";
import Product from "./pages/Product";
import Product_Statistics from "./pages/Product_Statistics";
import Employee from "./pages/Employee";
import Invoice from "./pages/Invoice";
import Product_Search from "./pages/Product_Search";
import Invoice_Search from "./pages/InvoiceSearch";
import { ErrorBoundaryPage } from "./shared/ErrorBoundary";

const routers = createBrowserRouter([
  {
    path: "",
    element: (
      <>
        {" "}
        <ScrollToTop />
        <AppLayout />
      </>
    ),
    errorElement: (
      <AppLayout>
        <ErrorBoundaryPage />
      </AppLayout>
    ),
    children: [
      {
        path: HOME_PATH,
        element: (
          <ProtectedComponent>
            <Home />
          </ProtectedComponent>
          // <Home></Home>
        ),
      },
      {
        path: USER_PATH,
        element: (
          <ProtectedComponent>
            <User />
          </ProtectedComponent>
        ),
      },
      {
        path: AD_PRODUCT_PATH,
        element: (
          <ProtectedComponent>
            <Product />
          </ProtectedComponent>
        ),
      },
      {
        path: AD_EMP_PATH,
        element: (
          <ProtectedComponent>
            <Employee />
          </ProtectedComponent>
        ),
      },
      {
        path: AD_INVOICE_PATH,
        element: (
          <ProtectedComponent>
            <Invoice />
          </ProtectedComponent>
        ),
      },
      {
        path: SEARCH_PRODUCT,
        element: (
          <ProtectedComponent>
            <Product_Search />
          </ProtectedComponent>
        ),
      },

      {
        path: PRODUCT_REPORT,
        element: (
          <ProtectedComponent>
            <Product_Statistics />
          </ProtectedComponent>
        ),
      },

      {
        path: AD_INVOICE_SEARCH,
        element: (
          <ProtectedComponent>
            <Invoice_Search />
          </ProtectedComponent>
        ),
      },
      
    ],
  },
  {
    path: LOGIN_URL,
    element: <Login />,
  },
]);

export default routers;
