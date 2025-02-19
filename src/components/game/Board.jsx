import React, {useState} from "react";
import Cell from "./Cell";
import "./Board.css";

export default function Board ({positions}) {
    const board = [
        [100, 99, 98, 97, 96, 95, 94, 93, 92, 91],
        [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
        [80, 79, 78, 77, 76, 75, 74, 73, 72, 71],
        [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
        [60, 59, 58, 57, 56, 55, 54, 53, 52, 51],
        [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
        [40, 39, 38, 37, 36, 35, 34, 33, 32, 31],
        [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        [20, 19, 18, 17, 16, 15, 14, 13, 12, 11],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    ];


    return ( 
        <div className="board">
            {board.map((row, index) => {
                return (
                    <div className="row">
                        {row.map((cell, index) => {
                            const cellPlayers = positions.filter(
                                (player) => player.position === cell
                              );
                            return <Cell jugadores={cellPlayers} />
                        })}
                    </div>
                )
            })}
        </div>

    )
}
