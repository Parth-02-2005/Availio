import { z } from 'zod';
import { getPrismaClient } from "../handlers/database.handler";
import {
  CreateEventTypeBody,
  UpdateEventTypeBody,
  EventTypeResponse,
  EventTypeListResponse
} from "../schema/eventType.schema";
import { NotFoundError } from '../classes/AppError';

const DUMMY_USER_ID = "cabda96e-650a-40eb-8aca-2bb355fc079a";


export const createUserEvent = async (data: z.infer<typeof CreateEventTypeBody>) => {
    const db = getPrismaClient();

    const event = await db.userEvents.create({
    data: {
      ...data,
      userId: DUMMY_USER_ID,
        },
    });
    
    return EventTypeResponse.parse(event);
}

export const getAllUserEvents = async () => {
  const db = getPrismaClient();

 const events = await db.userEvents.findMany({
    where: {
      userId: DUMMY_USER_ID,
      deletedAt: null,
    },
    orderBy: {
      createdAt: "desc",
    }
  });

  return EventTypeListResponse.parse(events);
}

export const getUserEventById = async (id: string) => {
  const db = getPrismaClient();

  const event = await db.userEvents.findFirst({
    where: {
      id, 
      userId: DUMMY_USER_ID,
      deletedAt: null,
    }
  });

  // console.log(event);

  if(!event) throw new NotFoundError("UserEvent not found");

  return EventTypeResponse.parse(event);
}

export const updateUserEvent = async (id: string, data: z.infer<typeof UpdateEventTypeBody>) => {
  const db = getPrismaClient();

  const existing = await db.userEvents.findFirst({
    where: {
      id,
      userId: DUMMY_USER_ID,
      deletedAt: null,
    },
  });

  // console.log(existing);

  if (!existing) {
    throw new NotFoundError("UserEvent not found");
  }

  const updated = await db.userEvents.update({
    where: { id },
    data,
  });

  return EventTypeResponse.parse(updated);
}

export const deleteUserEvent = async(id: string) => {
  const db = getPrismaClient();

  const existing = await db.userEvents.findFirst({
    where: {
      id,
      userId: DUMMY_USER_ID,
      deletedAt: null,
    },
  });

  if (!existing) {
    throw new NotFoundError("UserEvent not found");
  }

  await db.userEvents.update({
    where: { id },
    data: {
      deletedAt: new Date(),
    },
  });

  return;
}