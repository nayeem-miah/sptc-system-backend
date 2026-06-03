import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { ProjectRoutes } from "../modules/project/project.route";
import { ActivityLogRoutes } from "../modules/activityLog/activityLog.route";

const router = Router();

router.use("/users", UserRoutes);
router.use("/auth", AuthRoutes);
router.use("/projects", ProjectRoutes);
router.use("/activities", ActivityLogRoutes);





export default router;