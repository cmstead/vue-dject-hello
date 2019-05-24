const dependencies = ["__container"];

function LinkList({
    __container
}) {
    const componentDefinition = {
        name: "LinkList",
        props: ["linkData"],
        data() {
            return {};
        }
    };

    return __container.copyProps(componentDefinition, LinkList);
}

LinkList["@dependencies"] = dependencies;

export default {
    name: "LinkList",
    value: LinkList
};