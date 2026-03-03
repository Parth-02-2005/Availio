import { z } from "zod";

export const CreateEventTypeBody = z.object({
    title: z.string().min(3),
    description: z.string().optional(),
    duration: z.number().int().positive(),
    location: z.string().optional(),
});

export const UpdateEventTypeBody = CreateEventTypeBody.partial();


//RESPONSE SCHEMA
export const EventTypeResponse = z.object({
    id: z.uuid(),
    userId: z.uuid(),
    title: z.string(),
    description: z.string().nullable(),
    duration: z.number(),
    isActive: z.boolean(),
    location: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export const EventTypeListResponse = z.array(EventTypeResponse);

export type EventTypeResponse = z.infer<typeof EventTypeResponse>

export const UserEventParamsSchema = z.object({
    id: z.uuid()
})