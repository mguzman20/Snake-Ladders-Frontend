import React from "react";
import './Info.css'

export default function Info ({player1, player2, player3, player4}) {
    return (
        <div className="info">
            <div className="info-player">
                <div className="info__player__color info__player__color--blue"></div>
                <div className="info__player__name">Player 1: {player1}</div>
            </div>
            <div className="info-player">
                <div className="info__player__color info__player__color--red"></div>
                <div className="info__player__name">Player 2: {player2}</div>
            </div>
            <div className="info-player">
                <div className="info__player__color info__player__color--green"></div>
                <div className="info__player__name">Player 3: {player3}</div>
            </div>
            <div className="info-player">
                <div className="info__player__color info__player__color--yellow"></div>
                <div className="info__player__name">Player 4: {player4}</div>
            </div>
        </div>
    )
}