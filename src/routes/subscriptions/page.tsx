import { useState } from "react";

const Subscriptions = () => {
    const [subscriptions, setSubscriptions] = useState([
        {
            id: 1,
            deviceCode: "AVF-123456",
            package: "Premium",
            status: "Active",
            periodRemaining: "3 months",
            renewalDate: "2025-06-15",
            exhaustionDate: "2025-09-15",
            subscribedOn: "2024-03-15",
            owner: "John Doe",
            emergencyContacts: ["+250 788 123 456"],
            location: "Kigali, Rwanda",
        },
        {
            id: 2,
            deviceCode: "AVF-654321",
            package: "Basic",
            status: "Expired",
            periodRemaining: "0 days",
            renewalDate: "2025-01-10",
            exhaustionDate: "2025-04-10",
            subscribedOn: "2024-01-10",
            owner: "Jane Doe",
            emergencyContacts: ["+250 789 987 654"],
            location: "Musanze, Rwanda",
        },
    ]);

    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Subscriptions</h1>
            <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
                            <th className="p-2 text-left text-sm">Device Code</th>
                            <th className="p-2 text-left text-sm">Package</th>
                            <th className="p-2 text-left text-sm">Status</th>
                            <th className="p-2 text-left text-sm">left Period</th>
                            <th className="p-2 text-left text-sm">Renewal Date</th>
                            <th className="p-2 text-left text-sm">Expiry Date</th>
                            <th className="p-2 text-left text-sm">Manager names</th>
                            <th className="p-2 text-left text-sm">Contacts</th>
                            <th className="p-2 text-left text-sm">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subscriptions.map((sub) => (
                            <tr
                                key={sub.id}
                                className="border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-300"
                            >
                                <td className="p-2 text-xs">{sub.deviceCode}</td>
                                <td className="p-2 text-xs">{sub.package}</td>
                                <td
                                    className={`p-2 font-semibold text-xs ${sub.status === "Active" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                                >
                                    {sub.status}
                                </td>
                                <td className="p-2 text-xs">{sub.periodRemaining}</td>
                                <td className="p-2 text-xs">{sub.renewalDate}</td>
                                <td className="p-2 text-xs">{sub.exhaustionDate}</td>
                                <td className="p-2 text-xs">{sub.owner}</td>
                                <td className="p-2 text-xs">{sub.emergencyContacts.join(", ")}</td>
                                <td className="p-2 text-xs">{sub.location}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Subscriptions;
