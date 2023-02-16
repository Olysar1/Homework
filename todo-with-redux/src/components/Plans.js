import { useDispatch, useSelector } from "react-redux";
import { deletePlan, movePlan } from "../store/todo/planSlice";
import { selectorPlans } from "../store/todo/planSlice";

const Plans = () => {
  const planList = useSelector(selectorPlans);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePlan(id));
  };

  const handleButtons = (id) => {
    dispatch(movePlan(id));
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
