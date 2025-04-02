import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        console.log({ email, password, remember });
    };

    return (
        <div className={`${darkMode ? "dark" : ""}`}>
            <div className="flex min-h-screen w-full flex-wrap items-stretch bg-white dark:bg-gray-800 max-md:pb-20 max-md:pt-20">
                <div className="grow md:flex md:w-1/2 md:flex-col md:items-center md:justify-center md:py-10">
                    <div className="w-full px-4 text-center text-xs lg:w-1/2">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="mb-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                        >
                            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                        </button>
                        <h1 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">Welcome Back</h1>
                        <p className="mb-6 text-gray-600 dark:text-gray-400">Access your account to explore our amazing features.</p>
                        <form
                            className="flex flex-col gap-6"
                            onSubmit={handleSubmit}
                        >
                            <div className="relative">
                                <label className="flex items-center gap-2 text-xs font-medium text-gray-700 dark:text-gray-200 mb-3">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="block w-full px-4 py-3 border border-gray-300 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white dark:border-gray-600 placeholder-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-500"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <label className="flex items-center gap-2 text-xs font-medium text-gray-700 dark:text-gray-200 mb-3">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Your password"
                                        className="block w-full px-4 py-3 border border-gray-300 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white dark:border-gray-600 placeholder-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-500"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2"
                                    >
                                        {showPassword ? "🙈" : "👁"}
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between gap-2 my-2">
                                <label className="flex items-center gap-2 text-xs font-medium text-gray-700 dark:text-gray-200">
                                    <input
                                        type="checkbox"
                                        checked={remember}
                                        onChange={() => setRemember(!remember)}
                                    />
                                    Remember me
                                </label>
                                <a
                                    className="text-indigo-600 dark:text-indigo-400"
                                    href="/forgot-password"
                                >
                                    Forgot Password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                className="px-5 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-500"
                            >
                                Sign in
                            </button>
                        </form>

                        <div className="text-gray-600 dark:text-gray-400 mt-4">
                            By proceeding, you acknowledge and accept our
                            <a
                                className="font-medium text-indigo-600 underline"
                                href="/terms"
                            >
                                {" "}
                                Terms and Conditions
                            </a>
                            and
                            <a
                                className="font-medium text-indigo-600 underline"
                                href="/privacy-policy"
                            >
                                {" "}
                                Privacy Policy
                            </a>
                            .
                        </div>
                    </div>
                </div>

                <div
                    className="hidden md:flex md:w-1/2 flex-col justify-center bg-cover bg-center"
                    style={{
                        backgroundImage: "url(https://img.freepik.com/free-vector/gray-neural-network-illustration_53876-78764.jpg?size=626&ext=jpg)",
                    }}
                >
                    <img
                        className="translate-x-[27%] rounded-[36px] shadow-lg"
                        src="https://images.unsplash.com/photo-1566241477600-ac026ad43874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxzY3JlZW5zaG90fGVufDB8MHx8fDE3Mjk1MTI1OTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="Service Dashboard Mockup"
                    />
                </div>
            </div>
        </div>
    );
}
