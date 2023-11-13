//path : src/pages/results.tsx
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

    useEffect(() => {
        // 브라우저의 뒤로 가기 버튼을 눌렀을 때의 동작을 제어합니다.
        const handleBeforePopState = () => {
            // 설정 페이지(`/settings`)로 리디렉션합니다.
            router.push('/settings');
            return false;
        };

        // beforePopState 이벤트 리스너를 설정합니다.
        router.beforePopState(handleBeforePopState);

        // 컴포넌트가 언마운트 될 때 이벤트 리스너를 제거합니다.
        return () => {
            router.beforePopState(() => true);
        };
    }, [router]);

    const handleRedraw = () => {
        // 사용자가 다시 뽑기를 원할 경우 설정 페이지로 리디렉션
        router.push('/settings');
    };


    // 챔피언 이미지 URL을 생성하는 함수
    const getChampionImageUrl = (championName: string, version: string) => {
        return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championName}.png`;
    };

    return (
        <div className="container mx-auto px-4 py-12 pb-10">
            <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">Champion Selection Results</h1>
            <div className="mb-8">
                <h2 className="text-3xl font-semibold text-center text-gray-700 mb-4 text-red-600">Red Team</h2>
                <div className="flex justify-center items-center flex-wrap gap-6">
                    {redTeam.map((champion, index) => (
                        <div key={index} className="text-center">
                            <img src={getChampionImageUrl(champion, version)} alt={champion} className="w-24 h-24 object-cover mx-auto" />
                            <p className="text-gray-700 mt-2">{champion}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-semibold text-center text-gray-700 mb-4 text-blue-600">Blue Team</h2>
                <div className="flex justify-center items-center flex-wrap gap-6">
                    {blueTeam.map((champion, index) => (
                        <div key={index} className="text-center">
                            <img src={getChampionImageUrl(champion, version)} alt={champion} className="w-24 h-24 object-cover mx-auto" />
                            <p className="text-gray-700 mt-2">{champion}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center ">
                <button
                    onClick={handleRedraw}
                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-6 mt-10 rounded-lg text-xl focus:outline-none focus:shadow-outline">
                    Restart
                </button>
            </div>
        </div>
    );
}
