/* eslint-disable react/prop-types */
const TodoItem = ({
	task: { _id, title, description, isCompleted },
	updateHandler,
	deleteHandler,
}) => {
	return (
		<div className="todo">
			<div>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
			<div>
				<input
					type="checkbox"
					checked={isCompleted}
					onChange={() => updateHandler(_id)}
				/>
				<button className="btn" onClick={() => deleteHandler(_id)}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default TodoItem;
