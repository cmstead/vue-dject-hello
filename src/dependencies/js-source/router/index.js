router['@dependencies'] = [
  'HelloWorld',
  'Router',
  'Vue'
];

function router({
  HelloWorld,
  Router,
  Vue
}) {
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

export default {
  name: 'router',
  value: router
};