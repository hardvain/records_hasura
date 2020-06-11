import { createElement } from 'react';
import TaskPreview from './Task/Preview';
import GlucosePreview from './Glucose/Preview';
import WaterPreview from './Water/Preview';
import GenericPreview from './Generic/Preview';
import ActivityPreview from './Activity/Preview';

const RecordMap = {
  task: TaskPreview,
  glucose: GlucosePreview,
  water: WaterPreview,
  generic: GenericPreview,
  activity: ActivityPreview,
};

export const RecordPreview = ({ recordData }) => {
  return createElement(RecordMap[recordData.recordType], {
    recordData,
  });
};
