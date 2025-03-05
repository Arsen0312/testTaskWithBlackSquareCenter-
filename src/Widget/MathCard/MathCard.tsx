import cls from "./MathCard.module.scss"
import {TTeamsResults} from "../../Shared/UiComponent/CurdStatus/utils/type.ts";
import {useState} from "react";
import {classNames} from "../../Shared/lib/classNames/classNames.ts";
import CurdStatus from "../../Shared/UiComponent/CurdStatus/CurdStatus.tsx";
import TeamIcon from "./ui/TeamIcon.tsx";
import CounterUserKills from "../../Shared/UiComponent/CounterUserKills/CounterUserKills.tsx";
import TeamResults from "../../Shared/UiComponent/TeamResults/TeamResults.tsx";
import ArrowDownIcon from "./ui/ArrowDownIcon.tsx";

type TMatchCard = TTeamsResults

const MathCard = (props: TMatchCard) => {
    const {awayScore, awayTeam, homeScore, homeTeam, status} = props;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cls.MathCard} onClick={() => setIsOpen(v => !v)}>
            <div className={cls.allInformationMatch}>
                <div className={cls.firstPartInformation}>
                    <div className={cls.partInformation}>
                        <div className={cls.nameTeamFirst}>
                            <div className={cls.TeamIcon}>
                                <TeamIcon/>
                            </div>
                            {awayTeam.name}
                        </div>
                        <div className={cls.count}>
                            <div className={cls.countTeams}>
                                {awayScore} : {homeScore}
                            </div>
                            <CurdStatus status={status}/>
                        </div>
                        <div className={cls.nameTeamSecond}>
                            {homeTeam.name}
                            <div className={cls.TeamIcon}>
                                <TeamIcon/>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(cls.triangleIconWrapperForPc, {[cls.triangleIconWrapperOpen]: isOpen})}>
                        <ArrowDownIcon/>
                    </div>
                </div>
                {isOpen && (
                    <div className={cls.secondPartInformation}>
                        <div className={cls.wrapperTeamAllResults}>
                            <div className={cls.wrapperTeamKill}>
                                {awayTeam.players.map(gamer => <div key={gamer.username}
                                                                    className={cls.wrapperCounterGamerKills}>
                                    <CounterUserKills
                                        userKills={gamer.kills}
                                        userName={gamer.username}/>
                                </div>)}
                            </div>
                            <div className={cls.wrapperTeamResults}>
                                <TeamResults points={awayTeam.points} kills={awayTeam.total_kills}
                                             rating={awayTeam.place}/>
                            </div>
                        </div>
                        <div className={cls.inscriptionVsTeams}>
                            <hr/>
                            <h5>VS</h5>
                            <hr/>
                        </div>
                        <div className={cls.wrapperTeamAllResults}>
                            <div className={cls.wrapperTeamKill}>
                                {homeTeam.players.map(gamer => <div key={gamer.username}
                                                                    className={cls.wrapperCounterGamerKills}>
                                    <CounterUserKills
                                        userKills={gamer.kills}
                                        userName={gamer.username}/>
                                </div>)}
                            </div>
                            <div className={cls.wrapperTeamResults}>
                                <TeamResults points={homeTeam.points} kills={homeTeam.total_kills}
                                             rating={homeTeam.place}/>
                            </div>
                        </div>
                    </div>
                )}
                <div className={classNames(cls.triangleIconWrapperForMobile, {[cls.triangleIconWrapperOpen]: isOpen})}>
                    <ArrowDownIcon/>
                </div>
            </div>
        </div>
    );
};


export default MathCard;
