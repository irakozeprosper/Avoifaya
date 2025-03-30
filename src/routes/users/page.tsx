import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    // Sample user data
    const [users] = useState([
        {
            id: 1,
            username: "johndoe",
            name: "John Doe",
            devices: 5,
            contact: "+250 788 123 456",
            email: "johndoe@example.com",
            userType: "Admin",
            createdOn: "2024-01-15",
        },
        {
            id: 2,
            username: "janedoe",
            name: "Jane Doe",
            devices: 3,
            contact: "+250 722 456 789",
            email: "janedoe@example.com",
            userType: "User",
            createdOn: "2024-02-20",
        },
        {
            id: 3,
            username: "alexsmith",
            name: "Alex Smith",
            devices: 8,
            contact: "+250 789 987 654",
            email: "alexsmith@example.com",
            userType: "Manager",
            createdOn: "2024-03-10",
        },
    ]);

    // Filter users based on search input
    const filteredUsers = users.filter(
        (user) =>
            user.username.toLowerCase().includes(search.toLowerCase()) ||
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.devices.toString().includes(search),
    );

    return (
        <div className="flex flex-col gap-y-4">
            {/* Title & Search Bar */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold dark:text-slate-100">Users</h1>
                <input
                    type="text"
                    placeholder="Search by name, username, or devices"
                    className="p-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* User Table */}
            <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200 dark:bg-gray-700 text-left dark:text-slate-100">
                            <th className="p-2">Username</th>
                            <th className="p-2">Name</th>
                            <th className="p-2">Devices Managed</th>
                            <th className="p-2">Contact</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">User Type</th>
                            <th className="p-2">Created On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr
                                key={user.id}
                                className="border-b hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer dark:text-slate-50"
                                onClick={() => navigate(`/users/${user.id}`)}
                            >
                                <td className="p-2">{user.username}</td>
                                <td className="p-2">{user.name}</td>
                                <td className="p-2">{user.devices}</td>
                                <td className="p-2">{user.contact}</td>
                                <td className="p-2">{user.email}</td>
                                <td className="p-2">{user.userType}</td>
                                <td className="p-2">{user.createdOn}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
