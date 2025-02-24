import { ActivityProps} from "@/types";

const Button = ({activity, className, onClick}: ActivityProps) => {
  return (
    <button
        className={className}
        onClick={onClick}
    >
        {activity}
    </button>
  )
}

export default Button