import Router from 'vue-router'

const dependencies = [
  '__container',
  'Vue',
  'HelloWorld'
]

function router(...injectedDependencies) {
  const [container] = injectedDependencies;

  const {
    HelloWorld,
    Vue
  } = container.buildDependencyMap(dependencies, injectedDependencies);

  Vue.use(Router);

  return new Router({
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      }
    ]
  });
}

router['@dependencies'] = dependencies;

export default {
  name: 'router',
  value: router
};