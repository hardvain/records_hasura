import Div from './Div';

export default ({ children }) => {
  return (
    <Div
      borderWidth={1}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.005 }}
    >
      {children}
    </Div>
  );
};
