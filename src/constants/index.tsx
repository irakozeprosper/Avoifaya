import { ChartColumn, Home, MapPinned, PackagePlus, Settings, UserCheck, AlarmSmoke, Users, UserPlus } from "lucide-react";

import ProfileImage from "../assets/avoifaya.png";
import ProductImage from "../assets/avoifaya.png";

export const navbarLinks = [
    {
        title: "Dashboard",
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "/",
            },
            {
                label: "Analytics",
                icon: ChartColumn,
                path: "/analytics",
            },
        ],
    },
    {
        title: "Device Management",
        links: [
            {
                label: "Devices",
                icon: AlarmSmoke,
                path: "/devices",
            },
            {
                label: "New device",
                icon: PackagePlus,
                path: "/new-device",
            },
            {
                label: "Subscriptions",
                icon: UserCheck,
                path: "/subscriptions",
            },
            {
                label: "Device mapping",
                icon: MapPinned,
                path: "/device-mapping",
            },
        ],
    },
    {
        title: "Users",
        links: [
            {
                label: "All users",
                icon: Users,
                path: "/users",
            },
            {
                label: "New user",
                icon: UserPlus,
                path: "/new-user",
            },
        ],
    },
    {
        title: "Settings",
        links: [
            {
                label: "Settings",
                icon: Settings,
                path: "/settings",
            },
        ],
    },
];

export const overviewData = [
    {
        name: "Jan",
        total: 150,
    },
    {
        name: "Feb",
        total: 164,
    },
    {
        name: "Mar",
        total: 100,
    },
    {
        name: "Apr",
        total: 50,
    },
    {
        name: "May",
        total: 187,
    },
    {
        name: "Jun",
        total: 59,
    },
    {
        name: "Jul",
        total: 120,
    },
    {
        name: "Aug",
        total: 55,
    },
    {
        name: "Sep",
        total: 112,
    },
    {
        name: "Oct",
        total: 40,
    },
    {
        name: "Nov",
        total: 89,
    },
    {
        name: "Dec",
        total: 23,
    },
];

export const recentSalesData = [
    {
        id: 1,
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        image: ProfileImage,
        total: 1500,
    },
    {
        id: 2,
        name: "James Smith",
        email: "james.smith@email.com",
        image: ProfileImage,
        total: 2000,
    },
    {
        id: 3,
        name: "Sophia Brown",
        email: "sophia.brown@email.com",
        image: ProfileImage,
        total: 4000,
    },
    {
        id: 4,
        name: "Noah Wilson",
        email: "noah.wilson@email.com",
        image: ProfileImage,
        total: 3000,
    },
    {
        id: 5,
        name: "Emma Jones",
        email: "emma.jones@email.com",
        image: ProfileImage,
        total: 2500,
    },
    {
        id: 6,
        name: "William Taylor",
        email: "william.taylor@email.com",
        image: ProfileImage,
        total: 4500,
    },
    {
        id: 7,
        name: "Isabella Johnson",
        email: "isabella.johnson@email.com",
        image: ProfileImage,
        total: 5300,
    },
];

export const topProducts = [
    {
        number: 1,
        name: "Wireless Headphones",
        image: ProductImage,
        description: "High-quality noise-canceling wireless headphones.",
        price: 99.99,
        status: "In Stock",
        rating: 4.5,
    },
    {
        number: 2,
        name: "Smartphone",
        image: ProductImage,
        description: "Latest 5G smartphone with excellent camera features.",
        price: 799.99,
        status: "In Stock",
        rating: 4.7,
    },
    {
        number: 3,
        name: "Gaming Laptop",
        image: ProductImage,
        description: "Powerful gaming laptop with high-end graphics.",
        price: 1299.99,
        status: "In Stock",
        rating: 4.8,
    },
    {
        number: 4,
        name: "Smartwatch",
        image: ProductImage,
        description: "Stylish smartwatch with fitness tracking features.",
        price: 199.99,
        status: "Out of Stock",
        rating: 4.4,
    },
    {
        number: 5,
        name: "Bluetooth Speaker",
        image: ProductImage,
        description: "Portable Bluetooth speaker with deep bass sound.",
        price: 59.99,
        status: "In Stock",
        rating: 4.3,
    },
    {
        number: 6,
        name: "4K Monitor",
        image: ProductImage,
        description: "Ultra HD 4K monitor with stunning color accuracy.",
        price: 399.99,
        status: "In Stock",
        rating: 4.6,
    },
    {
        number: 7,
        name: "Mechanical Keyboard",
        image: ProductImage,
        description: "Mechanical keyboard with customizable RGB lighting.",
        price: 89.99,
        status: "In Stock",
        rating: 4.7,
    },
    {
        number: 8,
        name: "Wireless Mouse",
        image: ProductImage,
        description: "Ergonomic wireless mouse with precision tracking.",
        price: 49.99,
        status: "In Stock",
        rating: 4.5,
    },
    {
        number: 9,
        name: "Action Camera",
        image: ProductImage,
        description: "Waterproof action camera with 4K video recording.",
        price: 249.99,
        status: "In Stock",
        rating: 4.8,
    },
    {
        number: 10,
        name: "External Hard Drive",
        image: ProductImage,
        description: "Portable 2TB external hard drive for data storage.",
        price: 79.99,
        status: "Out of Stock",
        rating: 4.5,
    },
];

export const fireIncidentData = [
    { id: 1, location: "Kigali - Nyamirambo", severity: "High", status: "Resolved", date: "2025-03-20", responseTime: "5 min" },
    { id: 2, location: "Musanze - Ruhengeri", severity: "Medium", status: "Ongoing", date: "2025-03-21", responseTime: "10 min" },
    { id: 3, location: "Rubavu - Gisenyi", severity: "Low", status: "Pending", date: "2025-03-22", responseTime: "15 min" },
    { id: 4, location: "Huye - Butare", severity: "High", status: "Resolved", date: "2025-03-23", responseTime: "6 min" },
];

export const deviceStatusData = [
    { id: "AV001", location: "Kigali - Kicukiro", state: "Active", lastUpdated: "2025-03-24 14:00", time: "1:50 AM" },
    { id: "AV002", location: "Musanze - Kinigi", state: "Offline", lastUpdated: "2025-03-24 13:45", time: "14:30 PM" },
    { id: "AV003", location: "Rubavu - Gisenyi", state: "Faulty", lastUpdated: "2025-03-24 13:30", time: "08:12 AM" },
    { id: "AV004", location: "Huye - Butare", state: "Active", lastUpdated: "2025-03-24 14:15", time: "6:27 PM" },
];

export const responseTimeData = [
    { month: "January", avgResponseTime: 8 },
    { month: "February", avgResponseTime: 7 },
    { month: "March", avgResponseTime: 6 },
    { month: "April", avgResponseTime: 9 },
    { month: "May", avgResponseTime: 5 },
];

export const registeredDevices = [
    {
        id: "AVF001",
        deviceCode: "AVF-2025-001",
        primaryContact: "+250788123456",
        location: "Kigali, Gasabo",
        state: "Active",
    },
    {
        id: "AVF002",
        deviceCode: "AVF-2025-002",
        primaryContact: "+250784567890",
        location: "Rubavu, Gisenyi",
        state: "Inactive",
    },
    {
        id: "AVF003",
        deviceCode: "AVF-2025-003",
        primaryContact: "+250789654321",
        location: "Musanze, Nyakinama",
        state: "Active",
    },
    {
        id: "AVF004",
        deviceCode: "AVF-2025-004",
        primaryContact: "+250783112233",
        location: "Huye, Tumba",
        state: "Active",
    },
    {
        id: "AVF005",
        deviceCode: "AVF-2025-005",
        primaryContact: "+250782334455",
        location: "Rusizi, Kamembe",
        state: "Inactive",
    },
];
