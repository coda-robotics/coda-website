'use client';

import { useState, FormEvent } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface ApplicationModalProps {
  onClose: () => void;
}

export default function ApplicationModal({ onClose }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    setMessage('');

    try {
      // Insert data into 'embodied_reasoning_requests' table
      const { error } = await supabase
        .from('embodied_reasoning_requests')
        .insert([{ 
          name: formData.name,
          email: formData.email
        }]);

      if (error) throw error;
      
      setMessage('Thank you for your interest! We will be in touch soon.');
      
      // Close the modal after 3 seconds of showing success message
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Something went wrong';
      setMessage(`Error: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pt-20">
      {/* Overlay with blur effect */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-[#1E1E1E] text-gray-300 rounded-xl w-full max-w-md mx-4 p-8 border border-gray-700 shadow-xl mt-10">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <h2 className="text-3xl md:text-3xl text-white tracking-wider" style={{ textShadow: "0 0 10px rgba(255,255,255,0.5)" }}>
            ACCESS EMBODIED REASONING
          </h2>
        </div>
        
        <form onSubmit={handleSubmit} className="px-4">
          <div className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-lg mb-2 text-white">NAME*</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-600 pb-2 focus:outline-none focus:border-gray-400 text-white"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-lg mb-2 text-white">EMAIL*</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-600 pb-2 focus:outline-none focus:border-gray-400 text-white"
              />
            </div>
            
            <div className="pt-8">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white hover:bg-gray-200 text-black py-3 rounded transition duration-200 text-xl disabled:opacity-50"
              >
                {loading ? 'SUBMITTING...' : 'SUBMIT'}
              </button>
              
              {message && (
                <p className={`mt-4 text-center ${message.includes('Error') ? 'text-red-400' : 'text-green-400'}`}>
                  {message}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
} 