import { useCustomDispatch, useCustomSelector } from "../store/hooks";
import { deletePlan, movePlan, selectorPlans } from "../store/planSlice";

export const Plans = () => {
  const planList = useCustomSelector(selectorPlans);
  const dispatch = useCustomDispatch();

  const handleDelete = (id: string): void => {
    dispatch(deletePlan(id));
  };

  const handleButtons = (id: string): void => {
    dispatch(movePlan(id));
  };

  interface PlanObjType {
    plan: string;
    isDone: boolean;
    id: string;
  }

  return (
    <div className="plan-wrapper">
      <div>
        <h3>Planned</h3>
        {planList
          .filter((item: PlanObjType) => !item.isDone)
          .map((item: PlanObjType) => (
            <div key={item.id}>
              <p>{item.plan}</p>
              {item.isDone ? (
                <button onClick={() => handleButtons(item.id)}>Undo</button>
              ) : (
                <button onClick={() => handleButtons(item.id)}>Done</button>
              )}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          ))}
      </div>
      <div>
        <h3>Done</h3>
        {planList
          .filter((item: PlanObjType) => item.isDone)
          .map((item: PlanObjType) => (
            <div key={item.id}>
              <p>{item.plan}</p>
              {item.isDone ? (
                <button onClick={() => handleButtons(item.id)}>Undo</button>
              ) : (
                <button onClick={() => handleButtons(item.id)}>Done</button>
              )}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
};
