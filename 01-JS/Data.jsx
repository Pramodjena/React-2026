// JSX ->  JavaScript XML
// JSX is a syntax extension that lets you write HTML-like code inside JavaSCript. It's primarily used in react.

// Vanila JS :

// function createElements() {
//   const h1 = document.createElement("h1");
//   const p = document.createElement("p");

//   h1.setAttribute("id", "heading");

//   const body = document.querySelector("body");
//   body.append(h1, p);
// }

//1. first letter uppercase
//2. return( <div> <h1> Heading </h1> </div>)

export function Data() {
  return (
    <>
      <div className="conatiner">
        <h1>Heading </h1>
      </div>
      <div className="conatiner">
        <h1>Heading </h1>
        <img src="" alt="" />
      </div>
    </>
  );
}

<Data />;
