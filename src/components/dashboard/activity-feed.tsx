import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Activity } from '../../types';

interface ActivityFeedProps {
  activities: Activity[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  const getModuleColor = (module: string) => {
    switch (module) {
      case 'pos':
        return 'bg-primary/10 text-primary';
      case 'reservations':
        return 'bg-secondary/10 text-secondary';
      case 'inventory':
        return 'bg-accent/10 text-accent';
      case 'payments':
        return 'bg-success/10 text-success';
      case 'staff':
        return 'bg-warning/10 text-warning';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffMinutes < 1) return 'just now';
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    
    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base font-medium">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
          {activities.map((activity) => (
            <div key={activity.id} className="relative pl-8">
              <div className={`absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center ${getModuleColor(activity.module)}`}>
                <span className="text-xs font-bold">{activity.module.charAt(0).toUpperCase()}</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">{activity.title}</h4>
                  <span className="text-xs text-muted-foreground">
                    {getTimeAgo(activity.createdAt)}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}