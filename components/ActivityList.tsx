import React from "react";
import { ActivityFormDataProps, ActivityListProps } from "@/types";
import Button from "./Button";

const ActivityList: React.FC<ActivityListProps> = ({ activities, onEdit, onDelete }) => {
    
    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Activities List</h2>
            
            <p className="text-lg font-semibold mb-2">Total Activities: {activities.length}</p>
                <ul className="space-y-2">
                    {activities.map((activity, index) => (
                    <li key={index} className="p-4 border rounded-md">
                        <p><strong>Activity:</strong> {activity.activity}</p>
                        <p><strong>Price:</strong> ${activity.price}</p>
                        <p><strong>Type:</strong> {activity.type}</p>
                        <p><strong>Booking Required:</strong> {activity.bookingRequired ? "Yes" : "No"}</p>
                        <p><strong>Accessibility:</strong> {activity.accessibility}</p>
                        <div className="mt-2 space-x-2">
                            <Button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600" onClick={() => onEdit(activity)} activity="Edit"/>
                            <Button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={() => onDelete(activity)} activity="Delete"/>
                        </div>
                    </li>
                    ))}
                </ul>
        </div>   
    )
}

export default ActivityList