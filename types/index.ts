import { MouseEventHandler } from "react";
import { SubmitHandler } from "react-hook-form";


export type ActivityFormData = {
    activity: string;
    price: number;
    type: string;
    bookingRequired: boolean;
    accessibility: number;
  };

export type ActivityFormDataProps = {
    activity?: string;
    price?: number;
    type?: string;
    bookingRequired?: boolean;
    accessibility?: number;
    onSubmit: SubmitHandler<ActivityFormData>;
  };