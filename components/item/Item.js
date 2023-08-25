import { Card, Divider } from 'antd';
import Link from 'next/link';
import { AiOutlineLike } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';

const { Meta } = Card;
const Item = ({ item }) => {
    return (
        <>
                <Card
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src="https://picsum.photos/200/100" />}
                >
                    <Meta title={`${item.firstName} ${item.lastName}`} description={item.phone} />
                    <Divider />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}><AiOutlineLike />{item.numLikes}</div>
                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}><BiComment />{item.numComments}</div>
                    </div>
                </Card>
        </>
    );
}

export default Item;