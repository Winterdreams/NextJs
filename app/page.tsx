"use client";
import { useState, useEffect } from "react";
import { ActivityFormDataProps } from "@/types";
import ActivityForm from "@/components/ActivityForm";
import ActivityList from "@/components/ActivityList";
import Header from "@/components/Header";

const LOCAL_STORAGE_KEY = "activityList";

const HomePage = () => {
  const [activities, setActivities] = useState<ActivityFormDataProps[]>([]);
  const [editingActivity, setEditingActivity] = useState<ActivityFormDataProps | null>(null);

  //handle form submission
  const handleSubmit = (data: ActivityFormDataProps) => {
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

  const handleEdit = (activity: ActivityFormDataProps) => {
    setEditingActivity(activity);
  };

  const handleDelete = (activityToDelete: ActivityFormDataProps) => {
    setActivities((prev) =>
      prev.filter((activity) => activity !== activityToDelete)
    );
  };

  //load activities from local storage
  useEffect(() => {
    const savedActivities = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedActivities) {
      setActivities(JSON.parse(savedActivities));
    }
  }, []);

  //save activities to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(activities));
  }, [activities]);

  return (
    <>
    <div className="container mx-auto p-4">
      <Header />

      <h1 className="text-2xl font-bold mb-4">Activity Manager</h1>
      <ActivityForm
        activity={editingActivity?.activity}
        price={editingActivity?.price}
        type={editingActivity?.type}
        bookingRequired={editingActivity?.bookingRequired}
        accessibility={editingActivity?.accessibility}
        onSubmit={handleSubmit}
      />

      <ActivityList activities={activities} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
    </>
  );
};

export default HomePage;