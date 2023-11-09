const db = require('../utils/db');

module.exports = {
  // all: _ => db.load('select * from categories'),
  all: _ => "",
  allWithDetails: _ => {
    return;
    const sql = `
      select c.CatID, c.CatName, count(p.ProID) as num_of_products
      from categories c left join products p on c.CatID = p.CatID
      group by c.CatID, c.CatName
    `;
    return db.load(sql);
  },

  single: async id => {
    return;
    const sql = `select * from categories where CatID = ${id}`;
    const rows = await db.load(sql);
    if (rows.length === 0)
      return null;

    return rows[0];
  },

  add: entity => db.add(entity, 'categories'),
  del: id => db.del({ CatID: id }, 'categories'),
  patch: entity => {
    return;
    const condition = { CatID: entity.CatID };
    delete entity.CatID;
    return db.patch(entity, condition, 'categories');
  }
};
