import * as projects from 'src/models/projects';
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
    const createdRecord = await projects.create(body);
    res.json(createdRecord);
  } else if (req.method === 'GET') {
    const result = await projects.getAll();
    res.json(result);
  } else {
    res.statusCode = 405;
    res.end();
  }
};
