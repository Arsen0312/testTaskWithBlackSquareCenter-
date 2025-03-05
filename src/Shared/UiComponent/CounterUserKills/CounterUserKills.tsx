import cls from "./CounterUserKills.module.scss"

type TCounterUserKills = {
    userKills: number;
    userName: string;
}

const CounterUserKills = (props: TCounterUserKills) => {
    const { userKills, userName } = props;

    return (
        <div className={cls.CounterUserKills}>
            <div className={cls.userInfo}>
                <div className={cls.wrapperUserAvatar}>
                    <img className={cls.userAvatar}
                        src="/assets/avatar_global.svg" alt="avatar_global.svg"
                    />
                </div>
                <div className={cls.wrapperUserName}>
                    <div className={cls.userName}>
                        {userName}
                    </div>
                </div>
            </div>
            <div className={cls.wrapperCounterKills}>
                <div className={cls.counterKillsPrefix}>
                    Убийств:
                </div>
                <div className={cls.counterKills}>
                    {userKills}
                </div>
            </div>
        </div>
    );
};

export default CounterUserKills;