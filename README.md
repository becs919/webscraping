###Web Scraping

Run: 'node scripts.js'

```js
  // Go to site: http://www.boulderblooms.com/
  // Click on Flowers button:
    // a[href='/flowers-category.asp'] img[src='/skins/983/graphics/Homepage/Flowerscategorybottom.jpg']
  // Wait to load
  // Click on Fresh button:
    // a[href='/boulder-florist/fresh-413004c.asp'] img[src='/skins/983/graphics/flowers/fresh.jpg']
  //Wait to load
  // Get all floral arrangement Names:
    // span.prodName
    // Return names:
  // evaluate(function () {
    // var nameNodes = document.querySelectorAll('span.prodName')
    // var list = [].slice.call(nameNodes);
    // return list.map(function(node){
    //   return node.innerText
  //   });
  // })
  // console.log list of arrangements on page as result! 
```
