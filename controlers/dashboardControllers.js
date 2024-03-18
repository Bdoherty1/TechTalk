const router = require('express').Router();
const { Dashboard } = require('../models/dashboard');

const getDashboardData = async (req, res) => {
  try {
    const dashboardData = await Dashboard.findAll();
    res.status(200).json(dashboardData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateDashboardData = async (req, res) => {
  try {
    const updatedData = await Dashboard.update(req.body, {
      where: { id: req.params.id }
    });
    res.status(200).json(updatedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteDashboardData = async (req, res) => {
  try {
    await Dashboard.destroy({ where: { id: req.params.id } });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getDashboardData,
  updateDashboardData,
  deleteDashboardData
};