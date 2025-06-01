import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Menu, 
  X,
  Calendar,
  ShoppingCart,
  Package,
  CalendarDays,
  MessageSquare,
  Award,
  Users,
  BarChart,
  CreditCard,
  Mail,
  LogOut,
  Settings,
  Bell,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Dropdown, DropdownItem } from '../ui/dropdown';
import { mockNotifications } from '../../data/mockData';

interface SidebarProps {
  isMobile: boolean;
  isOpen: boolean;
  toggleSidebar: () => void;
  currentModule: string;
  setCurrentModule: (module: string) => void;
}

export function Sidebar({ 
  isMobile, 
  isOpen, 
  toggleSidebar,
  currentModule,
  setCurrentModule
}: SidebarProps) {
  const [unreadCount, setUnreadCount] = useState(0);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<{ [key: string]: boolean }>({
    settings: false,
  });

  useEffect(() => {
    const count = mockNotifications.filter(notification => !notification.read).length;
    setUnreadCount(count);
  }, []);

  const toggleSubmenu = (key: string) => {
    setIsSubmenuOpen(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'reservations', name: 'Reservations', icon: <Calendar size={20} /> },
    { id: 'pos', name: 'Point of Sale', icon: <ShoppingCart size={20} /> },
    { id: 'inventory', name: 'Inventory', icon: <Package size={20} /> },
    { id: 'events', name: 'Events', icon: <CalendarDays size={20} /> },
    { id: 'feedback', name: 'Feedback', icon: <MessageSquare size={20} /> },
    { id: 'loyalty', name: 'Loyalty', icon: <Award size={20} /> },
    { id: 'staff', name: 'Staff', icon: <Users size={20} /> },
    { id: 'reports', name: 'Reports', icon: <BarChart size={20} /> },
    { id: 'payments', name: 'Payments', icon: <CreditCard size={20} /> },
    { id: 'communications', name: 'Communications', icon: <Mail size={20} /> },
  ];

  const handleModuleClick = (moduleId: string) => {
    setCurrentModule(moduleId);
    if (isMobile) {
      toggleSidebar();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30" 
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 bottom-0 z-40 w-64 bg-card border-r border-border flex flex-col transition-transform duration-300 ease-in-out ${
          isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'
        }`}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-border">
          <div className="flex items-center">
            <div className="bg-primary text-primary-foreground h-8 w-8 rounded-md flex items-center justify-center font-bold text-lg">
              S
            </div>
            <span className="ml-2 font-semibold text-lg">SaaSHub</span>
          </div>
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <X size={20} />
            </Button>
          )}
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 scrollbar-hide">
          <ul className="space-y-1 px-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentModule === item.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted'
                  }`}
                  onClick={() => handleModuleClick(item.id)}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="truncate">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 px-4">
            <div className="border-t border-border pt-4">
              <button
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted transition-colors"
                onClick={() => toggleSubmenu('settings')}
              >
                <div className="flex items-center">
                  <Settings size={20} className="mr-3" />
                  <span>Settings</span>
                </div>
                {isSubmenuOpen.settings ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>
              
              {isSubmenuOpen.settings && (
                <div className="pl-10 mt-1 space-y-1">
                  <button className="w-full text-left px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted transition-colors">
                    Account
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted transition-colors">
                    Preferences
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted transition-colors">
                    Modules
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
        
        {/* Footer */}
        <div className="border-t border-border p-4">
          <div className="flex items-center justify-between mb-4">
            <Dropdown
              trigger={
                <button className="relative p-1 rounded-full hover:bg-muted">
                  <Bell size={20} />
                  {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-xs text-white">
                      {unreadCount}
                    </span>
                  )}
                </button>
              }
              align="left"
            >
              <div className="px-4 py-2 text-sm font-semibold">Notifications</div>
              <div className="border-t border-border">
                {mockNotifications.slice(0, 3).map((notification) => (
                  <DropdownItem key={notification.id} className="flex items-start py-3">
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium">{notification.title}</span>
                        {!notification.read && (
                          <Badge variant="primary" className="ml-2">New</Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{notification.message}</p>
                    </div>
                  </DropdownItem>
                ))}
                <DropdownItem className="text-center text-primary">
                  View all
                </DropdownItem>
              </div>
            </Dropdown>
            
            <Dropdown
              trigger={
                <div className="flex items-center cursor-pointer">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-sm font-medium">AJ</span>
                  </div>
                </div>
              }
              align="left"
            >
              <div className="px-4 py-2">
                <p className="text-sm font-semibold">Alex Johnson</p>
                <p className="text-xs text-muted-foreground">alex@example.com</p>
              </div>
              <div className="border-t border-border">
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem className="flex items-center text-destructive">
                  <LogOut size={16} className="mr-2" />
                  Logout
                </DropdownItem>
              </div>
            </Dropdown>
          </div>
        </div>
      </aside>
    </>
  );
}