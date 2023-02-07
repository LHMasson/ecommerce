const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncErrors');

// Register a User => /api/
