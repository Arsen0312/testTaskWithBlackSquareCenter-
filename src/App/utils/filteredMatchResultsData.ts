import { TStatusTypes } from "../../Widget/Header/ui/StatusDropList/statusTypes.ts";
import React from "react";
import { TMatchResultsData } from "../App.tsx";

export type TFilteredMatchResultsData = (status: TStatusTypes, setMatchResultsData: React.Dispatch<React.SetStateAction<TMatchResultsData>>) => void

export const filteredMatchResultsData: TFilteredMatchResultsData = (status, setMatchResultsData) => {
  setMatchResultsData(matches => ({...matches, filteredVersion: matches.originalVersion.filter(match => {
      if (status === "Все статусы") {
        return match;
      } else if (match.status === status) {
        return match;
      }
    })}));
};
