import { withPrivate, withProfileConnect } from '../../hocHelppers';

import ProfilePage from '../../containers/ProfilePage';
import TestsPage from '../../containers/TestsPage';

const PrivateProfilePage = withProfileConnect(withPrivate(ProfilePage));
const PrivateTestsPage = withProfileConnect(withPrivate(TestsPage));

export {
  PrivateProfilePage,
  PrivateTestsPage,
};
