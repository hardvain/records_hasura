import * as records from 'models/records';
import querystring from 'querystring';
import url from 'url';
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
export default async (req, res) => {
  if (req.method === 'PUT') {
    const { body } = req;
    const updatedRecord = await records.update(body);
    res.json(updatedRecord);
  } else if (req.method === 'GET') {
    const result = await records.get(req.query.id);
    res.json(result);
  } else {
    res.statusCode = 405;
    res.end();
  }
};
