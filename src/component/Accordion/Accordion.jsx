import { useState } from "react";
import Panel from "../Panel/Panel";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <h1 className="text-2xl font-bold my-10">Learn With Farhan Sharif</h1>
      <Panel
        title="paid Course"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nesciunt
        laboriosam rerum sint? Voluptatum mollitia ad aut quisquam, dignissimos
        consequuntur magnam? Ipsam quam, odit non adipisci commodi ullam totam
        possimus?
      </Panel>
      <Panel
        title="Free Course"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nesciunt
        laboriosam rerum sint? Voluptatum mollitia ad aut quisquam, dignissimos
        consequuntur magnam? Ipsam quam, odit non adipisci commodi ullam totam
        possimus?
      </Panel>
    </div>
  );
};

export default Accordion;
