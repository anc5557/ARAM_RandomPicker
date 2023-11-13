import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { fetchChampionData } from '../data/lol_data';

export default function Processing() {
  const router = useRouter();

  useEffect(() => {
    async function selectAndRedirect() {
      // 챔피언 데이터를 가져옵니다.
    const champions = await fetchChampionData();
    // 라우터 쿼리에서 팀원 수와 주사위 수를 가져옵니다.
    const redTeamCount = Number(router.query.redTeam) || 5;
    const blueTeamCount = Number(router.query.blueTeam) || 5;
    const diceCount = Number(router.query.dice) || 2;

    // 챔피언 선택 로직을 수행합니다.
    const { selectedRedTeam, selectedBlueTeam } = selectChampionsForTeams(champions.map(champion => ({ name: champion })), redTeamCount, blueTeamCount, diceCount);

    // 선택된 챔피언을 쿼리 매개변수로 추가합니다.
    const redTeamQuery = encodeURIComponent(selectedRedTeam.map(champion => champion.name).join(','));
    const blueTeamQuery = encodeURIComponent(selectedBlueTeam.map(champion => champion.name).join(','));

    // Results 페이지로 리다이렉트합니다.
    router.push(`/results?redTeam=${redTeamQuery}&blueTeam=${blueTeamQuery}`);
    }

    if (router.isReady) {
      selectAndRedirect();
    }
  }, [router.isReady]);

  // 챔피언 선택 로직 함수
function selectChampionsForTeams(allChampions: Array<{ name: string }>, redTeamSize: number, blueTeamSize: number, diceCount: number) {
    const selectedRedTeam = [];
    const selectedBlueTeam = [];

    const redTeamChampionCount = redTeamSize + redTeamSize * diceCount;
    const blueTeamChampionCount = blueTeamSize + blueTeamSize * diceCount;

    let availableChampions = [...allChampions];

    // Red 팀 챔피언 선택
    for (let i = 0; i < redTeamChampionCount && availableChampions.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * availableChampions.length);
        selectedRedTeam.push(availableChampions[randomIndex]);
        availableChampions.splice(randomIndex, 1); // 선택한 챔피언 제거
    }

    // Blue 팀 챔피언 선택 (중복 없이)
    for (let i = 0; i < blueTeamChampionCount && availableChampions.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * availableChampions.length);
        selectedBlueTeam.push(availableChampions[randomIndex]);
        availableChampions.splice(randomIndex, 1); // 선택한 챔피언 제거
    }

    return { selectedRedTeam, selectedBlueTeam };
  }

  return (
    <div>
      <h1>Processing...</h1>
    </div>
  );
}
