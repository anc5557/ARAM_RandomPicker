import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Settings() {
    const [redTeamCount, setRedTeamCount] = useState(5); // Red 팀의 기본 인원 수를 5로 설정합니다.
    const [blueTeamCount, setBlueTeamCount] = useState(5); // Blue 팀의 기본 인원 수를 5로 설정합니다.
    const [diceCount, setDiceCount] = useState(2); // 주사위 개수를 2로 설정합니다.
    const router = useRouter();

    const handleSubmit = () => {
        // 주사위 개수와 팀 인원 수가 올바른 범위 내에 있는지 확인합니다.
        if (diceCount >= 0 && diceCount <= 2 && redTeamCount >= 1 && redTeamCount <= 5 && blueTeamCount >= 1 && blueTeamCount <= 5) {
            router.push(`/processing?dice=${diceCount}&redTeam=${redTeamCount}&blueTeam=${blueTeamCount}`);
        } else {
            // 올바르지 않은 입력값에 대한 처리를 여기서 합니다.
            alert('입력값이 범위를 벗어났습니다. 다시 확인해 주세요.');
        }
    };


    return (
        <div>
            <h1>팀 설정</h1>
            <div>
                <label htmlFor="diceCount">주사위 개수:</label>
                <input
                    type="number"
                    value={diceCount}
                    onChange={(e) => setDiceCount(Number(e.target.value))}
                    min={0} max={2}
                />
            </div>
            <div>
                <label htmlFor="redTeamCount">Red 팀 인원 수:</label>
                <input
                    type="number"
                    id="redTeamCount"
                    value={redTeamCount}
                    onChange={(e) => setRedTeamCount(Number(e.target.value))}
                    min={1} max={5}
                />
            </div>
            <div>
                <label htmlFor="blueTeamCount">Blue 팀 인원 수:</label>
                <input
                    type="number"
                    id="blueTeamCount"
                    value={blueTeamCount}
                    onChange={(e) => setBlueTeamCount(Number(e.target.value))}
                    min={1} max={5}
                />
            </div>
            <button onClick={handleSubmit}>확인</button>
        </div>
    );
}
