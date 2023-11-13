import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { version } from '../data/lol_data';

export default function Results() {
    const router = useRouter();
    const [redTeam, setRedTeam] = useState<string[]>([]);
    const [blueTeam, setBlueTeam] = useState<string[]>([]);

    useEffect(() => {
        // URL 쿼리 매개변수에서 챔피언 이름을 읽어옵니다.
        const redTeamNames = (router.query.redTeam as string)?.split(',') || [];
        const blueTeamNames = (router.query.blueTeam as string)?.split(',') || [];
        setRedTeam(redTeamNames);
        setBlueTeam(blueTeamNames);
    }, [router.query]);

    // 챔피언 이미지 URL을 생성하는 함수
    const getChampionImageUrl = (championName: string, version: string) => {
        return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championName}.png`;
    };

    return (
        <div>
            <h1>챔피언 선택 결과</h1>
            <div>
                <h2>Red 팀:</h2>
                <div style={{ display: 'flex' }}>
                    {redTeam.map((champion, index) => (
                        <div key={index} style={{ textAlign: 'center', margin: '0 10px' }}>
                            <img src={getChampionImageUrl(champion, version)} alt={champion} style={{ width: '100px' }} />
                            <p>{champion}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2>Blue 팀:</h2>
                <div style={{ display: 'flex' }}>
                    {blueTeam.map((champion, index) => (
                        <div key={index} style={{ textAlign: 'center', margin: '0 10px' }}>
                            <img src={getChampionImageUrl(champion, version)} alt={champion} style={{ width: '100px' }} />
                            <p>{champion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
