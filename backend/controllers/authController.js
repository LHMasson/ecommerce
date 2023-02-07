const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncErrors');

// Register a User => /api/v1/register
exports.registerUser = catchAsyncErrors( async (req, res, next) => {
    
    const { name, email, password } = req.body;


    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'avatars/a-atriz-zoe-saldana-como-neytiri-em-avatar-1493136439818_v2_4x3_wsujuz',
            url: 'https://res.cloudinary.com/dp1hdfrxt/image/upload/v1675775819/avatars/a-atriz-zoe-saldana-como-neytiri-em-avatar-1493136439818_v2_4x3_wsujuz.jpg'
        }
    })

    res.status(201)
})
