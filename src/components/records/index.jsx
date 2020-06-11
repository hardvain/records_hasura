import { createElement } from 'react';
import Task from './Task';
import BloodGlucose from './BloodGlucose';
import WaterConsumption from './WaterConsumption';
import Generic from './Generic';
import Activity from './Activity';

const RecordMap = {
  task: Task,
  glucose: BloodGlucose,
  water: WaterConsumption,
  generic: Generic,
  activity: Activity,
};

export const RecordPreview = ({ recordData, refetch }) => {
  return createElement(RecordMap[recordData.recordType], {
    recordData,
    refetch,
  });
};
