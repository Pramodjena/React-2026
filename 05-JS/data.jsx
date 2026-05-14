// JSX ->  JavaScript XML
// JSX is a syntax extension that lets you write HTML-like code inside JavaSCript. It's primarily used in react.

// Vanila js

// function createElementsJS() {
//   const h1 = document.createElement("h1");
//   const p = document.createElement("p");

//   h1.setAttribute("class", "heading");
//   const body = document.querySelector("body");
//   body.append(h1, p);
// }

// createElementsJS();   // function call

// Using jsx:
// First character : uppercase
// jsx must return(<div>  </div>);
// jsx call : <CreateElementsJS/>
function CreateElementsJS() {
  return (
    <>
      <div className="conatiner">
        <h1>Heading</h1>
        <p>Paragraph</p>
      </div>
      <div className="conatiner">
        <h1>Heading</h1>
        <p>Paragraph</p>
      </div>
    </>
  );
}

<CreateElementsJS />;
