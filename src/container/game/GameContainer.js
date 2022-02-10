import React from "react";

import { Paper } from '@mui/material';

import Othello from "./Othello";
import RoomInfo from "./RoomInfo";

const GameContainer = ({ socket, room_info, game_info }) => {
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
      <h1 style={{textAlign: "center"}}>
        자람 오델로 AI 대전 🏆 
      </h1>
      <Paper elevation={5} justifyContent="center" style={{ padding: '20px', textAlign:"center"}}>
        <Othello socket={socket} {...game_info} />
        <br/>
        <RoomInfo socket={socket} {...room_info} turn={game_info.turn}/>
      </Paper>
      * {room_info.room_id}번 방 {room_info.room_status}
    </div>
  );
};

export default GameContainer;
