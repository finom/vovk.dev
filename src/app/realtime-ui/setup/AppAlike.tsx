"use client";
import { useState } from "react";

const AppAlike = () => {
    const [fullName, setFullName] = useState('John Doe');
    const [fullNameInput, setFullNameInput] = useState(fullName);
  return <div className="border dark:border-gray-800 border-gray-200 my-8">
    <div className="flex justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="font-bold">ACME Inc.</div>
        <div>Welcome on board, {fullName}!</div>
    </div>
    <div className="flex">
        <div className="border-r border-gray-200 dark:border-gray-800 p-4 flex items-end min-w-40">👤 {fullName}</div>
        <div className="p-4 flex-1">
            <h1 className="font-bold text-2xl mb-4">Update your profile, {fullName}!</h1>
            <label className="block">Full name</label>
            <input type="text" placeholder="Full name" value={fullNameInput} onChange={(e) => setFullNameInput(e.target.value)} className="border border-gray-300 dark:border-gray-700 rounded p-2 my-2 w-64" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 block cursor-pointer" onClick={() => setFullName(fullNameInput)}>Save</button>
        </div>
    </div>
  </div>
}

export default AppAlike;