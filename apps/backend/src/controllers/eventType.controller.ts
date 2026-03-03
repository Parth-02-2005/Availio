import { Request, Response } from "express";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { createRouter } from "../config/router.handler";
import {
  CreateEventTypeBody,
  UpdateEventTypeBody,
  EventTypeResponse,
  EventTypeListResponse,
  UserEventParamsSchema
} from "../schema/eventType.schema";

import{
    createUserEvent,
    deleteUserEvent,
    getAllUserEvents,
    getUserEventById,
    updateUserEvent
} from "../services/eventType.service";

export const userEventsController = createRouter();
export const userEventsRegistry = new OpenAPIRegistry();


// Swagger Documentation
// Create
userEventsRegistry.registerPath({
    method: "post",
    path: "/api/v1/user-events",
    summary: "Create a new User Event",
    tags: ["User Events"],
    request: {
        body: {
            content: {
                "application/json": {
                    schema: CreateEventTypeBody
                },
            },
        },
    },
    responses: {
        201: {
            description: "Event Type created successfully",
            content: {
                "application/json": {
                    schema: EventTypeResponse,
                },
            },
        },
    },
})

// Get all Users
userEventsRegistry.registerPath({
  method: "get",
  path: "/api/v1/user-events",
  summary: "Get all User Events",
  tags: ["User Events"],
  responses: {
    200: {
      description: "List of User Events",
      content: {
        "application/json": {
          schema: EventTypeListResponse,
        },
      },
    },
  },
});

// Get User by Id
userEventsRegistry.registerPath({
  method: "get",
  path: "/api/v1/user-events/{id}",
  summary: "Get User Event by ID",
  tags: ["User Events"],
  request: {
    params: UserEventParamsSchema
  },
  responses: {
    200: {
      description: "User Event details",
      content: {
        "application/json": {
          schema: EventTypeResponse,
        },
      },
    },
  },
});

// Update user events
userEventsRegistry.registerPath({
  method: "patch",
  path: "/api/v1/user-events/{id}",
  summary: "Update User Event",
  tags: ["User Events"],
  request: {
    params: UserEventParamsSchema,
    body: {
      content: {
        "application/json": {
          schema: UpdateEventTypeBody,
        },
      },
    },
  },
  responses: {
    200: {
      description: "User Event updated successfully",
      content: {
        "application/json": {
          schema: EventTypeResponse,
        },
      },
    },
  },
});

// Delete User
userEventsRegistry.registerPath({
  method: "delete",
  path: "/api/v1/user-events/{id}",
  summary: "Delete User Event",
  tags: ["User Events"],
  request: {
        params: UserEventParamsSchema
    },
  responses: {
    200: {
      description: "User Event deleted successfully",
    },
  },
});



// Routes
userEventsController.post('/', async (req: Request, res: Response) => {
    const parsed = CreateEventTypeBody.parse(req.body);
    try {
        const data = await createUserEvent(parsed);
        return res.status(201).json(data);
    } catch (error) {
        console.error(error);
        throw error
    }
})

userEventsController.get('/', async (req: Request, res: Response) => {
    try {
        const data = await getAllUserEvents();
        return res.status(201).json(data);
    } catch (error) {
        console.error(error);
        throw error
    }
})

userEventsController.get('/:id', async (req: Request, res: Response) => {
    let { id } = UserEventParamsSchema.parse(req.params);
    try {
        const data = await getUserEventById(id);
        return res.status(201).json(data);
    } catch (error) {
        console.log(error)
        throw error
    }
})

userEventsController.patch("/:id", async (req, res) => {
  const parsed = UpdateEventTypeBody.parse(req.body);
  let { id } = UserEventParamsSchema.parse(req.params);
  try {
    const data = await updateUserEvent(id, parsed);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error)
    throw error
  }
});

userEventsController.delete("/:id", async (req, res) => {
    let { id } = UserEventParamsSchema.parse(req.params);
    await deleteUserEvent(id);
    return res.status(200).json({
        status: "success",
        message: "User Event deleted successfully",
    });
});
