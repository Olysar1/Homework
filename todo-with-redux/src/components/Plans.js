import { useDispatch, useSelector } from "react-redux";
import { deletePlanAction, movePlanAction } from "../store/todo/plan.actions";

const Plans = () => {
  const planList = useSelector((state) => state.plan.planList);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePlanAction(id));
  };

  const handleButtons = (id) => {
    dispatch(movePlanAction(id));
  };

  return (
    <div className="plan-wrapper">
      <div>
        <h3>Planned</h3>
        {planList
          .filter((i) => !i.completed)
          .map((plan) => (
            <div key={plan.id}>
              <p>{plan.plan}</p>
              {plan.completed ? (
                <button onClick={() => handleButtons(plan.id)}>Undo</button>
              ) : (
                <button onClick={() => handleButtons(plan.id)}>Done</button>
              )}
              <button onClick={() => handleDelete(plan.id)}>Delete</button>
            </div>
          ))}
      </div>
      <div>
        <h3>Done</h3>
        {planList
          .filter((i) => i.completed)
          .map((plan) => (
            <div key={plan.id}>
              <p>{plan.plan}</p>
              {plan.completed ? (
                <button onClick={() => handleButtons(plan.id)}>Undo</button>
              ) : (
                <button onClick={() => handleButtons(plan.id)}>Done</button>
              )}
              <button onClick={() => handleDelete(plan.id)}>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Plans;
