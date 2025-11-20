import { useState } from "react";
import { motion } from "framer-motion";

export default function Feedback() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: 0,
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || form.rating === 0) {
      alert("Please fill all fields! ⭐");
      return;
    }
    console.log("Feedback submitted:", form);
    alert("Thank you for your feedback!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto mt-12 p-8 rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg border border-white/40"
    >
      <h2 className="text-3xl font-bold text-sky-700 text-center mb-8">
        Your Feedback Matters 💬
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        

        
        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea
            className="w-full p-3 min-h-[120px] rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>

        
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-sky-600 text-white font-semibold text-lg hover:bg-sky-700 active:scale-95 transition-all"
        >
          Submit Feedback
        </button>
      </form>
    </motion.div>
  );
}
