const ManageMembers = () => {
  const members = [
    { _id: 1, name: "John Doe", email: "john@example.com" },
    { _id: 2, name: "Jane Doe", email: "jane@example.com" },
    { _id: 3, name: "Alice Johnson", email: "alice@example.com" },
    { _id: 4, name: "Bob Smith", email: "bob@example.com" },
    { _id: 5, name: "Eva Davis", email: "eva@example.com" },
    { _id: 6, name: "Charlie Brown", email: "charlie@example.com" },
    { _id: 7, name: "Grace Turner", email: "grace@example.com" },
    { _id: 8, name: "David Lee", email: "david@example.com" },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl text-center font-bold mb-12">Manage Members</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="py-2   border-b">ID</th>
              <th className="py-2 pr-16 border-b">Name</th>
              <th className="py-2 pr-16 border-b">Email</th>
              <th className="py-2  pr-16 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member._id} className="hover:bg-gray-100">
                <td className="py-2 pl-10 border-b">{member._id}</td>
                <td className="py-2 pl-10 border-b">{member.name}</td>
                <td className="py-2 pl-28 border-b">{member.email}</td>
                <td className="py-2 pl-4  border-b">
                  <button className="bg-slate-200 text-black px-3 py-1 rounded-md">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMembers;
