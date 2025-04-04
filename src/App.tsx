import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme-context";
import { AuthProvider } from "./contexts/authContext";
import ProtectedRoute from "./components/protectedRoute";

// Public Pages
import Login from "./routes/login/page";
import ForgotPassword from "./routes/forgot-password/page";
import PageNotFound from "./routes/page-not-found/page";

// Protected Pages
import Layout from "./routes/layout";
import DashboardPage from "./routes/dashboard/page";
import Devices from "./routes/devices/page";
import NewDevice from "./routes/new-device/page";
import Subscriptions from "./routes/subscriptions/page";
import Mapping from "./routes/device-mapping/page";
import Users from "./routes/users/page";

// Optional Components for placeholder pages
const Analytics = () => <h1 className="title">Analytics</h1>;
const NewUser = () => <h1 className="title">New User</h1>;
const Settings = () => <h1 className="title">Settings</h1>;

function App() {
    return (
        <ThemeProvider storageKey="theme">
            <AuthProvider>
                <Router>
                    <Routes>
                        {/* Public Routes */}
                        <Route
                            path="/login"
                            element={<Login />}
                        />
                        <Route
                            path="/forgot-password"
                            element={<ForgotPassword />}
                        />

                        {/* Protected Routes */}
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute>
                                    <Layout />
                                </ProtectedRoute>
                            }
                        >
                            <Route
                                index
                                element={<DashboardPage />}
                            />
                            <Route
                                path="analytics"
                                element={<Analytics />}
                            />
                            <Route
                                path="devices"
                                element={<Devices />}
                            />
                            <Route
                                path="new-device"
                                element={<NewDevice />}
                            />
                            <Route
                                path="subscriptions"
                                element={<Subscriptions />}
                            />
                            <Route
                                path="device-mapping"
                                element={<Mapping />}
                            />
                            <Route
                                path="users"
                                element={<Users />}
                            />
                            <Route
                                path="new-user"
                                element={<NewUser />}
                            />
                            <Route
                                path="settings"
                                element={<Settings />}
                            />
                        </Route>

                        {/* 404 Fallback */}
                        <Route
                            path="*"
                            element={<PageNotFound />}
                        />
                    </Routes>
                </Router>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
