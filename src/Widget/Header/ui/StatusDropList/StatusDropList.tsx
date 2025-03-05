import { TStatusTypes } from "./statusTypes";
import DropList from "../../../../Shared/UiComponent/DropList/DropList.tsx";

type TStatusDropListProps = {
    value: TStatusTypes;
    options: TStatusTypes[];
    changeValue: (value: TStatusTypes) => void;
};

const StatusDropList = (props: TStatusDropListProps) => {
    const { value, options, changeValue } = props;

    return (
        <DropList<TStatusTypes>
            value={value}
            options={options}
            changeValue={changeValue}
            getTitle={(option) => option}
        />
    );
};

export default StatusDropList;
