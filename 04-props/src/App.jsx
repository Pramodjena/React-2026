import React from "react";
import Card from "./components/card/Card";
import "./App.css";
import users from "./data.js";

const App = () => {
  function handleCount() {
    alert("You clicked follower");
  }

  return (
    <div className="container">
      {/* <Card
        name="Pramod"
        follower={3500}
        onClick={handleCount}
        src="https://media.licdn.com/dms/image/v2/D5603AQEa8qSsuRJaqw/profile-displayphoto-scale_400_400/B56ZrWWKocIYAg-/0/1764532729830?e=1779926400&v=beta&t=Zb5XggioCH6IDf1ZxvSNoCSMAf22M1jMOHW6KSIZOXE"
      />
      <Card
        name="Irish"
        follower={4200}
        onClick={handleCount}
        src="https://media.licdn.com/dms/image/v2/D5603AQH5qzniBPgp9w/profile-displayphoto-scale_400_400/B56ZsTdBiOHIAg-/0/1765557939724?e=1779926400&v=beta&t=VKKSXn0fJneRGS6kyLyO2Y3AzRV021q66rIR7nuNeeE"
      />
      <Card
        name="Swayam"
        follower={5100}
        onClick={handleCount}
        src="https://media.licdn.com/dms/image/v2/D4E03AQHxkUEflurL2w/profile-displayphoto-scale_400_400/B4EZneJ7wGHgAk-/0/1760368774853?e=1779926400&v=beta&t=Nc7o7Y88h8MmIA2iYDze641chfXycT5hP_cTEgruhms"
      /> */}

      {users.map((user) => (
        <Card
          key={user.id}
          name={user.name}
          follower={user.follower}
          image={user.image}
          onClick={() => handleCount(user.name)}
        />
      ))}
    </div>
  );
};

export default App;
