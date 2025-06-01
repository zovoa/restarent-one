import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { InventoryItem } from '../../types';
import { Plus, Package, AlertTriangle, ArrowUpDown, Search, X } from 'lucide-react';

interface InventoryProps {
  items: InventoryItem[];
}

export function Inventory({ items }: InventoryProps) {
  const [showAddItem, setShowAddItem] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    category: '',
    quantity: 0,
    unit: '',
    threshold: 0,
    cost: 0,
    supplier: ''
  });

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to save the item
    console.log('New Item:', newItem);
    setShowAddItem(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Inventory</h2>
          <p className="text-muted-foreground">Manage your stock levels and supplies</p>
        </div>
        <Button 
          variant="primary" 
          className="flex items-center"
          onClick={() => setShowAddItem(true)}
        >
          <Plus size={16} className="mr-2" />
          Add Item
        </Button>
      </div>

      {/* Add Item Modal */}
      {showAddItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card p-6 rounded-lg w-full max-w-md relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={() => setShowAddItem(false)}
            >
              <X size={20} />
            </Button>
            <h3 className="text-lg font-semibold mb-4">Add Inventory Item</h3>
            <form onSubmit={handleAddItem} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Item Name</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md border border-input bg-background"
                  value={newItem.name}
                  onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                  className="w-full p-2 rounded-md border border-input bg-background"
                  value={newItem.category}
                  onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                  required
                >
                  <option value="">Select category</option>
                  <option value="Meat">Meat</option>
                  <option value="Produce">Produce</option>
                  <option value="Pantry">Pantry</option>
                  <option value="Alcohol">Alcohol</option>
                  <option value="Baking">Baking</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Quantity</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    className="w-full p-2 rounded-md border border-input bg-background"
                    value={newItem.quantity}
                    onChange={(e) => setNewItem({...newItem, quantity: parseFloat(e.target.value)})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Unit</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border border-input bg-background"
                    value={newItem.unit}
                    onChange={(e) => setNewItem({...newItem, unit: e.target.value})}
                    required
                    placeholder="kg, units, etc."
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Low Stock Threshold</label>
                <input
                  type="number"
                  min="0"
                  className="w-full p-2 rounded-md border border-input bg-background"
                  value={newItem.threshold}
                  onChange={(e) => setNewItem({...newItem, threshold: parseInt(e.target.value)})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Cost per Unit</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="w-full p-2 rounded-md border border-input bg-background"
                  value={newItem.cost}
                  onChange={(e) => setNewItem({...newItem, cost: parseFloat(e.target.value)})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Supplier</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md border border-input bg-background"
                  value={newItem.supplier}
                  onChange={(e) => setNewItem({...newItem, supplier: e.target.value})}
                  required
                />
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" type="button" onClick={() => setShowAddItem(false)}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Add Item
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Inventory Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Total Items</span>
                <span className="text-lg font-semibold">{items.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Low Stock Items</span>
                <div className="flex items-center">
                  <span className="text-lg font-semibold mr-2">
                    {items.filter(item => item.quantity <= item.threshold).length}
                  </span>
                  <AlertTriangle size={16} className="text-warning" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Total Value</span>
                <span className="text-lg font-semibold">
                  ${items.reduce((total, item) => total + (item.quantity * item.cost), 0).toFixed(2)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Category Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-muted rounded-md">
                <p className="text-sm font-medium">Meat</p>
                <p className="text-lg font-bold mt-2">
                  {items.filter(item => item.category === 'Meat').length} items
                </p>
              </div>
              <div className="p-4 bg-muted rounded-md">
                <p className="text-sm font-medium">Produce</p>
                <p className="text-lg font-bold mt-2">
                  {items.filter(item => item.category === 'Produce').length} items
                </p>
              </div>
              <div className="p-4 bg-muted rounded-md">
                <p className="text-sm font-medium">Pantry</p>
                <p className="text-lg font-bold mt-2">
                  {items.filter(item => item.category === 'Pantry').length} items
                </p>
              </div>
              <div className="p-4 bg-muted rounded-md">
                <p className="text-sm font-medium">Other</p>
                <p className="text-lg font-bold mt-2">
                  {items.filter(item => !['Meat', 'Produce', 'Pantry'].includes(item.category)).length} items
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-2">
          <CardTitle className="text-base font-medium">Inventory Items</CardTitle>
          <div className="relative w-full sm:w-64 mt-2 sm:mt-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-muted-foreground" />
            </div>
            <input
              type="search"
              placeholder="Search items..."
              className="w-full h-9 bg-muted rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">
                    <div className="flex items-center">
                      Name
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">
                    <div className="flex items-center">
                      Category
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">
                    <div className="flex items-center">
                      Quantity
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Unit Cost</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Supplier</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center">
                        <Package size={16} className="mr-2 text-muted-foreground" />
                        {item.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">{item.category}</td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      {item.quantity} {item.unit}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">${item.cost.toFixed(2)}</td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">{item.supplier}</td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      {item.quantity <= item.threshold ? (
                        <Badge variant="warning">Low Stock</Badge>
                      ) : (
                        <Badge variant="success">In Stock</Badge>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}