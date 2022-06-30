
var test1 = "
SELECT i1.*
FROM item i1
LEFT OUTER JOIN item i2
  ON (i1.category_id = i2.category_id AND i1.item_id < i2.item_id)
GROUP BY i1.item_id
HAVING COUNT(*) < 4
ORDER BY category_id, date_listed;
"


var test2 = `
SELECT i1.*
FROM item i1
LEFT OUTER JOIN item i2
  ON (i1.category_id = i2.category_id AND i1.item_id < i2.item_id)
GROUP BY i1.item_id
HAVING COUNT(*) < 4
ORDER BY category_id, date_listed;
`




