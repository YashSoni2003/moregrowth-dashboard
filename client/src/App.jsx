import useBusinessStore from "./store/useBusinessStore";
import { useState } from "react";

import BusinessForm from './components/BusinessForm.jsx';
import BusinessCard from './components/BusinessCard.jsx';


function App() {
  const {
  businessData,
  formValues,
  setBusinessData,
  setFormValues,
} = useBusinessStore();

  // const [businessData, setBusinessData] = useState(null);
  // const [formValues, setFormValues] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({ name, location }) => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/business-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, location }),
    });
    const data = await res.json();
    setBusinessData(data);
    setFormValues({ name, location });
    setLoading(false);
  };

  const handleRegenerate = async () => {
    setLoading(true);
    const { name, location } = formValues;
    const res = await fetch(
      `http://localhost:5000/regenerate-headline?name=${encodeURIComponent(name)}&location=${encodeURIComponent(location)}`
    );
    const data = await res.json();
    setBusinessData((prev) => ({ ...prev, headline: data.headline }));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl text-center font-bold mb-6">Local Business Dashboard</h1>
      <BusinessForm onSubmit={handleSubmit} />
      {loading && (
  <div className="flex justify-center mt-4">
    <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
  </div>
)}

      {businessData && !loading && (
        <BusinessCard data={businessData} onRegenerate={handleRegenerate} />
      )}
    </div>
  );
}

export default App;
