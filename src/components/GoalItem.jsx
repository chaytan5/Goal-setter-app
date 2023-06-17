import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

function GoalItem({ goal }) {
	const dispatch = useDispatch();
	return (
		<div className="goal">
			<div>{new Date(goal.createdAt).toLocaleString("en-UK")}</div>
			<h3>{goal.text}</h3>
			<button className="close" onClick={() => dispatch(deleteGoal(goal._id))}>
				X
			</button>
		</div>
	);
}

export default GoalItem;
