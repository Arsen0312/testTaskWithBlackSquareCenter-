import cls from "./CurdStatus.module.scss"

type TCurdStatus = {
    status: "Live" | "Finished" | "Ongoing" | "Scheduled" | "Все статусы" |  "Match preparing"
}

const CurdStatus = (props: TCurdStatus) => {
    const {status} = props;

    const getColorWithStatus = () => {
        switch (status) {
            case "Live": return "rgba(67, 173, 40, 1)"
            case "Finished": return "rgba(235, 2, 55, 1)"
            case "Ongoing": return "rgba(235, 100, 2, 1)"
            case "Scheduled": return "rgb(2,146,235)"
        }
    }

    return (
        <div className={`${cls.CurdStatus} ${cls[status]}`} style={{ backgroundColor: getColorWithStatus()}}>
            {status}
        </div>
    );
};

export default CurdStatus;
