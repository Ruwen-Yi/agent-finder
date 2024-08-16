export default function Dashboard() {
  return (
    <div className="flex h-screen bg-blue-50">
      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold text-blue-900">
          Welcome, [Agent Name]!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {/* Quick Stats */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-blue-700">
              Today's Appointments
            </h2>
            <p className="text-2xl font-bold text-blue-900">5</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-blue-700">
              Pending Requests
            </h2>
            <p className="text-2xl font-bold text-blue-900">3</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-blue-700">New Messages</h2>
            <p className="text-2xl font-bold text-blue-900">8</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-blue-700">
              Recent Reviews
            </h2>
            <p className="text-2xl font-bold text-blue-900">4</p>
          </div>
        </div>

        {/* Additional Content */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-800">Overview</h2>
          <p className="text-blue-700 mt-2">
            This section can contain charts, tables, or other relevant data for
            the agent to review.
          </p>
        </div>
      </div>
    </div>
  );
}
