import cls from "./Header.module.scss"
import StatusDropList from "./ui/StatusDropList/StatusDropList.tsx";
import {TStatusTypes} from "./ui/StatusDropList/statusTypes.ts";
import Notification from "./ui/Notification/Notification.tsx";
import RefreshIcon from "./ui/RefreshIcon/RefreshIcon.tsx";
import React from "react";
import { TMatchResultsData } from "../../App/App.tsx";
import {
  TFilteredMatchResultsData
} from "../../App/utils/filteredMatchResultsData.ts";

type THeaderProps = {
  statusValue: TStatusTypes,
  statusList: TStatusTypes[],
  changeStatusValue: (status: TStatusTypes) => void,
  isErrorLoadingData?: boolean,
  callBackForUpdateMatchData: () => void,
  isLoadingData: boolean,
  setIsValuesStatus: React.Dispatch<React.SetStateAction<TMatchResultsData>>,
  filteredMatchResultsData: TFilteredMatchResultsData
}


const Header = (props: THeaderProps) => {
  const {statusValue, statusList, changeStatusValue, isErrorLoadingData = false, callBackForUpdateMatchData, isLoadingData = false, setIsValuesStatus, filteredMatchResultsData} = props;

  return (
    <header className={cls.Header}>
      <div className={cls.first}>
        <h1>Match Tracker</h1>
        <StatusDropList
          options={["Все статусы", ...statusList]} value={statusValue} changeValue={(value: TStatusTypes) => {
          changeStatusValue(value);
          filteredMatchResultsData(value, setIsValuesStatus);
        }}
        />
      </div>
      <div className={cls.second}>
        {isErrorLoadingData && (<Notification className={cls.notification}/>)}
        <button disabled={isLoadingData} className={cls.refreshButton} onClick={() => {
          callBackForUpdateMatchData();
        }}>
          Обновить
          <span className={`${isLoadingData && cls.isLoading}`}>
            <RefreshIcon/>
          </span>
        </button>
      </div>

    </header>
  );
};

export default Header;
