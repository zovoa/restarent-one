export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'cashier' | 'staff';
  avatar?: string;
  modules: string[];
  lastActive?: string;
}

export interface Module {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: 'active' | 'inactive' | 'pending';
  stats: {
    label: string;
    value: string | number;
    change: number;
  }[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  module?: string;
  createdAt: string;
  read: boolean;
}

export interface KPI {
  id: string;
  label: string;
  value: string | number;
  change: number;
  icon: string;
  color?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  module: string;
  createdAt: string;
  status?: 'pending' | 'completed' | 'failed';
}

export interface TableData {
  id: string;
  [key: string]: any;
}

export interface Reservation {
  id: string;
  customerName: string;
  date: string;
  time: string;
  partySize: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  notes?: string;
  phone?: string;
  email?: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  threshold: number;
  cost: number;
  supplier: string;
  lastUpdated: string;
}

export interface Order {
  id: string;
  customerName: string;
  items: {
    id: string;
    name: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  status: 'new' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  paymentStatus: 'paid' | 'pending' | 'failed';
  createdAt: string;
}

export interface FeedbackItem {
  id: string;
  customerName: string;
  rating: number;
  comment?: string;
  date: string;
  replied: boolean;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  department: string;
  status: 'active' | 'on-leave' | 'inactive';
  contact: string;
  joinDate: string;
}