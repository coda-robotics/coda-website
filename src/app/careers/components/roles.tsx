import Link from "next/link";
import { useEffect } from "react";

export interface RolesProps {
  departmentFilter?: string;
  locationFilter?: string;
  typeFilter?: string;
  onFilteredCountChange?: (count: number) => void;
}

export default function Roles({ 
  departmentFilter = 'All', 
  locationFilter = 'All', 
  typeFilter = 'All',
  onFilteredCountChange 
}: RolesProps) {
  // Extended roles with more information
  const roles = [
    // {
    //   id: 1,
    //   title: "Cloud Quant",
    //   department: "Engineering",
    //   location: "New York",
    //   type: "Full time",
    //   link: "/hiring"
    // },
    {
      id: 1,
      title: "Department Lead - Robotic World Models",
      department: "Engineering",
      location: "San Francisco",
      type: "Full time",
      link: "/hiring"
    },
    {
      id: 2,
      title: "Department Lead - Embodied Reasoning",
      department: "Engineering",
      location: "San Francisco",
      type: "Full time",
      link: "/hiring"
    },
    {
      id: 3,
      title: "Department Lead - Data Weighting",
      department: "Engineering",
      location: "San Francisco",
      type: "Full time",
      link: "/hiring"
    },
    {
      id: 4,
      title: "Department Lead - Evaluations",
      department: "Engineering",
      location: "San Francisco",
      type: "Full time",
      link: "/hiring"
    },
    {
      id: 5,
      title: "Infrastructure Engineer",
      department: "Engineering",
      location: "San Francisco",
      type: "Full time",
      link: "/hiring"
    },
    {
      id: 6,
      title: "Chief Media Officer",
      department: "Media",
      location: "San Francisco",
      type: "Full time",
      link: "/hiring"
    }, 
    {
      id: 7,
      title: "Chief Product Officer",
      department: "Product",
      location: "San Francisco",
      type: "Full time",
      link: "/hiring"
    },
    {
      id: 8,
      title: "Research Lead - Online RL",
      department: "Research",
      location: "San Francisco",
      type: "Full time",
      link: "/hiring"
    }
    // {
    //   id: 8,
    //   title: "Technical Writer",
    //   department: "Documentation",
    //   location: "Remote",
    //   type: "Contract",
    //   link: "/hiring"
    // }
  ];

  // Apply filters
  const filteredRoles = roles.filter(role => {
    const matchesDepartment = departmentFilter === 'All' || role.department === departmentFilter;
    const matchesLocation = locationFilter === 'All' || role.location.includes(locationFilter);
    const matchesType = typeFilter === 'All' || role.type === typeFilter;
    return matchesDepartment && matchesLocation && matchesType;
  });

  // Update parent component with filtered count
  useEffect(() => {
    if (onFilteredCountChange) {
      onFilteredCountChange(filteredRoles.length);
    }
  }, [filteredRoles.length, onFilteredCountChange]);

  // Get unique departments from filtered roles and sort them
  const departments = [...new Set(filteredRoles.map(role => role.department))].sort();

  // If no roles match the filters
  if (filteredRoles.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600">No positions match your current filters. Please try different criteria.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {departments.map(department => {
        // Get roles for this department
        const departmentRoles = filteredRoles.filter(role => role.department === department);
        
        // Skip empty departments
        if (departmentRoles.length === 0) return null;
        
        return (
          <div key={department} className="mb-8">
            <h2 className="text-2xl font-medium mb-6 coda-font">{department}</h2>
            
            {departmentRoles.map(role => (
              <div key={role.id} className="border-b border-gray-200 py-5">
                <div className="flex flex-col">
                  <Link href={role.link} className="text-lg font-medium hover:underline">
                    {role.title}
                  </Link>
                  <div className="text-sm text-gray-600 mt-1">
                    {department} • {role.location} • {role.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}