const heading = React.createElement("h1", { id: "title" }, "Heading1");
const heading2 = React.createElement("h2", { id: "title" }, "Heading2");
const heading3 = React.createElement("h3", { id: "title" }, "Heading3");

const container = React.createElement("h1", { id: "container" }, [
  heading,
  heading2,
  heading3,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//   // passing a react element inside the root
root.render(container);
