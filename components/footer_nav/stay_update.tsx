// components/stay_update.tsx
import React, { useState, FormEvent } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Define proper error type
interface ErrorWithMessage {
  message: string;
}

export default function StayUpdated() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setMessage('');

    try {
      const { error } = await supabase
        .from('subscriptions')
        .insert([{ email }]);

      if (error) throw error;
      
      setEmail('');
      setMessage('Thank you for subscribing!');
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
    <div className="w-full max-w-md">
      <h3 className="text-[36px] sm:text-[50px] mb-2 whitespace-nowrap">STAY UPDATED</h3>
      <p className="mb-2 text-[16px]">Get research updates, news, and events.</p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email Address"
          className="border-b p-2 w-full focus:outline-none bg-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button 
          type="submit"
          disabled={loading}
          className="bg-black text-white border border-black py-2 px-6 rounded w-[100px] mb-6 sm:mb-10 hover:border-black hover:text-black hover:bg-white disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Submit'}
        </button>
        {message && <p className={message.includes('Error') ? 'text-red-500' : 'text-black'}>{message}</p>}
      </form>
    </div>
  );
}
