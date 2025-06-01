import React, { useState } from 'react';
import { Menu, Search, Bell, Moon, Sun } from 'lucide-react';
import { Button } from '../ui/button';
import { Dropdown, DropdownItem } from '../ui/dropdown';
import { Badge } from '../ui/badge';
import { mockNotifications } from '../../data/mockData';

interface HeaderProps {
  toggleSidebar: () => void;
  currentModule: string;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export function Header({ 
  toggleSidebar, 
  currentModule,
  isDarkMode,
  toggleTheme
}: HeaderProps) {
  const [unreadCount, setUnreadCount] = useState(() => {
    return mockNotifications.filter(notification => !notification.read).length;
  });

  const getModuleTitle = (moduleId: string) => {
    switch (moduleId) {
      case 'dashboard':
        return 'Dashboard';
      case 'reservations':
        return 'Reservations';
      case 'pos':
        return 'Point of Sale';
      case 'inventory':
        return 'Inventory';
      case 'events':
        return 'Events';
      case 'feedback':
        return 'Feedback';
      case 'loyalty':
        return 'Loyalty';
      case 'staff':
        return 'Staff';
      case 'reports':
        return 'Reports';
      case 'payments':
        return 'Payments';
      case 'communications':
        return 'Communications';
      default:
        return 'Dashboard';
    }
  };

  return (
    <header className="sticky top-0 z-20 h-16 bg-card/80 backdrop-blur-sm border-b border-border flex items-center justify-between px-4">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="mr-2 md:hidden" onClick={toggleSidebar}>
          <Menu size={20} />
        </Button>
        <h1 className="text-lg font-semibold">{getModuleTitle(currentModule)}</h1>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="relative max-w-md hidden md:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={16} className="text-muted-foreground" />
          </div>
          <input
            type="search"
            placeholder="Search..."
            className="w-full h-9 bg-muted rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
        
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
          align="right"
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

        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
          <span className="text-sm font-medium">AJ</span>
        </div>
      </div>
    </header>
  );
}