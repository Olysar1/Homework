import { DisplayIndividuals } from "./DisplayIndividuals";

export const DisplayItemInfo = (props) => {
  return (
    <div>
      <DisplayIndividuals head={true} item={props.name} />
      <img src={props.image} alt="yellow book" />
      <DisplayIndividuals item={props.author} />
      <DisplayIndividuals item={props.characters} />
      <DisplayIndividuals item={props.synopsis} />
      <button
        onClick={() => {
          props.logCharacters(props.name, props.characters);
        }}
      >
        Click Here
      </button>
    </div>
  );
};
