import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme-context";
import Layout from "./routes/layout";
import DashboardPage from "./routes/dashboard/page";
import Devices from "./routes/devices/page";
import NewDevice from "./routes/new-device/page";
import Subscriptions from "./routes/subscriptions/page";
import Mapping from "./routes/device-mapping/page";
import Users from "./routes/users/page";
import Login from "./routes/login/page";
import PageNotFound from "./routes/page-not-found/page";
import ForgotPassword from "./routes/forgot-password/page";
function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />,
                },
                {
                    path: "analytics",
                    element: <h1 className="title">Analytics</h1>,
                },
                {
                    path: "devices",
                    element: <Devices />,
                },
                {
                    path: "new-device",
                    element: <NewDevice />,
                },
                {
                    path: "subscriptions",
                    element: <Subscriptions />,
                },
                {
                    path: "device-mapping",
                    element: <Mapping />,
                },
                {
                    path: "users",
                    element: <Users />,
                },
                {
                    path: "new-user",
                    element: <h1 className="title">New User</h1>,
                },
                {
                    path: "settings",
                    element: <h1 className="title">Settings</h1>,
                },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "*",
            element: <PageNotFound />,
        },
        {
            path: "/forgot-password",
            element: <ForgotPassword />,
        },
    ]);
    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
