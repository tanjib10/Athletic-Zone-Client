import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";

const AllTrainers = () => {
  const axiosSecure = useAxios();
  const { data: trainers = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/trainers");
      return res.data;
    },
  });
  return (
    <div className="my-12">
      <div className="flex justify-evenly my-4">
        <h1 className="text-3xl text-center font-bold">All Trainers</h1>
        <h1 className="text-3xl text-center font-bold">
          Total Trainers : {trainers.length}
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table my-10">
          {/* head */}
          <thead>
            <th></th>
            <th>Name</th>
            <th>Experience</th>
            <th>Trainer Id</th>
            <th>Specialization</th>
          </thead>
          <tbody>
            {trainers.map((trainer, idx) => (
              <tr key={trainer._id}>
                <th>{idx + 1}</th>
                <td>{trainer.name}</td>
                <td>{trainer.experience}</td>
                <td>{trainer._id}</td>
                <td>{trainer.specialization}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTrainers;
