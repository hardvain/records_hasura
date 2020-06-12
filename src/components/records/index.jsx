import { createElement } from 'react';
import Task from './Task';
import Glucose from './Glucose';
import Water from './Water';
import Generic from './Generic';
import Activity from './Activity';
import Transaction from './Transaction';
import Nutrition from './Nutrition';

const RecordMap = {
  task: Task,
  glucose: Glucose,
  water: Water,
  generic: Generic,
  activity: Activity,
  transaction: Transaction,
  nutrition: Nutrition
};

export const RecordPreview = ({ record }) => {
  return createElement(RecordMap[record.recordType].Preview, {
    record,
  });
};

export const RecordForm = ({ record, setRecord, frozenType }) => {
  return createElement(RecordMap[frozenType || record.recordType].Form, {
    record,
    setRecord,
  });
};
