import module0 from '../src/dependencies/App.vue';
import module1 from '../src/dependencies/components/HelloWorld.vue';
import module2 from '../src/dependencies/components/LinkList.vue';
import module3 from '../src/dependencies/raw-data/EcosystemLinks';
import module4 from '../src/dependencies/raw-data/EssentialLinks';
import module5 from '../src/dependencies/router/index';
import module6 from '../src/dependencies/wrapped-modules/vue';


const container = window.dject.new({});


container.copyProps(module0.value, module0);
container.register(module0.value, module0.name);

container.copyProps(module1.value, module1);
container.register(module1.value, module1.name);

container.copyProps(module2.value, module2);
container.register(module2.value, module2.name);

container.copyProps(module3.value, module3);
container.register(module3.value, module3.name);

container.copyProps(module4.value, module4);
container.register(module4.value, module4.name);

container.copyProps(module5.value, module5);
container.register(module5.value, module5.name);

container.copyProps(module6.value, module6);
container.register(module6.value, module6.name);


window.appContainer = container;

export default container;