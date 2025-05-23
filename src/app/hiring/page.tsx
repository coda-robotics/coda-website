'use client';

import { useState, useRef, FormEvent } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function HiringPage() {
  const [activeTab, setActiveTab] = useState('details'); // 'details' or 'application'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    linkedin: '',
    resume: null as File | null,
    coverLetter: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const jobTitle = 'Research Scientist';
  const jobLocation = 'San Francisco, CA';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Validate file size (10MB max)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size should be less than 10MB');
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        return;
      }
      setFormData(prev => ({ ...prev, resume: file }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.consent) {
      alert('Please agree to the data processing policy');
      setIsSubmitting(false);
      return;
    }

    try {
      // Upload resume file if it exists
      let resumeUrl = '';
      if (formData.resume) {
        const fileExt = formData.resume.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
        const filePath = `resumes/${fileName}`;
        
        const { error: uploadError } = await supabase.storage
          .from('job-applications')
          .upload(filePath, formData.resume);

        if (uploadError) throw new Error(`File upload failed: ${uploadError.message}`);
        
        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('job-applications')
          .getPublicUrl(filePath);
          
        resumeUrl = publicUrl;
      }

      // Save application to database
      const { error } = await supabase
        .from('job_applications')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone?.trim() || null,
          website: formData.website?.trim() || null,
          linkedin: formData.linkedin?.trim() || null,
          resume_url: resumeUrl || null,
          cover_letter: formData.coverLetter.trim() || null,
          message: formData.message.trim() || null,
          job_title: jobTitle,  // Fixed field name from job_titile to job_title
          status: 'new'
        });

      if (error) throw new Error(`Database error: ${error.message}`);
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
        linkedin: '',
        resume: null,
        coverLetter: '',
        message: '',
        consent: false
      });
      
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      
      alert('Application submitted successfully!');
      setActiveTab('details');
    } catch (error) {
      console.error('Error submitting application:', error);
      alert(`Error submitting application: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
      <div className="mb-8">
        <Link href="/careers" className="text-sm font-medium hover:underline flex items-center">
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          View All Open Positions
        </Link>
      </div>
      
      <h1 className="text-[calc(1.8rem)] sm:text-[calc(2.2rem)] md:text-[calc(2.5rem)] leading-[1.2] mb-2">{jobTitle}</h1>
      <div className="text-gray-600 mb-8">
        On-site · {jobLocation}
      </div>
      
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-8">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab('details')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'details' 
                ? 'border-black text-black' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Job Details
          </button>
          <button
            onClick={() => setActiveTab('application')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'application' 
                ? 'border-black text-black' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Application
          </button>
        </div>
      </div>
      
      {activeTab === 'details' ? (
        <div className="prose max-w-none">
          <h2 className="text-[calc(1.5rem)] sm:text-[calc(1.8rem)] md:text-[calc(2rem)] leading-[1.2] mb-4">Job Description</h2>
          <p className="mb-6">
            At Coda Robotics, we're building the future of autonomous systems. We're looking for a Research Scientist to join our team and help push the boundaries of what's possible with robotics and AI.
          </p>
          
          <h3 className="text-[calc(1.3rem)] sm:text-[calc(1.5rem)] md:text-[calc(1.7rem)] leading-[1.2] font-normal mb-3">Responsibilities</h3>
          <ul className="list-disc pl-5 space-y-2 mb-8">
            <li>Conduct cutting-edge research in robotics and machine learning</li>
            <li>Develop and implement novel algorithms for autonomous systems</li>
            <li>Collaborate with engineering teams to transition research into production</li>
            <li>Publish research findings in top-tier conferences and journals</li>
            <li>Mentor junior researchers and engineers</li>
          </ul>
          
          <h3 className="text-[calc(1.3rem)] sm:text-[calc(1.5rem)] md:text-[calc(1.7rem)] leading-[1.2] font-normal mb-3">Requirements</h3>
          <ul className="list-disc pl-5 space-y-2 mb-8">
            <li>PhD in Computer Science, Robotics, or related field</li>
            <li>Strong publication record in top-tier conferences (e.g., RSS, ICRA, CoRL, NeurIPS, ICML)</li>
            <li>Experience with deep learning frameworks (PyTorch, TensorFlow)</li>
            <li>Proficiency in Python and C++</li>
            <li>Experience with robot perception, planning, or control</li>
          </ul>
          
          <h3 className="text-[calc(1.3rem)] sm:text-[calc(1.5rem)] md:text-[calc(1.7rem)] leading-[1.2] font-normal mb-3">Nice to Have</h3>
          <ul className="list-disc pl-5 space-y-2 mb-8">
            <li>Experience with reinforcement learning</li>
            <li>Background in computer vision or natural language processing</li>
            <li>Experience with ROS (Robot Operating System)</li>
          </ul>
          
          <h3 className="text-[calc(1.3rem)] sm:text-[calc(1.5rem)] md:text-[calc(1.7rem)] leading-[1.2] font-normal mb-3">Compensation</h3>
          <p className="mb-8">
            We offer competitive compensation including equity and benefits. The base salary range for this position is $150,000 - $220,000 per year, depending on experience and qualifications.
          </p>
          
          <button
            onClick={() => setActiveTab('application')}
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Apply Now
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
              Personal Website or Portfolio
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
              LinkedIn Profile
            </label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
              Resume/CV <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              required
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
            />
            <p className="mt-1 text-xs text-gray-500">PDF, DOC, or DOCX (Max. 10MB)</p>
          </div>
          
          <div>
            <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
              Cover Letter
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Tell us why you're interested in this position and why you'd be a great fit..."
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Anything else you'd like us to know..."
            />
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                checked={formData.consent}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="consent" className="font-medium text-gray-700">
                I consent to Coda Robotics processing my data in accordance with the privacy policy.
              </label>
            </div>
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            We're an equal opportunity employer and value diversity at our company. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.
          </p>
        </form>
      )}
    </div>
  );
}