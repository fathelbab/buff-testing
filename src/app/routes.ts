import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default [
  route("/", "./routes/Home.tsx"),
  route("/Login", "./routes/Login.tsx"),

  ...(await flatRoutes()),
] satisfies RouteConfig;