const express = require('express');
const router = express.Router();

// Mock Data
const mockData = {
  user: {
    name: 'John Doe',
    email: 'johndoe@example.com',
  },
  statistics: {
    posts: 35,
    followers: 500,
    following: 180,
  },
  recentActivities: [
    { activity: 'Liked a post', time: '2 minutes ago' },
    { activity: 'Followed Jane Smith', time: '1 hour ago' },
    { activity: 'Updated profile picture', time: '1 day ago' },
  ],
  fraudTransactions: [
    {
      transactionId: 'TX123456',
      amount: 200,
      status: 'Suspicious',
      date: '2024-12-06',
      description: 'Purchase from unrecognized merchant',
    },
    {
      transactionId: 'TX789012',
      amount: 500,
      status: 'Fraudulent',
      date: '2024-12-05',
      description: 'Unusual withdrawal from account',
    },
    {
      transactionId: 'TX345678',
      amount: 120,
      status: 'Suspicious',
      date: '2024-12-03',
      description: 'International transaction from new device',
    },
  ],
};

// Dashboard Route
router.get('/', (req, res) => {
  res.render('dashboard', { data: mockData });
});

module.exports = router;
