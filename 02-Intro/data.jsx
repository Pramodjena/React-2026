// JSX (JavaScript XML)
// Short definition: JSX is a syntax extension that lets you write HTML-like code directly inside JavaScript. It's primarily used with React.

// create element in vanila js
const h1 = document.createElement("h1");
const body = document.querySelector("body");
h1.setAttribute("id", "heading");
body.append(h1);


// using jsx :
function App() {
  return <h1 id="heading">Hello World!</h1>;
}

<App />;
