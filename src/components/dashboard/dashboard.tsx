import React from 'react';
import { KPICard } from './kpi-card';
import { ModuleCard } from './module-card';
import { ActivityFeed } from './activity-feed';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { KPI, Module, Activity } from '../../types';
import { PlusCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

interface DashboardProps {
  kpis: KPI[];
  modules: Module[];
  activities: Activity[];
  onModuleClick: (moduleId: string) => void;
}

export function Dashboard({ kpis, modules, activities, onModuleClick }: DashboardProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-muted-foreground">Welcome back, here's an overview of your business</p>
      </div>
      
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <KPICard key={kpi.id} kpi={kpi} />
        ))}
      </div>
      
      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-medium">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="h-auto py-4 flex flex-col items-center justify-center space-y-2"
              onClick={() => onModuleClick('reservations')}
            >
              <PlusCircle size={24} />
              <span className="text-sm">New Reservation</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-auto py-4 flex flex-col items-center justify-center space-y-2"
              onClick={() => onModuleClick('pos')}
            >
              <PlusCircle size={24} />
              <span className="text-sm">New Order</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-auto py-4 flex flex-col items-center justify-center space-y-2"
              onClick={() => onModuleClick('inventory')}
            >
              <PlusCircle size={24} />
              <span className="text-sm">Add Inventory</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-auto py-4 flex flex-col items-center justify-center space-y-2"
              onClick={() => onModuleClick('reports')}
            >
              <ArrowRight size={24} />
              <span className="text-sm">View Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Modules and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {modules.slice(0, 4).map((module) => (
            <ModuleCard 
              key={module.id} 
              module={module} 
              onClick={() => onModuleClick(module.id)} 
            />
          ))}
        </div>
        
        <div>
          <ActivityFeed activities={activities} />
        </div>
      </div>
      
      {/* All Modules */}
      <div>
        <h3 className="text-lg font-semibold mb-4">All Modules</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {modules.slice(4).map((module) => (
            <ModuleCard 
              key={module.id} 
              module={module} 
              onClick={() => onModuleClick(module.id)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}