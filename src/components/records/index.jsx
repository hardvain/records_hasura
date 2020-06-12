import { createElement } from 'react';
import Task from './Task';
import Glucose from './Glucose';
import Water from './Water';
import Generic from './Generic';
import Activity from './Activity';

const RecordMap = {
  task: Task,
  glucose: Glucose,
  water: Water,
  generic: Generic,
  activity: Activity,
};

export const RecordPreview = ({ record }) => {
  return createElement(RecordMap[record.recordType].Preview, {
    record,
  });
};

export const RecordForm = ({ record, setRecord }) => {
  return createElement(RecordMap[record.recordType].Form, {
    record,
    setRecord,
  });
};
