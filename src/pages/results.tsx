//path : src/pages/results.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { version } from '../data/lol_data';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Results() {
    const router = useRouter();
    const [redTeam, setRedTeam] = useState<string[]>([]);
    const [blueTeam, setBlueTeam] = useState<string[]>([]);
    const isRedTeamVisible = router.query.redTeam !== undefined;
    const isBlueTeamVisible = router.query.blueTeam !== undefined;

    // URL 복사 기능을 위한 핸들러 함수들
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            toast.success('URL copied to clipboard!');
        }).catch(err => {
            console.error('Could not copy text: ', err);
            toast.error('Failed to copy URL to clipboard.');
        });
    };

    const handleCopyRedTeamURL = () => {
        const redTeamURL = `${window.location.origin}/results?redTeam=${redTeam.join(',')}`;
        copyToClipboard(redTeamURL);
    };

    const handleCopyBlueTeamURL = () => {
        const blueTeamURL = `${window.location.origin}/results?blueTeam=${blueTeam.join(',')}`;
        copyToClipboard(blueTeamURL);
    };

    const handleCopyFullURL = () => {
        const fullURL = window.location.href;
        copyToClipboard(fullURL);
    };

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
        <div className="container mx-auto px-4 py-12 pb-12 mt-6 lg:mt-16">
            <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">Random Pick Results</h1>
            {isRedTeamVisible && (
                <div className="mb-8">
                    <h2 className="lg:text-3xl text-xl font-semibold text-center mb-2 text-red-600 lg:mt-16">Red Team</h2>
                    <div className="flex justify-center items-center flex-wrap lg:gap-6 gap-3">
                        {redTeam.map((champion, index) => (
                            <div key={index} className="text-center">
                                <img src={getChampionImageUrl(champion, version)} alt={champion} className="lg:w-24 lg:h-24  w-14 h-14 object-cover mx-auto" />
                                <p className="text-gray-700 mt-2 lg:text-2xl md:text-2lg text-xxs">{champion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {isBlueTeamVisible && (
                <div>
                    <h2 className="lg:text-3xl text-xl font-semibold text-center mb-2 text-blue-600 lg:mt-16">Blue Team</h2>
                    <div className="flex justify-center items-center flex-wrap lg:gap-6 gap-3">
                        {blueTeam.map((champion, index) => (
                            <div key={index} className="text-center">
                                <img src={getChampionImageUrl(champion, version)} alt={champion} className="lg:w-24 lg:h-24 w-14 h-14 object-cover mx-auto" />
                                <p className="text-gray-700 lg:text-2xl md:text-2lg text-xxs mt-2">{champion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {isRedTeamVisible && isBlueTeamVisible && (
                <div className="flex justify-center space-x-4 mt-8 lg:mt-32">
                    <button onClick={handleRedraw} className="bg-purple-500 hover:bg-purple-600 text-white lg:text-3xl text-sm font-bold lg:py-2 lg:px-4 py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                        Restart
                    </button>
                    <button onClick={handleCopyRedTeamURL} className="bg-red-500 hover:bg-red-600 text-white lg:text-3xl text-xxs font-bold lg:py-2 lg:px-4 py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                        Copy RedURL
                    </button>
                    <button onClick={handleCopyBlueTeamURL} className="bg-blue-500 hover:bg-blue-600 text-white lg:text-3xl text-xxs font-bold lg:py-2 lg:px-4 py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                        Copy BlueURL
                    </button>
                    <button onClick={handleCopyFullURL} className="bg-green-500 hover:bg-green-600 text-white lg:text-3xl text-xxs font-bold lg:py-2 lg:px-4 py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                        Copy FullURL
                    </button>
                </div>
            )}
        </div>
    );
}