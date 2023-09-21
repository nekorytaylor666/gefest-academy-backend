import { UserRole, type User } from '@prisma/client';
import prisma from '@/lib/prisma';
import LogMessage from '@/decorators/log-message.decorator';

export default class UserService {
  @LogMessage<[User]>({ message: 'Auth0-PostReg-UserCreate-Callback' })
  public async createUser(data: User) {
    const user = await prisma.user.create({
      data: {
        email: data.email,
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
        createdAt: new Date(),
        updatedAt: new Date(),
        role: UserRole.USER,
      },
    });
    return user;
  }
}
