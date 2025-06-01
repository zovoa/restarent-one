import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Reservation } from '../../types';
import { Calendar as CalendarIcon, Plus, Trash, Edit, CheckCircle, XCircle, X } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

interface ReservationsProps {
  reservations: Reservation[];
}

export function Reservations({ reservations }: ReservationsProps) {
  const [showNewReservation, setShowNewReservation] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [newReservation, setNewReservation] = useState({
    customerName: '',
    email: '',
    phone: '',
    partySize: 2,
    time: '19:00',
    notes: ''
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge variant="success">Confirmed</Badge>;
      case 'pending':
        return <Badge variant="warning">Pending</Badge>;
      case 'cancelled':
        return <Badge variant="error">Cancelled</Badge>;
      default:
        return null;
    }
  };

  const handleNewReservation = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to save the reservation
    console.log('New Reservation:', {
      ...newReservation,
      date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : ''
    });
    setShowNewReservation(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Reservations</h2>
          <p className="text-muted-foreground">Manage your table bookings and reservations</p>
        </div>
        <Button 
          variant="primary" 
          className="flex items-center"
          onClick={() => setShowNewReservation(true)}
        >
          <Plus size={16} className="mr-2" />
          New Reservation
        </Button>
      </div>

      {/* New Reservation Modal */}
      {showNewReservation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card p-6 rounded-lg w-full max-w-md relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={() => setShowNewReservation(false)}
            >
              <X size={20} />
            </Button>
            <h3 className="text-lg font-semibold mb-4">New Reservation</h3>
            <form onSubmit={handleNewReservation} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Customer Name</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md border border-input bg-background"
                  value={newReservation.customerName}
                  onChange={(e) => setNewReservation({...newReservation, customerName: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-2 rounded-md border border-input bg-background"
                  value={newReservation.email}
                  onChange={(e) => setNewReservation({...newReservation, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full p-2 rounded-md border border-input bg-background"
                  value={newReservation.phone}
                  onChange={(e) => setNewReservation({...newReservation, phone: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Party Size</label>
                <input
                  type="number"
                  min="1"
                  className="w-full p-2 rounded-md border border-input bg-background"
                  value={newReservation.partySize}
                  onChange={(e) => setNewReservation({...newReservation, partySize: parseInt(e.target.value)})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border border-input bg-background cursor-pointer"
                    value={selectedDate ? format(selectedDate, 'PP') : ''}
                    onClick={() => setShowCalendar(!showCalendar)}
                    readOnly
                    required
                  />
                  {showCalendar && (
                    <div className="absolute top-full left-0 z-10 bg-card border border-border rounded-md shadow-lg mt-1">
                      <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={(date) => {
                          setSelectedDate(date);
                          setShowCalendar(false);
                        }}
                        className="p-3"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Time</label>
                <input
                  type="time"
                  className="w-full p-2 rounded-md border border-input bg-background"
                  value={newReservation.time}
                  onChange={(e) => setNewReservation({...newReservation, time: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Notes</label>
                <textarea
                  className="w-full p-2 rounded-md border border-input bg-background"
                  value={newReservation.notes}
                  onChange={(e) => setNewReservation({...newReservation, notes: e.target.value})}
                  rows={3}
                />
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" type="button" onClick={() => setShowNewReservation(false)}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Create Reservation
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-base font-medium">Upcoming Reservations</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Date & Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Party Size</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Status</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((reservation) => (
                    <tr 
                      key={reservation.id} 
                      className="border-b border-border hover:bg-muted/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm whitespace-nowrap">{reservation.customerName}</td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap">
                        {reservation.date} at {reservation.time}
                      </td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap">{reservation.partySize}</td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap">
                        {getStatusBadge(reservation.status)}
                      </td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap text-right">
                        <div className="flex justify-end space-x-2">
                          {reservation.status === 'pending' && (
                            <>
                              <Button variant="ghost\" size="sm\" className="h-8 w-8 p-0">
                                <CheckCircle size={16} className="text-success" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <XCircle size={16} className="text-destructive" />
                              </Button>
                            </>
                          )}
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Edit size={16} />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Trash size={16} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">Calendar View</CardTitle>
          </CardHeader>
          <CardContent>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="border border-border rounded-lg p-3"
              classNames={{
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                month: "space-y-4",
                caption: "flex justify-center pt-1 relative items-center",
                caption_label: "text-sm font-medium",
                nav: "space-x-1 flex items-center",
                nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                nav_button_previous: "absolute left-1",
                nav_button_next: "absolute right-1",
                table: "w-full border-collapse space-y-1",
                head_row: "flex",
                head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
                row: "flex w-full mt-2",
                cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                day_today: "bg-accent text-accent-foreground",
                day_outside: "text-muted-foreground opacity-50",
                day_disabled: "text-muted-foreground opacity-50",
                day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                day_hidden: "invisible",
              }}
            />
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full">
                View Full Calendar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}