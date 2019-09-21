import Peoples from '@/views/Peoples/Peoples.route';
import Films from '@/views/Films/Films.route';
import PageNotFound from '@/components/PageNotFound';
let routes = [].concat(
  Peoples,
  Films,
  [{path: '*', component: PageNotFound}]
)

export default routes
