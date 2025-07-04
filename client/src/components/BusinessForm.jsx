import { useState } from "react";

export default function BusinessForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
const trimmedLocation = location.trim();
const specialCharPattern = /[^a-zA-Z0-9 &]/;

if (!trimmedName || !trimmedLocation) {
  return alert("Please fill in both fields.");
}
if (specialCharPattern.test(trimmedName) || specialCharPattern.test(trimmedLocation)) {
  return alert("Please avoid special characters.");
}
onSubmit({ name: trimmedName, location: trimmedLocation });

    onSubmit({ name, location });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Business Name"
        className="w-full border p-2 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        className="w-full border p-2 rounded"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
