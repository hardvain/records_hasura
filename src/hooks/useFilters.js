import { useState } from 'react';

export default () => {
  const [filters, setFilters] = useState({});
  const [fields, setFields] = useState([]);

  const and = (filter) => {
    setFields([...fields,"and"])
  };

  const or = (filter) => {
    setFilters({ _or: [...filters, filter] });
  };

  const not = (filter) => {
    setFilters({ _not: [...filters, filter] });
  };

  const valueOf = (fieldName) => {
    return fields[fieldName];
  };
  const set = (fieldName, value) => {
    const reversedFields = fields.reverse();
    const [last, ...initialReversed] = reversedFields;
    const updatedLast = { ...last };
    updatedLast[fieldName] = value;
    setFields([...initialReversed.reverse(), updatedLast]);
  };

  return { fields, valueOf, and, or, not, set };
};
