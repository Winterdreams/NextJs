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
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" ;
    onSubmit: SubmitHandler<ActivityFormData>;
  };