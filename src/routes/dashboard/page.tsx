import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { useTheme } from "../../hooks/use-theme";

import { overviewData, registeredDevices } from "../../constants";

import { Footer } from "../../layouts/footer";

import { AlarmSmoke, RadioReceiver, PencilLine, MoveUp, MoveDown, PowerOff, AlertTriangle, Eye } from "lucide-react";

const DashboardPage = () => {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-bold dark:text-slate-100">Dashboard</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="card">
                    <div className="card-header">
                        <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <AlarmSmoke size={26} />
                        </div>
                        <p className="card-title">Active Devices</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">25,154</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-green-500 px-2 py-1 font-medium text-green-500 dark:border-green-600 dark:text-green-600">
                            <MoveUp size={18} />
                            95%
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <PowerOff size={26} />
                        </div>
                        <p className="card-title">Inactive Devices</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">570</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-red-500 px-2 py-1 font-medium text-red-500 dark:border-red-600 dark:text-red-600">
                            <MoveDown size={18} />
                            5%
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <AlertTriangle size={26} />
                        </div>
                        <p className="card-title">Fire Incidents Today</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">5</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-green-500 px-2 py-1 font-medium text-green-500 dark:border-green-600 dark:text-green-600">
                            <MoveUp size={18} />
                            15%
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <RadioReceiver size={26} />
                        </div>
                        <p className="card-title">Idle Devices</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">12,340</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-red-500 px-2 py-1 font-medium text-red-500 dark:border-red-600 dark:text-red-600">
                            <MoveUp size={18} />
                            19%
                        </span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <p className="card-title">Fire Incidents Overview</p>
                </div>
                <div className="card-body p-0">
                    <ResponsiveContainer
                        width="100%"
                        height={300}
                    >
                        <AreaChart
                            data={overviewData}
                            margin={{
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <defs>
                                <linearGradient
                                    id="colorTotal"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="5%"
                                        stopColor="#2563eb"
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="#2563eb"
                                        stopOpacity={0}
                                    />
                                </linearGradient>
                            </defs>
                            <Tooltip
                                cursor={false}
                                formatter={(value) => `${value} Incidents`}
                            />

                            <XAxis
                                dataKey="name"
                                strokeWidth={0}
                                stroke={theme === "light" ? "#475569" : "#94a3b8"}
                                tickMargin={6}
                            />
                            <YAxis
                                dataKey="total"
                                strokeWidth={0}
                                stroke={theme === "light" ? "#475569" : "#94a3b8"}
                                tickFormatter={(value) => `${value}`}
                                tickMargin={6}
                            />

                            <Area
                                type="monotone"
                                dataKey="total"
                                stroke="#2563eb"
                                fillOpacity={1}
                                fill="url(#colorTotal)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <p className="card-title">Recently Registered Devices</p>
                </div>
                <div className="card-body p-0">
                    <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
                        <table className="table">
                            <thead className="table-header">
                                <tr className="table-row">
                                    <th className="table-head">#</th>
                                    <th className="table-head">Device Code</th>
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
                                                <button className="text-blue-500 dark:text-blue-600">
                                                    <PencilLine size={20} />
                                                </button>
                                                <button className="text-green-500">
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

export default DashboardPage;
