'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Roles from "./components/roles";

// Import the RolesProps type to ensure consistency
import type { RolesProps } from "./components/roles";

function CareersContent() {
  const searchParams = useSearchParams();
  
  // Get department from URL if available
  const departmentFromUrl = searchParams.get('department') || 'All';
  
  const [selectedDepartment, setSelectedDepartment] = useState(departmentFromUrl);
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [filteredCount, setFilteredCount] = useState(8);
  
  // Update department filter when URL changes
  useEffect(() => {
    const department = searchParams.get('department');
    if (department) {
      setSelectedDepartment(department);
    }
  }, [searchParams]);
  
  // Get total positions count from the Roles component
  const totalPositions = 8;
  
  // Function to get filtered count from Roles component
  const updateFilteredCount = (count: number) => {
    setFilteredCount(count);
  };
  
  return (
    <section className="max-w-[65rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Introduction section */}
      <div className="mb-12">
        <h1 className="coda-font text-[40px] mb-8 mt-8">CAREERS</h1>
        <div
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '35px',
            letterSpacing: 0,
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            maxWidth: '80%',
            color: '#000',
          }}
          className="space-y-5"
        >
          {/* <p>
            We are an ambitious group of researchers and engineers working to deliver durable data infrastructure to power the future of embodied intelligence.
          </p>
          <p>
            We're hiring cross-domain high agency researchers & engineers who want to be a part of the future of embodied AI, at Coda HQ in San Francisco, CA.
          </p> */}
          <p className="text-lg md:text-xl lg:text-1xl font-light max-w-4xl">
            The opportune moment to build the data infrastructure for the next generation of robotics is 
            now. Join us!
          </p>
        </div>
      </div>
      
      {/* Jobs section */}
      <div className="mt-16">
        <h2 className="coda-font text-[32px] mb-6">Open Positions ({filteredCount})</h2>
        
        {/* Filters */}
        <div className="mb-8">
          <p className="text-sm text-gray-600 mb-2">Filters:</p>
          <div className="flex flex-wrap gap-4">
            <div className="w-full sm:w-auto">
              <select 
                className={`w-full px-4 py-2 border rounded bg-white text-gray-800 appearance-none cursor-pointer ${selectedDepartment !== 'All' ? 'border-black border-2' : 'border-gray-300'}`}
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="All">Department</option>
                <option value="Engineering">Engineering</option>
                <option value="Research">Research</option>
                <option value="Product">Product</option>
                <option value="Media">Media</option>
              </select>
            </div>
            
            <div className="w-full sm:w-auto">
              <select 
                className={`w-full px-4 py-2 border rounded bg-white text-gray-800 appearance-none cursor-pointer ${selectedLocation !== 'All' ? 'border-black border-2' : 'border-gray-300'}`}
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="All">Location</option>
                <option value="San Francisco">San Francisco</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
            
            <div className="w-full sm:w-auto">
              <select 
                className={`w-full px-4 py-2 border rounded bg-white text-gray-800 appearance-none cursor-pointer ${selectedType !== 'All' ? 'border-black border-2' : 'border-gray-300'}`}
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="All">Employment Type</option>
                <option value="Full time">Full time</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Roles listing */}
        <div className="mt-10">
          <Roles 
            departmentFilter={selectedDepartment}
            locationFilter={selectedLocation}
            typeFilter={selectedType}
            onFilteredCountChange={updateFilteredCount}
          />
        </div>
      </div>
    </section>
  );
}

export default function Careers_Section() {
  return (
    <Suspense fallback={<div className="max-w-[65rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">Loading careers...</div>}>
      <CareersContent />
    </Suspense>
  );
}