import { Router } from 'express';

import {
    register,
    verifyEmail,
    login,
    logout,
    uploadAvatar,
    removeImageFromCloudinary,
    updateInfoUser,
    forgotPassword,
    verifyForgotPasswordOtp,
    resetPassword,
    refreshToken,
    getUserDetails,
    checkLogin,
    checkIsRefreshToken,
    changePassword,
    updateAddress,
} from '../controllers/StaffController.js';
import { verifyAccessToken } from '../ middlewares/verifyToken.js';
import upload from '../ middlewares/multer.js';

const staffRouter = Router();

staffRouter.post('/register', register);
staffRouter.post('/verify-email', verifyEmail);
staffRouter.post('/login', login);
staffRouter.post('/logout', verifyAccessToken, logout);
staffRouter.put('/avatar', verifyAccessToken, upload.single('avatar'), uploadAvatar);
staffRouter.delete('/delete-image', verifyAccessToken, removeImageFromCloudinary);
staffRouter.put('/update-info', verifyAccessToken, updateInfoUser);
staffRouter.post('/forgot-password', forgotPassword);
staffRouter.post('/verify-forgot-password', verifyForgotPasswordOtp);
staffRouter.post('/reset-password', resetPassword);
staffRouter.post('/change-password', verifyAccessToken, changePassword);
staffRouter.get('/refreshToken', refreshToken);
staffRouter.get('/user-details', verifyAccessToken, getUserDetails);
staffRouter.get('/check-login', verifyAccessToken, checkLogin);
staffRouter.get('/checkIsRefreshToken', verifyAccessToken, checkIsRefreshToken);

// ADDRESS
staffRouter.put('/update-address', verifyAccessToken, updateAddress);

export default staffRouter;
