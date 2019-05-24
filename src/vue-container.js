import module0 from '../src/dependencies/js-source/raw-data/EcosystemLinks';
import module1 from '../src/dependencies/js-source/raw-data/EssentialLinks';
import module2 from '../src/dependencies/js-source/router/index';
import module3 from '../src/dependencies/js-source/wrapped-modules/vue';
import module4 from '../src/dependencies/js-source/wrapped-modules/vueRouter';
import module5 from '../src/dependencies/vue-source/components/App.vue';
import module6 from '../src/dependencies/vue-source/components/HelloWorld.vue';
import module7 from '../src/dependencies/vue-source/components/LinkList.vue';


const container = window.dject.new({
    dependenciesAsObject: true
});


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

container.copyProps(module7.value, module7);
container.register(module7.value, module7.name);


window.appContainer = container;

export default container;