const express = require("express");
const router = express.Router();
const recipie= require("../models/recipie");
const verifyToken = require("../middleware/authMiddleware")

router.get("/home",verifyToken, async (req, res) => {
  const details = await courses.find({});
  res.json(details);
});

router.post("/recipie", async (req, res) => {
    try {
      const data = req.body;
      const result = await recipie.create(data);
      res.status(201).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json();
    }
  });

  router.get('/recipies', async (req, res) => {
    try {
      const recipes = await recipie.find();
      res.status(200).json(recipes);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch recipes' });
    }
  });

module.exports = router;