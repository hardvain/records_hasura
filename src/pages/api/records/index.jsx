import * as records from 'models/records';
import querystring from 'querystring';
import url from 'url';
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
export default async (req, res) => {
  if (req.method === 'POST') {
    const { body } = req;
    const createdTask = await records.create(body);
    res.json(createdTask);
  } else if (req.method === 'GET') {
    const urlValue = url.parse(req.url);
    const qs = querystring.parse(urlValue.query);
    const result = await records.getAll(qs);
    res.json(result);
  } else {
    res.statusCode = 405;
    res.end();
  }
};
