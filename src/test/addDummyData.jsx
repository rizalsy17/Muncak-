// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import addDummyUserData from './dummyUsers';
import addDummyPlanningData from './dummyPlanning';
import addDummyMemberData from './dummyMember';
import addDummyEquipmentData from './dummyEquipment';

const addDummyData = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const run = async () => {
      try {
        const userRefs = await addDummyUserData();
        const planningRefs = await addDummyPlanningData();
        const memberRefs = await addDummyMemberData(userRefs, planningRefs);
        await addDummyEquipmentData(memberRefs, planningRefs);
        console.log('All dummy data added successfully.');
      } catch (error) {
        console.error('Error running dummy data script:', error);
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
