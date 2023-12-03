import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";

const AllSubscribers = () => {
  const axiosSecure = useAxios();
  const { data: subscribers = [] } = useQuery({
    queryKey: ["subscribers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/subscribers");
      return res.data;
    },
  });
  return (
    <div className="my-12">
      <div className="flex justify-evenly my-4">
        <h1 className="text-3xl text-center font-bold">All Subscribers</h1>
        <h1 className="text-3xl text-center font-bold">
          Total Subscribers : {subscribers.length}
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table my-10">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Subscriber Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber, idx) => (
              <tr key={subscriber._id}>
                <th>{idx + 1}</th>
                <td>{subscriber._id}</td>
                <td>{subscriber.name}</td>
                <td>{subscriber.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSubscribers;
