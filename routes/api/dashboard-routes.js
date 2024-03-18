const router = require('express').Router();
const {
  getDashboardData,
  updateDashboardData,
  deleteDashboardData
} = require('../../controlers/dashboardControllers');

// /api/dashboard/
router.route('/')
  .get(getDashboardData)
  .put(updateDashboardData)
  .delete(deleteDashboardData);

module.exports = router;


