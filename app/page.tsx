"use client";
import { useState } from "react";
import { ActivityFormData } from "@/types";
import ActivityForm from "@/components/Activity";

const Home = () => {
  const [activities, setActivities] = useState<ActivityFormData[]>([]);
  const [editingActivity, setEditingActivity] = useState<ActivityFormData | null>(null);

  // Handle form submission
  const handleSubmit = (data: ActivityFormData) => {
    if (editingActivity) {
      setActivities((prev) =>
        prev.map((activity) =>
          activity === editingActivity ? data : activity
        )
      );
      setEditingActivity(null); 
    } else {
      setActivities((prev) => [...prev, data]);
    }
  };

  const handleEdit = (activity: ActivityFormData) => {
    setEditingActivity(activity);
  };

  const handleDelete = (activityToDelete: ActivityFormData) => {
    setActivities((prev) =>
      prev.filter((activity) => activity !== activityToDelete)
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Activity Manager</h1>
      <ActivityForm
        activity={editingActivity?.activity}
        price={editingActivity?.price}
        type={editingActivity?.type}
        bookingRequired={editingActivity?.bookingRequired}
        accessibility={editingActivity?.accessibility}
        onSubmit={handleSubmit}
      />

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Activities List</h2>
        <ul className="space-y-2">
          {activities.map((activity, index) => (
            <li key={index} className="p-4 border rounded-md">
              <p><strong>Activity:</strong> {activity.activity}</p>
              <p><strong>Price:</strong> ${activity.price}</p>
              <p><strong>Type:</strong> {activity.type}</p>
              <p><strong>Booking Required:</strong> {activity.bookingRequired ? "Yes" : "No"}</p>
              <p><strong>Accessibility:</strong> {activity.accessibility}</p>
              <div className="mt-2 space-x-2">
                <button
                  onClick={() => handleEdit(activity)}
                  className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                    onClick={() => handleDelete(activity)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                    Delete
                  </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;