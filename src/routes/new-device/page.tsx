import { useState } from "react";
import { Plus, Save, X } from "lucide-react";

const NewDevice = () => {
    const [deviceCode, setDeviceCode] = useState(`AVF-${Date.now()}`);
    const [contacts, setContacts] = useState([""]);
    const [managers, setManagers] = useState([""]);
    const [location, setLocation] = useState({ country: "", city: "", district: "", sector: "", street: "" });

    const handleAddField = (setState: React.Dispatch<React.SetStateAction<string[]>>, state: string[]) => {
        setState([...state, ""]);
    };

    const handleRemoveField = (index: number, setState: React.Dispatch<React.SetStateAction<string[]>>, state: string[]) => {
        if (state.length > 1) {
            const newState = state.filter((_, i) => i !== index);
            setState(newState);
        }
    };

    const handleInputChange = (index: number, value: string, setState: React.Dispatch<React.SetStateAction<string[]>>, state: string[]) => {
        const newState = [...state];
        newState[index] = value;
        setState(newState);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newDevice = { deviceCode, contacts, managers, location };
        console.log("Device Registered:", newDevice);
    };

    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Register a New Device</h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">Device Code</label>
                    <input
                        type="text"
                        value={deviceCode}
                        disabled
                        className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">Primary Emergency Contacts</label>
                    {contacts.map((contact, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 mt-2"
                        >
                            <input
                                type="text"
                                value={contact}
                                onChange={(e) => handleInputChange(index, e.target.value, setContacts, contacts)}
                                className="w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                placeholder="Enter emergency contact"
                            />
                            {index > 0 && (
                                <button
                                    type="button"
                                    onClick={() => handleRemoveField(index, setContacts, contacts)}
                                    className="text-red-500 dark:text-red-400"
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => handleAddField(setContacts, contacts)}
                        className="flex items-center gap-2 mt-2 text-blue-500 dark:text-blue-400"
                    >
                        <Plus size={16} /> Add Contact
                    </button>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">Users Managing Device</label>
                    {managers.map((manager, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 mt-2"
                        >
                            <input
                                type="text"
                                value={manager}
                                onChange={(e) => handleInputChange(index, e.target.value, setManagers, managers)}
                                className="w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                placeholder="Enter manager name"
                            />
                            {index > 0 && (
                                <button
                                    type="button"
                                    onClick={() => handleRemoveField(index, setManagers, managers)}
                                    className="text-red-500 dark:text-red-400"
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => handleAddField(setManagers, managers)}
                        className="flex items-center gap-2 mt-2 text-blue-500 dark:text-blue-400"
                    >
                        <Plus size={16} /> Add Manager
                    </button>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">Device Location</label>
                    <input
                        type="text"
                        placeholder="Country"
                        className="w-full p-2 mt-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        onChange={(e) => setLocation({ ...location, country: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="City"
                        className="w-full p-2 mt-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        onChange={(e) => setLocation({ ...location, city: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="District"
                        className="w-full p-2 mt-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        onChange={(e) => setLocation({ ...location, district: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Sector"
                        className="w-full p-2 mt-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        onChange={(e) => setLocation({ ...location, sector: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Street Number"
                        className="w-full p-2 mt-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        onChange={(e) => setLocation({ ...location, street: e.target.value })}
                    />
                </div>

                <div className="md:col-span-2 flex justify-center">
                    <button
                        type="submit"
                        className="flex items-center gap-2 px-4 py-2 text-white bg-green-600 dark:bg-green-700 rounded-md hover:bg-green-700 dark:hover:bg-green-800"
                    >
                        <Save size={18} /> Register Device
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewDevice;
