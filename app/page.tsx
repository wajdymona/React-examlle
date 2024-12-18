'use client';

import { useEffect, useState } from 'react';

export interface UserData {
  id: number;
  name: string;
  email: string;
}

const Home = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sortDirection, setSortDirection] = useState<boolean>(true); // true = ascending, false = descending
  const [sortColumn, setSortColumn] = useState<keyof UserData>('id'); // Track the column being sorted
  const [searchQuery, setSearchQuery] = useState<string>(''); // State for the search query

  // Fetching data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Sorting data function
  const sortData = (column: keyof UserData) => {
    if (column === sortColumn) {
      setSortDirection(!sortDirection);
    } else {
      setSortColumn(column);
      setSortDirection(true); // Default to ascending when changing the column
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[column] < b[column]) return sortDirection ? -1 : 1;
      if (a[column] > b[column]) return sortDirection ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };

  // Filtered data based on search query
  const filteredData = data.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">User Data</h2>
      
      {/* حقل البحث */}
      <div className="mb-4">
        <input
          type="text"
          className="border p-2 w-full rounded-md"
          placeholder="Search by name or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // تحديث النص المدخل في حقل البحث
        />
      </div>

      {/* جدول البيانات */}
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th
              className="border p-2 cursor-pointer"
              onClick={() => sortData('id')}
            >
              ID
            </th>
            <th
              className="border p-2 cursor-pointer"
              onClick={() => sortData('name')}
            >
              Name
            </th>
            <th
              className="border p-2 cursor-pointer"
              onClick={() => sortData('email')}
            >
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
