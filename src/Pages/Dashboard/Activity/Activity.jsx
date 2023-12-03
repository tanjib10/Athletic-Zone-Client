const Activity = () => {
  const activityData = {
    memberInfo: {
      name: "John Doe",
      membershipID: "123456",
      email: "john.doe@example.com",
      phone: "123-456-7890",
    },
    trainerInfo: {
      name: "Trainer Name",
      contact: "987-654-3210",
    },
    trainingSession: {
      timeSlot: "10:00 AM - 11:00 AM",
      program: "Strength Training",
      intensity: "High",
      warmUp: "5 minutes cardio",
      mainExercises: ["Deadlifts", "Bench Press", "Squats"],
    },
    additionalInfo: {
      notes: "Focus on proper form during squats.",
      progressReport: "Made good progress on deadlifts.",
      nextSessionPlan: "Increase weights for bench press.",
    },
    feedback: {
      feelAfterWorkout: "Energized",
      rating: 9,
    },
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center my-8">Activity Log</h2>

      <section className="bg-white shadow-md p-6 rounded-md">
        <h3 className="text-xl font-bold mb-4">
          Today Activity - {new Date().toLocaleDateString()}
        </h3>

        <div className="mb-4">
          <h4 className="text-lg font-bold mb-2">Personal Information:</h4>
          <p>Name: {activityData.memberInfo.name}</p>
          <p>Membership ID: {activityData.memberInfo.membershipID}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-bold mb-2">Trainer Information:</h4>
          <p>Current Trainer: {activityData.trainerInfo.name}</p>
          <p>Trainer Contact: {activityData.trainerInfo.contact}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-bold mb-2">Training Session:</h4>
          <p>Training Time Slot: {activityData.trainingSession.timeSlot}</p>
          <p>Training Program: {activityData.trainingSession.program}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-bold mb-2">Additional Information:</h4>
          <p>Notes from Trainer: {activityData.additionalInfo.notes}</p>
          <p>Progress Report: {activityData.additionalInfo.progressReport}</p>
          <p>
            Next Session Plan: {activityData.additionalInfo.nextSessionPlan}
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2">Feedback:</h4>
          <p>
            How do you feel after todays workout?{" "}
            {activityData.feedback.feelAfterWorkout}
          </p>
          <p>Rate todays session (1-10): {activityData.feedback.rating}</p>
        </div>
      </section>
    </div>
  );
};

export default Activity;
