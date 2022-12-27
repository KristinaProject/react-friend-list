import { Friends } from "./Friends";

export function Container(props) {
  
  return (
    <>
      <div className="container d-flex flex-wrap">
        {props.friends.map((friend) => (
          <Friends
            name={friend.name}
            surname={friend.surname}
            city={friend.city}
            age={friend.age}
            deleteClick={() => props.onClick(friend.id)}
            key={friend.id}
          />
        ))}
      </div>
    </>
  );
}