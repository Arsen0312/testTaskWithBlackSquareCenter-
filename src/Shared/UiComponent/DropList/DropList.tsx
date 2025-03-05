import cls from "./DropList.module.scss";
import {useRef, useState} from "react";
import {classNames} from "../../lib/classNames/classNames.ts";
import TriangleIcon from "./utils/ui/TriangleIcon/TriangleIcon.tsx";
import DropListItem from "./utils/ui/DropListItem/DropListItem.tsx";

export type TDropListProps<T> = {
    options: T[];
    value: T;
    changeValue: (value: T) => void;
    getTitle?: (option: T) => string;
};

const DropList = <T, >(props: TDropListProps<T>) => {
    const {options, value, changeValue, getTitle} = props;
    const [isOpen, setIsOpen] = useState(false);
    const myRef = useRef<HTMLDivElement>(null);

    const handleItemClick = (item: T) => {
        changeValue(item);
        setIsOpen(false);
    };


    const getTitleFn = (option: T): string => {
        if (getTitle) {
            return getTitle(option);
        }
        return String(option);
    };

    return (
        <div className={cls.DropListWrapper}>
            <div
                ref={myRef}
                className={classNames(cls.DropList, {[cls.DropListOpen]: isOpen})}
                onClick={() => {
                    if (options.length > 1) {
                        setIsOpen((prev) => !prev)
                    }
                }}
            >
                <h4 className={cls.title}>{getTitleFn(value)}</h4>
                <div
                    className={classNames(cls.TriangleIconWrapper, {
                        [cls.TriangleIconWrapperIsOpen]: isOpen,
                    })}
                >
                    <TriangleIcon/>
                </div>
            </div>
            {isOpen && (
                <ul className={cls.dropList}>
                    {options.map((option, index) => (
                        <DropListItem key={index} onClick={() => handleItemClick(option)}>
                            {getTitleFn(option)}
                        </DropListItem>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropList;
