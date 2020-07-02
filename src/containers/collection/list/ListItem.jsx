import Card from 'src/components/core/card';

export default ({ expand, children,...rest }) => {

  return (
    <Card
      borderRadius={0}
      p={3}
      {...rest}
    >
      {children}
    </Card>
  );
};
