function customRender(reactElement, container) {
  /*
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  container.appendChild(domElement);*/

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const props in reactElement.props) {
    if (props === "children") continue;
    const element = reactElement.props[props];
    domElement.setAttribute(props, element);
  }

  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const mainContainer = document.getElementById("root");
customRender(reactElement, mainContainer);
