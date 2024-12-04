const Feedback = () => {
  return (
    <div className="card bg-base-100 border border-gray-300 col-span-2 row-span-2">
      <div className="card-body">
        <div className="flex justify-between">
          <div className="text-2xl font-bold">Feedback & Iteration</div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-outline btn-sm mt-2">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
