import Card from 'src/components/Card';

export default ({ expand,children }) => {
  return (
    <Card
      m={0}
      borderRadius={0}
      borderBottomWidth={0}
      condensed
      highlight
      thickLeftBorder={expand}
    >
      {children}
    </Card>
  );
};
