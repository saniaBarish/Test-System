import { withPrivate, withProfileConnect } from '../../hocHelppers';

import ProfilePage from '../../containers/ProfilePage';
import TestsPage from '../../containers/TestsPage';
import CreateTestPage from '../../containers/CreateTestPage';

const PrivateProfilePage = withProfileConnect(withPrivate(ProfilePage));
const PrivateTestsPage = withProfileConnect(withPrivate(TestsPage));
const PrivateCreateTestPage = withProfileConnect(withPrivate(CreateTestPage));

export {
  PrivateProfilePage,
  PrivateTestsPage,
  PrivateCreateTestPage,
};
