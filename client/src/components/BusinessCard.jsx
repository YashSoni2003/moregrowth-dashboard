export default function BusinessCard({ data, onRegenerate }) {
  const { rating, reviews, headline } = data;

  return (
    <div className="bg-white shadow-lg p-6 rounded-xl max-w-md mx-auto mt-6 space-y-4">
      <div className="text-xl font-semibold">⭐ {rating} Rating</div>
      <div className="text-gray-600">{reviews} Reviews</div>
      <div className="italic text-blue-700 font-medium">{headline}</div>
      <button
        onClick={onRegenerate}
        className="mt-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        Regenerate SEO Headline
      </button>
    </div>
  );
}
