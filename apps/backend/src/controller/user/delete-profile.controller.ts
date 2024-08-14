import { Response } from 'express';
import { RequestWithUser } from '../../types/auth-types';
import { ErrorResponse } from '../../utils/custom-error';
import { deleteUserService } from '../../services/user/delete-user.service';

export const deleteProfileController = async (
  req: RequestWithUser,
  res: Response,
) => {
  const userId = req.user?.id;

  if (!userId) {
    res.status(400).json({
      success: false,
      message: 'User ID is required',
    });
    return;
  }

  await deleteUserService(userId);

  res.status(200).json({
    success: true,
    message: 'Profile deleted successfully',
  });
};