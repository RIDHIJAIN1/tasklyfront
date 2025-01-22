import React from 'react'

const SearchBar = () => {
  return (
    <div className="mt-4 flex items-center space-x-2">
    <input
      type="text"
      placeholder="Search..."
      className="border border-gray-300 rounded-md px-4 py-2 w-full"
    />
    <button className="bg-[#043B64] text-white px-4 py-2 rounded-md hover:bg-[#043B64]">
      Search
    </button>
  </div>
  )
}

export default SearchBar
