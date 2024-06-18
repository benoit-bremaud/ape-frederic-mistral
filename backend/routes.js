// backend/routes.js
const express = require('express');
const router = express.Router();
const Member = require('./models/member');

// Route de test
router.get('/test', (req, res) => {
  res.json({ message: 'API is working' });
});

// Routes pour les membres
router.get('/members', async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

// Route pour ajouter un membre
router.post('/members', async (req, res) => {
  const newMember = new Member(req.body);
  await newMember.save();
  res.json(newMember);
});

// Route pour supprimer un membre
router.delete('/members/:id', async (req, res) => {
  await Member.findByIdAndDelete(req.params.id);
  res.json({ message: 'Member deleted' });
});

// Route pour modifier un membre
router.put('/members/:id', async (req, res) => {
  const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedMember);
});

module.exports = router;
