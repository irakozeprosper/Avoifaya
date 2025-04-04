import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import { useAuth } from "../contexts/authContext"; // assumes you have this context

const useLogin = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { login } = useAuth(); // from auth-context
    const navigate = useNavigate(); // useNavigate hook to redirect

    const handleLogin = async (email: string, password: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch("http://localhost:4000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                login(data.token); // stores token in context/localStorage
                navigate("/"); // Redirect to the dashboard after successful login
            } else {
                setError(data.error || "Invalid email or password");
            }
        } catch (err) {
            setError("Login failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return { handleLogin, loading, error };
};

export default useLogin;
