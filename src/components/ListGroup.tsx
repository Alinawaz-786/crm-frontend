import { useState } from "react";
/*
* Now I have to reuse compount again and again
*/
interface Props {
    items: string[],
    heading: string,
    onSelectItem: (item: string) => void;
    onSelectItemIndex: (index: number) => void;
}
function ListGroup({ items, heading, onSelectItem, onSelectItemIndex }: Props) {
    // items = [];
    const getMessage = () => {
        return items.length === 0 ? <p>Empty List</p> : null;
    }
    //Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (<div className="container">
        <div>
            <h1>List of {heading}</h1>
            <h1>{getMessage()}</h1>
            <ul className="list-group">
                {
                    items.map((item, index) =>
                        <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                            key={item}
                            onClick={() => {
                                setSelectedIndex(index);
                                onSelectItem(item);
                                onSelectItemIndex(index)
                            }}
                        > {item}</li>
                    )}
            </ul>
        </div>
    </div >);
}

export default ListGroup;