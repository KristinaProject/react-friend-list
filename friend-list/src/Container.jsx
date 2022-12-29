import { Friends } from "./Friends";

export function Container(props) {
  return (
    <>
      <div className="container d-flex flex-wrap">
        {props.friends.map((friend) => (
          <Friends
            friend={friend}
            deleteClick={() => props.onClick(friend.id)}
            key={friend.id}
            editValues={props.editValues}
          />
        ))}
      </div>
    </>
  );
}
