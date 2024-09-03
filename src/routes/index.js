import routes from '~/config/routes';

import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

import { HeaderOnly } from '~/components/Layouts';

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.following, component: Following },
    { path: routes.profile, component: Profile },
    { path: routes.search, component: Search },
    { path: routes.upload, component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
