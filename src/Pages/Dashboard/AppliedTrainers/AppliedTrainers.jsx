import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import { FaEye } from "react-icons/fa";
import TrainerDetailsModal from "./TrainerDetailsModal";
import { useState } from "react";

const AppliedTrainers = () => {
  const axiosSecure = useAxios();
  const { data: trainers = [], refetch } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/new/trainers");
      return res.data;
    },
  });
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const openModal = (trainer) => {
    setSelectedTrainer(trainer);
  };

  const closeModal = () => {
    setSelectedTrainer(null);
  };

  const handleConfirm = async (trainerId) => {
    try {
      await axiosSecure.post(`/api/new/trainers/train/${trainerId}/confirm`);
      refetch();
    } catch (error) {
      console.error("Error confirming trainer application:", error);
    }
  };
  const handleReject = async (trainerId) => {
    try {
      await axiosSecure.delete(`/api/new/trainers/${trainerId}`);
      refetch();
    } catch (error) {
      console.error("Error rejecting trainer application:", error);
    }
  };
  return (
    <div className="my-12">
      <div className="flex justify-evenly my-4">
        <h1 className="text-3xl text-center font-bold">Applied Trainers</h1>
        <h1 className="text-3xl text-center font-bold">
          Total Applied Trainers : {trainers.length}
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table my-10">
          {/* head */}
          <thead>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </thead>
          <tbody>
            {trainers.map((trainer, idx) => (
              <tr key={trainer._id}>
                <th>{idx + 1}</th>
                <td>{trainer.fullName}</td>
                <td>{trainer.email}</td>
                <td>{trainer.age}</td>
                <td>
                  <FaEye
                    onClick={() => openModal(trainer)}
                    className="text-lg"
                  ></FaEye>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedTrainer && (
          <TrainerDetailsModal
            trainer={selectedTrainer}
            onConfirm={handleConfirm}
            onReject={handleReject}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default AppliedTrainers;
