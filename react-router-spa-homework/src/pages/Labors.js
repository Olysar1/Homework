import { useParams } from "react-router-dom";
import lion from "../labor-images/lion.png";
import hydra from "../labor-images/hydra.png";
import cerberus from "../labor-images/cerberus.png";
import boar from "../labor-images/boar.png";

const labors = {
  laborOne: {
    title: "The Nemean Lion",
    text: " In the town of Nemea, there was an invincible lion that brought devastation and fear to the town. Hercules was ordered to slay the lion and bring back his skin. Hercules was able to use his brute strength and clever bravery to choke the lion to death and bring the skin to Eurystheus.",
    img: lion,
  },
  laborTwo: {
    title: "The Lernean Hydra",
    text: " Living in the swamp of the town of Lerna was a nine-headed serpent that would terrify the area. The hydra was venomous with one immortal head that could not be killed. Hercules set forth for Lerna with his nephew, Iolaus. With the help of Iolaus, Hercules was able to kill the nine-headed hydra.",
    img: hydra,
  },
  laborThree: {
    title: "The Erymanthian Boar",
    text: " Eurystheus ordered Hercules to bring him the wild boar from the mountain of Erymanthos. Hercules visited his friend and centaur, Pholos. The two ate and drank wine, which attracted other centaurs to the cave. Hercules killed the centaurs with his arrows, which would, unfortunately, be the downfall of Pholos.  Pholos picked up an arrow and questioned how it was so lethal when he inadvertently dropped the poisoned arrow on his foot and killed himself. Hercules discovered Pholos, buried him, and began hunting the boar. Hercules was able to drive the fearful boar into snow where he captured the boar in a net and brought the boar to Eurystheus.",
    img: boar,
  },
  laborFour: {
    title: "Cerberus",
    text: "The twelfth and final task was to capture the beast, Cerberus. Cerberus was a three-headed dog that guarded the gates of the underworld to keep the living world from entering. Knowing that he could not enter the underworld through this entrance, Hercules traveled through a deep cave to enter the underworld. Hercules battled many beasts and monsters throughout the underworld until he reached Hades. Hercules asked Hades if he could take the Cerberus to the surface. Hades agreed, only if Hercules could restrain the beat with his bare hands and no weapons. Hercules was able to subdue the Cerberus and take him to Eurystheus, who demanded he return the Cerberus to the underworld.",
    img: cerberus,
  },
};

const Labors = () => {
  const params = useParams();
  const item = labors[params.laborNum];

  if (!item)
    return (
      <div className="info-page-style">
        <h1>NOT FOUND</h1>
        <h3>No such entry found.</h3>
      </div>
    );

  return (
    <div className="info-page-style">
      <h1>{item.title}</h1>
      <h2>{item.text}</h2>
      <img src={item.img} alt="labor-image" />
    </div>
  );
};

export default Labors;
