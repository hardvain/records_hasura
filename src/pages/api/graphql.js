export default async (req, res) => {
  if (req.method === 'POST') {
    const { body } = req;
    const response = await fetch(
      'https://records-app-graphql.herokuapp.com/v1/graphql',
      { method: 'POST', body: body.query }
    ).then((r) => r.json());
    res.json(response);
  } else {
    res.statusCode = 405;
    res.end();
  }
};
