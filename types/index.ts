import { SubmitHandler } from "react-hook-form";

export interface ActivityFormDataProps {
    activity?: string;
    price?: number;
    type?: string;
    bookingRequired?: boolean;
    accessibility?: number;
    onSubmit: SubmitHandler<ActivityFormDataProps>;
  };

export interface ActivityListProps {
  activities: ActivityFormDataProps[];
  onEdit: (activity: ActivityFormDataProps) => void;
  onDelete: (activity: ActivityFormDataProps) => void;
}

export type ActivityProps = {
    activity?: string;
    className: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
