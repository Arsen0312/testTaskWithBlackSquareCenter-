import cls from "./Notification.module.scss";
import NotificationIcon from "./NotificationIcon.tsx";

type TNotificationProps = {
    className?: string;
}


const Notification = (props: TNotificationProps) => {
    const {className} = props;

    return (
        <div className={`${cls.Notification} ${className && className}`}>
            <NotificationIcon/>
            <span>Ошибка: не удалось загрузить информацию</span>
        </div>
    );
};

export default Notification;