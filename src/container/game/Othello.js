import React from "react";

import "./Othello.scss";

const Othello = ({ socket, room_id, player, turn, board }) => {
  // arr[8][8]

  const PutStone = (x, y) => {
    if (turn === socket.id) {
      socket.emit("put_stone", { x, y });
    }
  };
  return (
    <div>
      <table>
        <tbody>
          {board.map((i, idx) => {
            return (
              <tr key={idx}>
                {i.map((j, idx2) => {
                  return (
                    <td
                      onClick={() => PutStone(idx, idx2)}
                      className={"board_color_" + ((idx + idx2) % 2)}
                      key={idx2}>
                      <div
                        className={
                          j === -1
                            ? ""
                            : j === 0
                            ? "black"
                            : j === 1
                            ? "white"
                            : "err"
                        }
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Othello;
