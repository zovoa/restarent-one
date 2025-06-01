import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ArrowUpRight, ArrowDownRight, ChevronRight } from 'lucide-react';
import { Module } from '../../types';

interface ModuleCardProps {
  module: Module;
  onClick: () => void;
}

export function ModuleCard({ module, onClick }: ModuleCardProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="success">Active</Badge>;
      case 'inactive':
        return <Badge variant="outline">Inactive</Badge>;
      case 'pending':
        return <Badge variant="warning">Pending</Badge>;
      default:
        return null;
    }
  };

  // Icon rendering helper
  const Icon = () => {
    // Simplified icon representation - in a real app, dynamic imports would be better
    return <div className="p-2 rounded-md bg-primary/10 text-primary">{module.icon.charAt(0).toUpperCase()}</div>;
  };

  return (
    <Card className="h-full hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">{module.name}</CardTitle>
          <CardDescription className="text-xs line-clamp-1">
            {module.description}
          </CardDescription>
        </div>
        <Icon />
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid grid-cols-2 gap-2">
          {module.stats.slice(0, 2).map((stat, index) => (
            <div key={index} className="space-y-1">
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <div className="flex items-baseline">
                <span className="text-base font-semibold">{stat.value}</span>
                {stat.change !== 0 && (
                  <div 
                    className={`ml-2 flex items-center text-xs ${
                      stat.change > 0 ? 'text-success' : 'text-destructive'
                    }`}
                  >
                    {stat.change > 0 ? (
                      <ArrowUpRight size={12} className="mr-0.5" />
                    ) : (
                      <ArrowDownRight size={12} className="mr-0.5" />
                    )}
                    <span>{Math.abs(stat.change)}%</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-4 flex justify-between items-center">
        {getStatusBadge(module.status)}
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-xs flex items-center"
          onClick={onClick}
        >
          View
          <ChevronRight size={14} className="ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}