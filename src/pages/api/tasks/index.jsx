import tasks from 'models/tasks';
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
    const createdTask = tasks.create(body);
    res.json(createdTask);
  } else if (req.method === 'GET') {
    const urlValue = url.parse(req.url);
    const qs = querystring.parse(urlValue.query);
    const results = await prisma.question.findMany({
      where: qs.name ? { name: { contains: qs.name } } : {},
      take: 20,
      skip: 0,
      include: { tags: true },
    });
    res.json(results);
  } else {
    res.statusCode = 405;
    res.end();
  }
};
