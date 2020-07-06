const mongoose = require('mongoose');
const Shop = mongoose.model('shops');

module.exports = (app) => {

  app.get(`/api/shop`, async (req, res) => {
    let shops = await Shop.find();
    return res.status(200).send(shops);
  });

  app.post(`/api/shop`, async (req, res) => {
    let shop = await Shop.create(req.body);
    return res.status(201).send({
      error: false,
      shop
    })
  })

  app.put(`/api/shop/:id`, async (req, res) => {
    const {id} = req.params;
    let shop = await Shop.findByIdAndUpdate(id, req.body);
    return res.status(202).send({
      error: false,
      shop
    })
  });

  app.delete(`/api/shop/:id`, async (req, res) => {
    const {id} = req.params;
    let shop = await Shop.findByIdAndDelete(id);
    return res.status(202).send({
      error: false,
      shop
    })
  })
}