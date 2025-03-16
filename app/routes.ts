import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('/about', 'routes/about.tsx'),
    route('/service', 'routes/service.tsx'),
    route('/welcome', 'routes/react.tsx'),

] satisfies RouteConfig;
