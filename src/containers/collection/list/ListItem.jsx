import Card from 'src/components/core/card';

export default ({ expand, children,...rest }) => {

  return (
    <Card
      borderRadius={0}
      highlight
      my={expand ? 30 : -1}
      p={3}
      {...rest}
    >
      {children}
    </Card>
  );
};
