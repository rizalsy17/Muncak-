// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import addDummyMemberData from "./dummyMember";
import addDummyEquipmentData from "./dummyEquipment";

const addDummyData = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const run = async () => {
      try {
        const memberRefs = await addDummyMemberData();
        await addDummyEquipmentData(memberRefs);
        console.log("All dummy data added successfully.");
      } catch (error) {
        console.error("Error running dummy data script:", error);
      }
    };

    run();
  }, []);

  return (
    <div>
      <h1>Adding Dummy Data...</h1>
      <p>Check the console for status updates.</p>
    </div>
  );
};

export default addDummyData;
