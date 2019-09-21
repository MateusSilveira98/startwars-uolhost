import Peoples from '@/views/Peoples/Peoples.route';
import PageNotFound from '@/components/PageNotFound';
let routes = [].concat(
  Peoples,
  [{path: '*', component: PageNotFound}]
)

export default routes
