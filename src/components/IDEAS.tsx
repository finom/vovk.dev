/* eslint-disable */
// @ts-nocheck
// ideas

import type { VovkControllerBody } from 'vovk';
import type UserController from './UserController';
import prisma from '@/prisma';

export default class UserService {
  static updateUser = (id: string, data: VovkControllerBody<typeof UserController.updateUser>) =>
    prisma.user.update({ where: { id }, data });
}

// -------

import type { User } from '@prisma/client';
import UserService from './UserService';
import { prefix, patch, type VovkRequest } from 'vovk';

@prefix('users')
export default class UserController {
  @patch('{id}')
  static updateUser = async (req: VovkRequest<Omit<User, 'id'>>, { id }: { id: string }) =>
    UserService.updateUser(id, await req.json());
}

// -------

import UserController from '../../modules/user/UserController';

const controllers = {
  UserRPC: UserController,
};

export type Controllers = typeof controllers;

export const { GET, POST, PATCH } = initSegment({
  emitSchema: true,
  controllers,
});

// backend

export function GET(req: NextRequest) {
  return handle(req);
}

export function POST(req: NextRequest) {
  return handle(req);
}

export function PATCH(req: NextRequest) {
  return handle(req);
}

// frontend
fetch(`/api/users/${id}`, {
  method: 'PATCH',
  body: JSON.stringify(body),
});

// -------

import { UserRPC } from 'vovk-client';

const user = await UserRPC.updateUser({
  params: { id },
  body,
});
