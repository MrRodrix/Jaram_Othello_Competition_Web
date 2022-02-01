import React from "react";

import "./Othello.scss";

const Othello = ({ room_id, player, turn, board }) => {
  // arr[8][8]
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
