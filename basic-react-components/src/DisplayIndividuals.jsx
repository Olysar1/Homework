export const DisplayIndividuals = (props) => {
  if (props.head) {
    return (
      <div>
        <h1>{props.item}</h1>
      </div>
    );
  } else if (Array.isArray(props.item)) {
    return (
      <div>
        {" "}
        Characters are:
        {props.item.map((character, index) => {
          return <span key={index}>{" " + character}</span>;
        })}
      </div>
    );
  } else {
    return (
      <div>
        <span>{props.item}</span>
        <br />
      </div>
    );
  }
};
