import * as React            from 'react'
import { IndexRoute, Route } from 'react-router'
import { IRouteConfig      } from '~/models/route-config'
import { App               } from '~/components/App'
import { Home              } from './Home'
import { Experiments       } from './Experiments'
import { Styleguide        } from './Styleguide'
import { Aldine            } from './Aldine'

const config: IRouteConfig[] = [
  { path: '/',          title: 'Home',        component: Home        },
  { path: 'aldine',     title: 'Aldine',      component: Aldine      },
  { path: 'experiment', title: 'Experiments', component: Experiments },
  { path: 'style',      title: 'Styleguide',  component: Styleguide  },
]

const buildRoute = (route: IRouteConfig, i: number) => (
  (route.path === '/') ?
  <IndexRoute component={route.component} key={i} /> :
  <Route path={route.path} component={route.component} key={i} />
)

export default (
  <Route path='/' component={App(config)}>
    {config.map(buildRoute)}
  </Route>
)
