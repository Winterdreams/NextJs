"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ActivityFormData, ActivityFormDataProps } from "@/types";

const ActivityForm = ({
  activity = "",
  price = 0,
  type = "education",
  bookingRequired = false,
  accessibility = 0.5,
  onSubmit,
}: ActivityFormDataProps) => {
  const { register, handleSubmit, reset, setValue } = useForm<ActivityFormData>();

  useEffect(() => {
    setValue("activity", activity);
    setValue("price", price);
    setValue("type", type);
    setValue("bookingRequired", bookingRequired);
    setValue("accessibility", accessibility);
  }, [activity, price, type, bookingRequired, accessibility, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Activity</label>
        <input
          {...register("activity", { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          step="0.01"
                    min="0"
          {...register("price", { required: true, valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          defaultValue={0}
          onBlur={(e) => {
            let value = parseFloat(e.target.value);
            if (isNaN(value) || value < 0) {
              e.target.value = "0";
            } else {
              e.target.value = value.toFixed(2);
            }
          }}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Type</label>
        <select
          {...register("type", { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        >
          <option value="education">Education</option>
          <option value="recreational">Recreational</option>
          <option value="social">Social</option>
          <option value="diy">DIY</option>
          <option value="charity">Charity</option>
          <option value="cooking">Cooking</option>
          <option value="relaxation">Relaxation</option>
          <option value="music">Music</option>
          <option value="busywork">Busywork</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          <input
            type="checkbox"
            {...register("bookingRequired")}
            className="mr-2"
          />
          Booking Required
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Accessibility (0.0 to 1.0)
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          {...register("accessibility", { required: true, valueAsNumber: true })}
          className="mt-1 block w-full"
        />
      </div>

      <div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          {activity ? "Update Activity" : "Add Activity"}
        </button>
      </div>
    </form>
  );
};

export default ActivityForm;