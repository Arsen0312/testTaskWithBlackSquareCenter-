import cls from "./App.module.scss";
import { useEffect, useState } from "react";
import { TTeamsResults } from "../Shared/UiComponent/CurdStatus/utils/type.ts";
import { TStatusTypes } from "../Widget/Header/ui/StatusDropList/statusTypes.ts";
import { $api } from "../Shared/api/api.ts";
import Header from "../Widget/Header/Header.tsx";
import MathCard from "../Widget/MathCard/MathCard.tsx";
import { TGetTeamsResultsType } from "./getTeamsResultsType.ts";
import { getUniqueStatusesFromTheResponse } from "./utils/getStatusFromResponse.ts";
import { filteredMatchResultsData } from "./utils/filteredMatchResultsData.ts";

export type TMatchResultsData = {
  filteredVersion: TTeamsResults[],
  originalVersion: TTeamsResults[],
}

function App() {
  const [matchResultsData, setMatchResultsData] = useState<TMatchResultsData>({
    filteredVersion: [],
    originalVersion: []
  });
  const [isValuesStatus, setIsValuesStatus] = useState<TStatusTypes[]>([]);
  const [isValueStatus, setIsValueStatus] = useState<TStatusTypes>("Все статусы");
  const [characteristicData, setCharacteristic] = useState({
    isLoading: false,
    isErrorWithLoadingDate: false
  });

  const getMatchResultsData = async () => {
    setCharacteristic(prevData => ({ ...prevData, isLoading: true }));

    try {
      const response = await $api.get<TGetTeamsResultsType>("fronttemp");
      const matchResultsDataFromResponse: TMatchResultsData = {
        filteredVersion: response.data.data.matches,
        originalVersion: response.data.data.matches
      };
      setMatchResultsData(matchResultsDataFromResponse);
      setIsValuesStatus(getUniqueStatusesFromTheResponse(response));

      setCharacteristic(prevData => ({ ...prevData, isLoading: false }));
      setCharacteristic(prevData => ({ ...prevData, isErrorWithLoadingDate: false }));

      filteredMatchResultsData(isValueStatus, setMatchResultsData);
    } catch (e) {
      setIsValuesStatus([]);
      setCharacteristic(prevData => ({ ...prevData, isLoading: false }));
      setCharacteristic(prevData => ({ ...prevData, isErrorWithLoadingDate: true }));
      throw new Error("Ошибка с получением данных");
    }
  };

  useEffect(() => {

    getMatchResultsData();

    return () => {
      console.log("Пока пока");
    };
  }, []);




  return (
    <div className={cls.App}>
      <Header statusValue={isValueStatus} statusList={isValuesStatus}
              isErrorLoadingData={characteristicData.isErrorWithLoadingDate}
              changeStatusValue={(value: TStatusTypes) => setIsValueStatus(value)}
              callBackForUpdateMatchData={getMatchResultsData}
              isLoadingData={characteristicData.isLoading}
              setIsValuesStatus={setMatchResultsData}
              filteredMatchResultsData={filteredMatchResultsData}
      />
      <main className={cls.content}>
        {
          characteristicData.isLoading
            ? (<div className={cls.loader}></div>)
            : characteristicData.isErrorWithLoadingDate
              ? (<div>Ошибка при получении данных</div>)
              : matchResultsData.filteredVersion.map(team => (
                <MathCard key={team.title} awayScore={team.awayScore} awayTeam={team.awayTeam}
                          homeScore={team.homeScore} homeTeam={team.homeTeam} title={team.title}
                          status={team.status} time={team.time} />
              ))
        }
      </main>
    </div>
  );
}

export default App;
