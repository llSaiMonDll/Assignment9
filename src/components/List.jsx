import React from "react";
import Card from "./Card";

const List = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <Card
          key={user.id}
          name={user.name}
          job={user.job}
          hobby={user.hobby}
        />
      ))}
    </div>
  );
};

export default List;