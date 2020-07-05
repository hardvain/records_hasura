import moment from 'moment';
const EASINESS_FACTOR = 2.5;
export const getNextRevisionDate = (snippet, currentEasiness) => {
  if (currentEasiness < 3) {
    return {
      due_date: moment(),
      interval: 0,
    };
  }
  let currentEasinessFactor =
    EASINESS_FACTOR +
    (0.1 - (5 - currentEasiness) * (0.08 + (5 - currentEasiness) * 0.02));
  currentEasinessFactor =
    currentEasinessFactor < 1.3 ? 1.3 : currentEasinessFactor;
  const attemptCount = snippet.checkins.length;
  if (attemptCount === 0) {
    return {
      due_date: moment(),
      interval: 0,
    };
  } else if (attemptCount === 1) {
    return {
      due_date: moment().add(6, 'days'),
      interval: 6,
    };
  } else {
    const interval = Math.ceil(
      snippet.checkins[attemptCount - 1].interval * currentEasinessFactor
    );
    return {
      due_date: moment().add(interval, 'days'),
      interval,
    };
  }
};
