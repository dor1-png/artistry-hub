import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Plus, Edit2, Trash2, Check, X } from 'lucide-react';

export default function AdminPage() {
  const [contents, setContents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    key: '',
    type: 'text',
    value: '',
    section: 'home'
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const data = await base44.entities.Content.list();
      setContents(data);
    } catch (error) {
      console.error('Failed to load content:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    if (!formData.key || !formData.value) {
      alert('Please fill in all fields');
      return;
    }
    try {
      await base44.entities.Content.create(formData);
      setFormData({ key: '', type: 'text', value: '', section: 'home' });
      setIsAdding(false);
      loadContent();
    } catch (error) {
      console.error('Failed to create content:', error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const item = contents.find(c => c.id === id);
      await base44.entities.Content.update(id, formData);
      setEditingId(null);
      setFormData({ key: '', type: 'text', value: '', section: 'home' });
      loadContent();
    } catch (error) {
      console.error('Failed to update content:', error);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure?')) {
      try {
        await base44.entities.Content.delete(id);
        loadContent();
      } catch (error) {
        console.error('Failed to delete content:', error);
      }
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData(item);
    setIsAdding(false);
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsAdding(false);
    setFormData({ key: '', type: 'text', value: '', section: 'home' });
  };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Content Manager</h1>
          <Button
            onClick={() => setIsAdding(true)}
            className="gap-2"
          >
            <Plus size={18} /> Add Content
          </Button>
        </div>

        {/* Add/Edit Form */}
        {(isAdding || editingId) && (
          <Card className="p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">
              {editingId ? 'Edit Content' : 'Add New Content'}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Content Key</label>
                <Input
                  placeholder="e.g., hero_title"
                  value={formData.key}
                  onChange={(e) => setFormData({ ...formData, key: e.target.value })}
                  disabled={!!editingId}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="text">Text</option>
                    <option value="image">Image</option>
                    <option value="richtext">Rich Text</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Section</label>
                  <select
                    value={formData.section}
                    onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="home">Home</option>
                    <option value="gallery">Gallery</option>
                    <option value="artist">Artist</option>
                    <option value="contact">Contact</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Value</label>
                {formData.type === 'text' ? (
                  <Input
                    placeholder="Enter content"
                    value={formData.value}
                    onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                  />
                ) : (
                  <Textarea
                    placeholder={formData.type === 'image' ? 'Enter image URL' : 'Enter content'}
                    value={formData.value}
                    onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                    rows={4}
                  />
                )}
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={editingId ? () => handleUpdate(editingId) : handleAdd}
                  className="gap-2"
                >
                  <Check size={18} /> Save
                </Button>
                <Button
                  onClick={handleCancel}
                  variant="outline"
                  className="gap-2"
                >
                  <X size={18} /> Cancel
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Content List */}
        <div className="space-y-4">
          {contents.map((item) => (
            <Card key={item.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold">{item.key}</h3>
                    <span className="text-xs bg-gray-200 px-2 py-1 rounded">{item.type}</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{item.section}</span>
                  </div>
                  <p className="text-gray-600 line-clamp-2">{item.value}</p>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(item)}
                  >
                    <Edit2 size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-red-600 hover:text-red-700"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}