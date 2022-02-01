import React from "react";

import "./Othello.scss";

const RoomInfo = ({ socket, room_id, room_status, player, spectator }) => {
  /**
   * room_info :
   * {
   *     room_id,
   *     room_status,
   *     player[[id,isready]...],
   *     spectator[...]
   * }
   * game_info :
   * {
   *     room_id,
   *     player[[id,isready]...],
   *     turn,
   *     board[8][8]
   * }
   */
  return (
    <div>
      <h1>{room_status}</h1>
      <div>
        player list :
        {player.map(([id, isready], idx) => {
          return (
            <div key={idx}>
              {id === socket.id ? (
                <>
                  <span>{id}(나)</span>&nbsp;
                  <span>{isready ? "ready" : "not ready"}</span>
                  <span onClick={() => socket.emit("ready")}>
                    &nbsp;준비하기&nbsp;
                  </span>
                </>
              ) : (
                <>
                  <span>{id}</span> &nbsp;
                  <span>{isready ? "ready" : "not ready"}</span>
                </>
              )}
            </div>
          );
        })}
      </div>
      <div>
        spectator list :
        {spectator.map((id, idx) => {
          return (
            <div key={idx}>
              <span>{id}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomInfo;
