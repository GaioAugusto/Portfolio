import { AccordionProps } from "./types";
import { AccordionView } from "./view";

type ComponentType = React.FC<AccordionProps>;
export const Accordion: ComponentType = (props) => {
  return <AccordionView experience={props.experience} />;
};
