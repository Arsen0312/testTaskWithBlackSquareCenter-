import cls from "./DropListItem.module.scss"
import React from "react";

type TDropListItemProps = {
    onClick: () => void,
    children: React.ReactNode,
    disabled?: boolean,
}

const DropListItem = (props: TDropListItemProps) => {
    const { onClick, children, disabled = false } = props;

    const onClickThis = () => {
        if (!disabled) {
            onClick()
        }
    }

    return (
        <li aria-disabled={disabled} className={cls.DropListItem} onClick={() => onClickThis()}>
            {children}
        </li>
    );
};

export default DropListItem;