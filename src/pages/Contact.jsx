import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await base44.functions.invoke('submitContactForm', formData);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col justify-center px-6 py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-6">Get in Touch</h1>
          <p className="text-xl font-light text-gray-600 max-w-2xl">
            I'd love to hear from you about commissions, inquiries, or just to connect
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="block text-sm font-light text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-lg font-light focus:outline-none focus:border-gray-800 transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-light text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-lg font-light focus:outline-none focus:border-gray-800 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="block text-sm font-light text-gray-600">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-lg font-light focus:outline-none focus:border-gray-800 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Status Messages */}
            {success && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 font-light">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 font-light">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-800 text-white py-4 text-sm font-light tracking-wide hover:bg-gray-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-20 pt-12 border-t border-gray-200 space-y-4 text-center text-sm font-light text-gray-600">
            <p>Or reach out directly:</p>
            <p>hello@artistry.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
      </section>
    </div>
  );
}