import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Settings() {
    const [redTeamCount, setRedTeamCount] = useState(5); // Red 팀의 기본 인원 수를 5로 설정합니다.
    const [blueTeamCount, setBlueTeamCount] = useState(5); // Blue 팀의 기본 인원 수를 5로 설정합니다.
    const [diceCount, setDiceCount] = useState(2); // 주사위 개수를 2로 설정합니다.
    const router = useRouter();

    const handleSubmit = () => {
        if (diceCount >= 0 && diceCount <= 2 && redTeamCount >= 1 && redTeamCount <= 5 && blueTeamCount >= 1 && blueTeamCount <= 5) {
            router.push(`/processing?dice=${diceCount}&redTeam=${redTeamCount}&blueTeam=${blueTeamCount}`);
        } else {
            alert('Please enter a valid number of dice and team members.');
        }
    };


    return (
        <div>
            <h1>SETTING</h1>
            <div>
                <label htmlFor="diceCount">number of dice:</label>
                <input
                    type="number"
                    value={diceCount}
                    onChange={(e) => setDiceCount(Number(e.target.value))}
                    min={0} max={2}
                />
            </div>
            <div>
                <label htmlFor="redTeamCount">Red Team: </label>
                <input
                    type="number"
                    id="redTeamCount"
                    value={redTeamCount}
                    onChange={(e) => setRedTeamCount(Number(e.target.value))}
                    min={1} max={5}
                />
            </div>
            <div>
                <label htmlFor="blueTeamCount">Blue Team: </label>
                <input
                    type="number"
                    id="blueTeamCount"
                    value={blueTeamCount}
                    onChange={(e) => setBlueTeamCount(Number(e.target.value))}
                    min={1} max={5}
                />
            </div>
            <button onClick={handleSubmit}>Pick!!</button>
        </div>
    );
}
