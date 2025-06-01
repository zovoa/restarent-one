import { 
  Module, 
  KPI, 
  User, 
  Notification, 
  Activity,
  Reservation,
  InventoryItem,
  Order,
  FeedbackItem,
  StaffMember 
} from '../types';

export const mockModules: Module[] = [
  {
    id: 'reservations',
    name: 'Reservations',
    description: 'Manage table bookings and reservations',
    icon: 'calendar',
    status: 'active',
    stats: [
      { label: 'Today', value: 24, change: 12 },
      { label: 'Pending', value: 8, change: -3 },
      { label: 'Avg Size', value: '4.2', change: 0.5 }
    ]
  },
  {
    id: 'pos',
    name: 'POS',
    description: 'Point of Sale system for managing orders and payments',
    icon: 'shopping-cart',
    status: 'active',
    stats: [
      { label: 'Sales Today', value: '$1,482', change: 23 },
      { label: 'Orders', value: 36, change: 18 },
      { label: 'Avg Order', value: '$41', change: -2 }
    ]
  },
  {
    id: 'inventory',
    name: 'Inventory',
    description: 'Track and manage stock levels and suppliers',
    icon: 'package',
    status: 'active',
    stats: [
      { label: 'Items', value: 248, change: 0 },
      { label: 'Low Stock', value: 12, change: 5 },
      { label: 'Value', value: '$24,830', change: -2 }
    ]
  },
  {
    id: 'events',
    name: 'Events',
    description: 'Manage special events and functions',
    icon: 'calendar-days',
    status: 'active',
    stats: [
      { label: 'Upcoming', value: 4, change: 1 },
      { label: 'This Month', value: 6, change: 2 },
      { label: 'Revenue', value: '$8,200', change: 15 }
    ]
  },
  {
    id: 'feedback',
    name: 'Feedback',
    description: 'Collect and manage customer reviews and feedback',
    icon: 'message-square',
    status: 'active',
    stats: [
      { label: 'New', value: 8, change: 3 },
      { label: 'Rating', value: '4.6', change: 0.2 },
      { label: 'Response Rate', value: '92%', change: 5 }
    ]
  },
  {
    id: 'loyalty',
    name: 'Loyalty',
    description: 'Manage customer loyalty programs and rewards',
    icon: 'award',
    status: 'inactive',
    stats: [
      { label: 'Members', value: 412, change: 24 },
      { label: 'Points Issued', value: '12,480', change: 8 },
      { label: 'Redemptions', value: 36, change: 12 }
    ]
  },
  {
    id: 'staff',
    name: 'Staff',
    description: 'Manage employee schedules and performance',
    icon: 'users',
    status: 'active',
    stats: [
      { label: 'On Duty', value: 8, change: 0 },
      { label: 'Scheduled', value: 12, change: 2 },
      { label: 'Time Off', value: 2, change: 1 }
    ]
  },
  {
    id: 'reports',
    name: 'Reports',
    description: 'Generate and view business analytics and reports',
    icon: 'bar-chart',
    status: 'active',
    stats: [
      { label: 'Generated', value: 24, change: 10 },
      { label: 'Scheduled', value: 8, change: 0 },
      { label: 'Shared', value: 12, change: 6 }
    ]
  },
  {
    id: 'payments',
    name: 'Payments',
    description: 'Process and manage payments across all modules',
    icon: 'credit-card',
    status: 'active',
    stats: [
      { label: 'Today', value: '$2,854', change: 18 },
      { label: 'Pending', value: '$580', change: -12 },
      { label: 'Failed', value: '$120', change: 5 }
    ]
  },
  {
    id: 'communications',
    name: 'Communications',
    description: 'Manage customer and staff communications',
    icon: 'mail',
    status: 'pending',
    stats: [
      { label: 'Sent Today', value: 156, change: 42 },
      { label: 'Open Rate', value: '68%', change: 5 },
      { label: 'Templates', value: 24, change: 2 }
    ]
  }
];

export const mockKPIs: KPI[] = [
  {
    id: 'revenue',
    label: 'Total Revenue',
    value: '$8,492',
    change: 23.1,
    icon: 'dollar-sign',
    color: 'text-primary'
  },
  {
    id: 'orders',
    label: 'Total Orders',
    value: 142,
    change: 12.5,
    icon: 'shopping-bag',
    color: 'text-accent'
  },
  {
    id: 'reservations',
    label: 'Reservations',
    value: 38,
    change: 8.2,
    icon: 'calendar',
    color: 'text-secondary'
  },
  {
    id: 'feedback',
    label: 'Feedback Score',
    value: '4.8',
    change: 0.3,
    icon: 'star',
    color: 'text-warning'
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    role: 'admin',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    modules: ['reservations', 'pos', 'inventory', 'events', 'feedback', 'loyalty', 'staff', 'reports', 'payments', 'communications'],
    lastActive: '2023-06-15T14:30:00Z'
  },
  {
    id: '2',
    name: 'Sarah Williams',
    email: 'sarah@example.com',
    role: 'manager',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    modules: ['reservations', 'pos', 'inventory', 'events', 'feedback', 'staff'],
    lastActive: '2023-06-15T12:15:00Z'
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'michael@example.com',
    role: 'cashier',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    modules: ['pos', 'inventory'],
    lastActive: '2023-06-15T09:45:00Z'
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily@example.com',
    role: 'staff',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    modules: ['reservations', 'events'],
    lastActive: '2023-06-14T16:20:00Z'
  }
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Low Stock Alert',
    message: '12 items are below minimum stock levels',
    type: 'warning',
    module: 'inventory',
    createdAt: '2023-06-15T14:30:00Z',
    read: false
  },
  {
    id: '2',
    title: 'New Reservation',
    message: 'New table reservation for Johnson party of 6',
    type: 'info',
    module: 'reservations',
    createdAt: '2023-06-15T13:15:00Z',
    read: false
  },
  {
    id: '3',
    title: 'Payment Failed',
    message: 'Payment for order #1234 failed to process',
    type: 'error',
    module: 'payments',
    createdAt: '2023-06-15T12:45:00Z',
    read: true
  },
  {
    id: '4',
    title: 'Staff Schedule Updated',
    message: 'The staff schedule for next week has been updated',
    type: 'info',
    module: 'staff',
    createdAt: '2023-06-15T11:30:00Z',
    read: true
  },
  {
    id: '5',
    title: 'New Feedback',
    message: 'New 5-star review from customer David Miller',
    type: 'success',
    module: 'feedback',
    createdAt: '2023-06-15T10:15:00Z',
    read: true
  }
];

export const mockActivities: Activity[] = [
  {
    id: '1',
    title: 'New Order',
    description: 'Order #5892 received for $86.50',
    module: 'pos',
    createdAt: '2023-06-15T14:32:00Z',
    status: 'completed'
  },
  {
    id: '2',
    title: 'Reservation Confirmed',
    description: 'Table for 4 confirmed for Smith family at 7:30 PM',
    module: 'reservations',
    createdAt: '2023-06-15T14:25:00Z',
    status: 'completed'
  },
  {
    id: '3',
    title: 'Inventory Updated',
    description: 'Stock levels updated for 15 items',
    module: 'inventory',
    createdAt: '2023-06-15T14:10:00Z',
    status: 'completed'
  },
  {
    id: '4',
    title: 'Payment Received',
    description: 'Payment of $152.80 received for order #5891',
    module: 'payments',
    createdAt: '2023-06-15T13:55:00Z',
    status: 'completed'
  },
  {
    id: '5',
    title: 'Staff Check-in',
    description: 'Emily Davis checked in for evening shift',
    module: 'staff',
    createdAt: '2023-06-15T13:45:00Z',
    status: 'completed'
  }
];

export const mockReservations: Reservation[] = [
  {
    id: '1',
    customerName: 'John Smith',
    date: '2023-06-15',
    time: '19:00',
    partySize: 4,
    status: 'confirmed',
    phone: '555-123-4567',
    email: 'john@example.com'
  },
  {
    id: '2',
    customerName: 'Emily Johnson',
    date: '2023-06-15',
    time: '20:30',
    partySize: 2,
    status: 'confirmed',
    phone: '555-234-5678',
    email: 'emily@example.com',
    notes: 'Anniversary dinner'
  },
  {
    id: '3',
    customerName: 'Michael Williams',
    date: '2023-06-16',
    time: '18:00',
    partySize: 6,
    status: 'pending',
    phone: '555-345-6789',
    email: 'michael@example.com'
  },
  {
    id: '4',
    customerName: 'Sarah Brown',
    date: '2023-06-16',
    time: '19:30',
    partySize: 3,
    status: 'confirmed',
    phone: '555-456-7890',
    email: 'sarah@example.com'
  },
  {
    id: '5',
    customerName: 'David Miller',
    date: '2023-06-16',
    time: '20:00',
    partySize: 5,
    status: 'cancelled',
    phone: '555-567-8901',
    email: 'david@example.com',
    notes: 'Cancelled due to illness'
  }
];

export const mockInventoryItems: InventoryItem[] = [
  {
    id: '1',
    name: 'Chicken Breast',
    category: 'Meat',
    quantity: 15,
    unit: 'kg',
    threshold: 10,
    cost: 8.50,
    supplier: 'Quality Foods',
    lastUpdated: '2023-06-14T09:30:00Z'
  },
  {
    id: '2',
    name: 'Tomatoes',
    category: 'Produce',
    quantity: 8,
    unit: 'kg',
    threshold: 5,
    cost: 3.25,
    supplier: 'Fresh Farm',
    lastUpdated: '2023-06-14T09:45:00Z'
  },
  {
    id: '3',
    name: 'Olive Oil',
    category: 'Pantry',
    quantity: 12,
    unit: 'bottles',
    threshold: 5,
    cost: 12.75,
    supplier: 'Gourmet Supplies',
    lastUpdated: '2023-06-14T10:00:00Z'
  },
  {
    id: '4',
    name: 'Red Wine',
    category: 'Alcohol',
    quantity: 24,
    unit: 'bottles',
    threshold: 10,
    cost: 18.50,
    supplier: 'Wine Wholesalers',
    lastUpdated: '2023-06-14T10:15:00Z'
  },
  {
    id: '5',
    name: 'Flour',
    category: 'Baking',
    quantity: 18,
    unit: 'kg',
    threshold: 15,
    cost: 2.25,
    supplier: 'Bakers Supply',
    lastUpdated: '2023-06-14T10:30:00Z'
  }
];

export const mockOrders: Order[] = [
  {
    id: '1',
    customerName: 'Table 4',
    items: [
      { id: '1', name: 'Grilled Chicken Salad', quantity: 2, price: 14.50 },
      { id: '2', name: 'Spaghetti Carbonara', quantity: 1, price: 16.75 },
      { id: '3', name: 'Garlic Bread', quantity: 1, price: 5.25 }
    ],
    total: 51.00,
    status: 'delivered',
    paymentStatus: 'paid',
    createdAt: '2023-06-15T12:30:00Z'
  },
  {
    id: '2',
    customerName: 'Table 7',
    items: [
      { id: '4', name: 'Margherita Pizza', quantity: 1, price: 13.50 },
      { id: '5', name: 'Caesar Salad', quantity: 1, price: 10.25 },
      { id: '6', name: 'Tiramisu', quantity: 2, price: 8.75 }
    ],
    total: 41.25,
    status: 'preparing',
    paymentStatus: 'pending',
    createdAt: '2023-06-15T13:15:00Z'
  },
  {
    id: '3',
    customerName: 'Take Out',
    items: [
      { id: '7', name: 'Beef Burger', quantity: 2, price: 15.50 },
      { id: '8', name: 'French Fries', quantity: 2, price: 5.25 },
      { id: '9', name: 'Soft Drink', quantity: 2, price: 3.25 }
    ],
    total: 47.50,
    status: 'ready',
    paymentStatus: 'paid',
    createdAt: '2023-06-15T13:45:00Z'
  }
];

export const mockFeedback: FeedbackItem[] = [
  {
    id: '1',
    customerName: 'John Smith',
    rating: 5,
    comment: 'Great food and excellent service! Will definitely come back.',
    date: '2023-06-15T11:30:00Z',
    replied: true
  },
  {
    id: '2',
    customerName: 'Sarah Johnson',
    rating: 4,
    comment: 'Food was delicious but service was a bit slow.',
    date: '2023-06-15T10:15:00Z',
    replied: false
  },
  {
    id: '3',
    customerName: 'Michael Brown',
    rating: 5,
    comment: 'Perfect evening, everything was amazing!',
    date: '2023-06-14T19:45:00Z',
    replied: true
  },
  {
    id: '4',
    customerName: 'Emily Davis',
    rating: 3,
    comment: 'Food was good but the ambiance was too noisy.',
    date: '2023-06-14T18:30:00Z',
    replied: true
  }
];

export const mockStaff: StaffMember[] = [
  {
    id: '1',
    name: 'Robert Wilson',
    role: 'Chef',
    department: 'Kitchen',
    status: 'active',
    contact: 'robert@example.com',
    joinDate: '2022-01-15'
  },
  {
    id: '2',
    name: 'Maria Garcia',
    role: 'Server',
    department: 'Front of House',
    status: 'active',
    contact: 'maria@example.com',
    joinDate: '2022-02-20'
  },
  {
    id: '3',
    name: 'James Taylor',
    role: 'Bartender',
    department: 'Bar',
    status: 'active',
    contact: 'james@example.com',
    joinDate: '2022-03-10'
  },
  {
    id: '4',
    name: 'Jennifer Lee',
    role: 'Host',
    department: 'Front of House',
    status: 'on-leave',
    contact: 'jennifer@example.com',
    joinDate: '2022-04-05'
  }
];