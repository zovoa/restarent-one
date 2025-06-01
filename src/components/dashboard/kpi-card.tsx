import React from 'react';
import { Card, CardContent } from '../ui/card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { KPI } from '../../types';

interface KPICardProps {
  kpi: KPI;
}

export function KPICard({ kpi }: KPICardProps) {
  const Icon = () => {
    // Dynamically rendering would require dynamic imports which is complex
    // Using this approach for simplicity
    if (kpi.icon === 'dollar-sign') {
      return <div className="p-2 rounded-md bg-primary/10 text-primary">$</div>;
    } else if (kpi.icon === 'shopping-bag') {
      return <div className="p-2 rounded-md bg-accent/10 text-accent">📦</div>;
    } else if (kpi.icon === 'calendar') {
      return <div className="p-2 rounded-md bg-secondary/10 text-secondary">📅</div>;
    } else if (kpi.icon === 'star') {
      return <div className="p-2 rounded-md bg-warning/10 text-warning">⭐</div>;
    }
    return null;
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex justify-between">
          <Icon />
          <div className={`flex items-center ${kpi.change >= 0 ? 'text-success' : 'text-destructive'}`}>
            {kpi.change >= 0 ? (
              <ArrowUpRight size={16} className="mr-1" />
            ) : (
              <ArrowDownRight size={16} className="mr-1" />
            )}
            <span className="text-sm font-medium">{Math.abs(kpi.change)}%</span>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-muted-foreground">{kpi.label}</p>
          <p className="text-2xl font-bold mt-1">{kpi.value}</p>
        </div>
      </CardContent>
    </Card>
  );
}