import Card from 'src/components/Card';

export default ({ expand, children }) => {
  return (
    <Card
      borderRadius={0}
      highlight
      my={expand ? 30 : -1}
      shadow={expand ? 'md' : 'none'}
    >
      {children}
    </Card>
  );
};
