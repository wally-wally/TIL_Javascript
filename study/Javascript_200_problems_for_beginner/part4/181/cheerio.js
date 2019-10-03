const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');

fs.readFile('./example.html', (err, data) => {
  if (err) return console.log(err);

  const $ = cheerio.load(data);

  console.log($('#body', '#html').find('li').length);
  console.log($('.son', '#people').text());
});

request('https://ko.wikipedia.org/wiki/HTML', (err, res, html) => {
  if (err) return console.log(err);
  if (res && res.statusCode >= 400) return console.log(res.statusCode);

  const $ = cheerio.load(html);
  console.log($('div[class=toc]').children().find('a').text());
});

