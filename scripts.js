var Nightmare = require('nightmare');
var nightmare = Nightmare({  show: true });

nightmare
  .viewport(1200, 1200)
  .goto('http://www.boulderblooms.com/')
  .wait(1000)
  .click('a[href=\'/flowers-category.asp\'] img[src=\'/skins/983/graphics/Homepage/Flowerscategorybottom.jpg\']')
  .wait(1000)
  .click('a[href=\'/boulder-florist/fresh-413004c.asp\'] img[src=\'/skins/983/graphics/flowers/fresh.jpg\']')
  .evaluate(function () {
    var nameNodes = document.querySelectorAll('span.prodName')
    var list = [].slice.call(nameNodes);
    return list.map(function(node){
      return node.innerText
    });
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error("No flowers here ", error);
  });
