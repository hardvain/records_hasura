import Card from 'src/components/Card';

export default ({ expand, children }) => {
  return (
    <Card
      py={1}
      borderRadius={0}
      highlight
      my={expand ? 15 : -1}
      shadow={expand ? 'md' : 'none'}
    >
      {children}
    </Card>
  );
};
