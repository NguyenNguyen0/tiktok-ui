import config from '~/config';

import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

import { HeaderOnly } from '~/layouts';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.search, component: Search },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
