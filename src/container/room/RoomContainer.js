import React from "react";

const RoomContainer = ({ socket, room_list }) => {
  const createRoom = () => socket.emit("create_room");

  const joinRoom = (room_id) => socket.emit("join_room", { room_id });

  return (
    <div>
      <div onClick={createRoom}>방 만들기</div>
      {room_list.map(({ room_id, room_status }, idx) => (
        <div onClick={() => joinRoom(room_id)} key={idx}>
          <span> 상태 : {room_status}</span>
          <span> 방id : {room_id}</span>
        </div>
      ))}
    </div>
  );
};

export default RoomContainer;
