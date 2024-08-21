'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
interface Agent {
  id: number;
  name: string;
  location: string;
  phone: string;
  email: string;
  distance: string;
}

const agentsData: Agent[] = [
  { id: 1, name: 'John Doe', location: 'Central City', phone: '123-456-7890', email: 'john@example.com', distance: '5 km' },
  { id: 2, name: 'Jane Smith', location: 'Eastville', phone: '234-567-8901', email: 'jane@example.com', distance: '10 km' },
  { id: 3, name: 'Alice Johnson', location: 'Westtown', phone: '345-678-9012', email: 'alice@example.com', distance: '15 km' },
];

export default function FindAgentPage () {
  const [postcode, setPostcode] = useState<string>('');
  const [agents, setAgents] = useState<Agent[]>([]);

  const handleSearch = () => {
    // In a real application, you would fetch data based on the postcode.
    // For this example, we just filter the predefined agentsData.
    const filteredAgents = agentsData.filter(agent => agent.distance <= '15 km');
    setAgents(filteredAgents);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex flex-col items-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Find an Agent Nearby</h1>
        <div className="mb-4">
          <input
            type="text"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="Enter your postcode"
            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      <div className="w-full max-w-3xl mt-8">
        {agents.length > 0 ? (
          agents.map(agent => (
            <Link href={`/find-an-agent/${agent.name.replace(' ','-').toLowerCase}`} key={agent.id} className="bg-white rounded-lg shadow-md p-6 mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-blue-600">{agent.name}</h2>
                <p className="text-gray-600"><FaMapMarkerAlt className="inline mr-2" />{agent.location} ({agent.distance})</p>
                <p className="text-gray-600"><FaPhone className="inline mr-2" />{agent.phone}</p>
                <p className="text-gray-600"><FaEnvelope className="inline mr-2" />{agent.email}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-600">No agents found. Please enter a valid postcode.</p>
        )}
      </div>
    </div>
  );
};
