import Item from "../item/Item";
const List = ({ arr }) => {
    const items = arr.map((item, index) => <Item key={index} item={item} />);
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px"
        }}>
            {items}
        </div >
    );
}

export default List;