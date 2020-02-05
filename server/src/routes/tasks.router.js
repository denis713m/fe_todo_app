import express        from 'express';
import taskController from './../controllers/task.controller.js';

const tasksRouter = express.Router();

tasksRouter.get( '',
                 /*createQueryOptions,*/
                 taskController.getTasks
);

export default tasksRouter;
