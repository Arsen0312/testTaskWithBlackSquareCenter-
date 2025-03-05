import cls from "./TeamResults.module.scss"

type TTeamResults = {
    points: number;
    rating: number;
    kills: number;
}

const TeamResults = (props: TTeamResults) => {
    const {points, rating, kills} = props;


    return (
        <div className={cls.TeamResults}>
            <div className={cls.points}>
                <div className={cls.prefix}>Points:</div>
                <div className={cls.value}>+{points}</div>
            </div>
            <hr/>
            <div className={cls.rating}>
                <div className={cls.prefix}>Рейтинг:</div>
                <div className={cls.value}>{rating}</div>
            </div>
            <hr/>
            <div className={cls.kills}>
                <div className={cls.prefix}>Всего убийств:</div>
                <div className={cls.value}>{kills}</div>
            </div>
        </div>
    );
};

export default TeamResults;