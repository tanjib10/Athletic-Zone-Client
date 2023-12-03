/* eslint-disable react/prop-types */

const TrainerDetailsModal = ({ trainer, onClose, onConfirm, onReject }) => {
  return (
    <div className="bg-white p-6 rounded-lg max-w-md mx-auto shadow-md">
      <h2 className="text-2xl font-semibold mb-4">
        {trainer.fullName} Details
      </h2>
      <p className="mb-2">Application Id: {trainer._id}</p>
      <p className="mb-2">Email: {trainer.email}</p>
      <p className="mb-4">Available Time a day: {trainer.availableTimeDay}</p>
      <div className="flex justify-between">
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none"
          onClick={onConfirm}
        >
          Confirm
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none"
          onClick={onReject}
        >
          Reject
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded focus:outline-none"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TrainerDetailsModal;
