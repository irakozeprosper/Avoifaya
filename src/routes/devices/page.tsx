import { Pencil, Eye } from "lucide-react";
import { registeredDevices } from "../../constants";
import { Footer } from "../../layouts/footer";

const Devices = () => {
    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-bold dark:text-slate-100">Registered Devices</h1>

            <div className="card">
                <div className="card-header">
                    <p className="card-title">Recently Added Devices</p>
                </div>
                <div className="card-body p-0">
                    <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
                        <table className="table">
                            <thead className="table-header">
                                <tr className="table-row">
                                    <th className="table-head">#</th>
                                    <th className="table-head">Device Code</th>
                                    <th className="table-head">User Name</th>
                                    <th className="table-head">Primary Contact</th>
                                    <th className="table-head">Location</th>
                                    <th className="table-head">State</th>
                                    <th className="table-head">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {registeredDevices.map((device, index) => (
                                    <tr
                                        key={device.id}
                                        className="table-row"
                                    >
                                        <td className="table-cell">{index + 1}</td>
                                        <td className="table-cell">{device.deviceCode}</td>
                                        <td className="table-cell"> - </td>
                                        <td className="table-cell">{device.primaryContact}</td>
                                        <td className="table-cell">{device.location}</td>
                                        <td className="table-cell">
                                            <span
                                                className={`px-2 py-1 rounded-lg text-sm ${device.state === "Active" ? "bg-green-500/20 text-green-600" : "bg-red-500/20 text-red-600"}`}
                                            >
                                                {device.state}
                                            </span>
                                        </td>
                                        <td className="table-cell">
                                            <div className="flex items-center gap-x-4">
                                                <button className="text-blue-500">
                                                    <Pencil size={20} />
                                                </button>
                                                <button className="text-green-700">
                                                    <Eye size={20} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Devices;
