import {AxiosResponse} from "axios";
import {TGetTeamsResultsType} from "../getTeamsResultsType.ts";
import {TStatusTypes} from "../../Widget/Header/ui/StatusDropList/statusTypes.ts";

type TGetStatusFromResponse = (response: AxiosResponse<TGetTeamsResultsType>) => TStatusTypes[];

export const getUniqueStatusesFromTheResponse: TGetStatusFromResponse = (response) => {
  const statusList = new Set<TStatusTypes>([])
  response.data.data.matches.forEach(match => statusList.add(match.status));
  return [...statusList];

}
