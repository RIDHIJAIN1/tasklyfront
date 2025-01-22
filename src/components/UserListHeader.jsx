import React from 'react';

const Header = () => {
  // Generate heights for the bars dynamically
  const generateBarHeight = (index) => 8 + (index % 8) * 12;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
      <p className="text-sm py-3 text-gray-600">01 - 25 March, 2020</p>

      <div className="mt-6 relative">
        {/* Bar Chart */}
        <div className="h-32 bg-blue-50 flex items-end space-x-0.5 px-4">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`flex-1 rounded-sm ${
                i === 15 ? 'bg-blue-500' : 'bg-blue-300'
              }`}
              style={{
                height: `${i === 15 ? 24 : generateBarHeight(i)}px`,
              }}
            ></div>
          ))}
        </div>

        {/* Dashed Divider */}
        <div className="absolute right-0 top-0 h-full border-r-2 border-dashed border-blue-500"></div>
      </div>
    </div>
  );
};

export default Header;