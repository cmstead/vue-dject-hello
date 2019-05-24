const dependencies = ["__container"];

function App({ __container }) {
  return __container.copyProps(
    {
      name: "App"
    },
    App
  );
}

App["@dependencies"] = dependencies;

export default {
  name: "App",
  value: App
};