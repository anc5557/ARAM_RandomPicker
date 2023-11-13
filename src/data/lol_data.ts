import axios from "axios";

// 버전 정보
export const version = "13.22.1";

// 챔피언 영어 이름을 저장할 배열입니다.
export const championIds: string[] = [];

// Riot Games 챔피언 데이터 JSON을 가져오는 함수입니다.
export async function fetchChampionData(): Promise<string[]> {
  const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`;
  try {
    const response = await axios.get(url);
    const championData = response.data;

    // 챔피언의 영어 이름(id)를 파싱하여 배열에 저장합니다.
    for (const key in championData.data) {
      if (Object.prototype.hasOwnProperty.call(championData.data, key)) {
        championIds.push(championData.data[key].id); // 'id' is the English name used in image URLs
      }
    }
  } catch (error) {
    console.error(error);
  }

  return championIds; // 영어 이름 배열을 반환합니다.
}
