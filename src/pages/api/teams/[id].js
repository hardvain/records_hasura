import * as teams from 'src/models/teams';
import querystring from 'querystring';
import url from 'url';
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
export default async (req, res) => {
  if (req.method === 'PUT') {
    const { body, query } = req;
    const updatedRecord = await teams.update(query.id,JSON.parse(body));
    res.json(updatedRecord);
  } else if (req.method === 'GET') {
    const result = await teams.get(req.query.id);
    res.json(result);
  } else if (req.method === 'DELETE') {
    const result = await teams.del(req.query.id);
    res.json(result);
  } else {
    res.statusCode = 405;
    res.end();
  }
};
