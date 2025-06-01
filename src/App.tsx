import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/layout/sidebar';
import { Header } from './components/layout/header';
import { Dashboard } from './components/dashboard/dashboard';
import { Reservations } from './components/modules/reservations';
import { Inventory } from './components/modules/inventory';
import { BrowserRouter } from 'react-router-dom';
import { 
  mockKPIs, 
  mockModules, 
  mockActivities,
  mockReservations,
  mockInventoryItems
} from './data/mockData';

function App() {
  const [currentModule, setCurrentModule] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    // Check if we're on mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Set up listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Clean up
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const renderCurrentModule = () => {
    switch (currentModule) {
      case 'dashboard':
        return (
          <Dashboard 
            kpis={mockKPIs} 
            modules={mockModules} 
            activities={mockActivities}
            onModuleClick={setCurrentModule}
          />
        );
      case 'reservations':
        return <Reservations reservations={mockReservations} />;
      case 'inventory':
        return <Inventory items={mockInventoryItems} />;
      default:
        return (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">{currentModule.charAt(0).toUpperCase() + currentModule.slice(1)}</h2>
              <p className="text-muted-foreground">This module is currently under development.</p>
            </div>
          </div>
        );
    }
  };

  return (
  <BrowserRouter basename="/restarent-one">
    <div className="min-h-screen flex bg-background">
      <Sidebar 
        isMobile={isMobile}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        currentModule={currentModule}
        setCurrentModule={setCurrentModule}
      />
      <div className="flex-1 flex flex-col ml-0 md:ml-64">
        <Header 
          toggleSidebar={toggleSidebar}
          currentModule={currentModule}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {renderCurrentModule()}
        </main>
      </div>
    </div>
  </BrowserRouter>
);

}

export default App;