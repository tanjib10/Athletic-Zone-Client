import { Helmet } from "react-helmet";
import AllClasses from "./AllClasses";

const Classes = () => {
  const weeklySchedule = [
    {
      day: "Monday",
      activities: ["Cardio", "Strength Training"],
    },
    {
      day: "Tuesday",
      activities: ["Yoga", "HIIT"],
    },
    {
      day: "Wednesday",
      activities: ["Pilates", "Cycling"],
    },
    {
      day: "Thursday",
      activities: ["CrossFit", "Zumba"],
    },
    {
      day: "Friday",
      activities: ["Kickboxing", "Functional Training"],
    },
    {
      day: "Saturday",
      activities: ["Rest Day"],
    },
    {
      day: "Sunday",
      activities: ["Swimming", "Bodyweight Workout"],
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Athletic Zone | Classes</title>
      </Helmet>
      <div className="container mx-auto mt-8 p-4 lg:p-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-3xl font-bold mb-4 text-indigo-700">
            Weekly Schedule
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border border-collapse border-gray-300">
              <thead>
                <tr className="bg-indigo-200 text-indigo-700">
                  <th className="py-3 px-4 border">Day</th>
                  <th className="py-3 px-4 border">Activities</th>
                </tr>
              </thead>
              <tbody>
                {weeklySchedule.map((day, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-100" : ""}
                  >
                    <td className="py-3 px-4 border">{day.day}</td>
                    <td className="py-3 px-4 border">
                      <ul className="list-disc pl-4">
                        {day.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="mb-1">
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <AllClasses></AllClasses>
    </div>
  );
};

export default Classes;
