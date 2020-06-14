import { useState } from 'react';
import ProgressBar from 'react-customizable-progressbar'
import Card from 'src/components/Card';
export default () => {
  return (
    <Card>
      <ProgressBar
        progress={60}
        radius={100}
      />
    </Card>
  );
};
