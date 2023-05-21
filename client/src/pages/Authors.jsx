import React from 'react'
import { Card } from 'antd';
import Search from 'antd/es/input/Search';
const { Meta } = Card;

const Authors = () => {
    return (
        <>
            <Search placeholder='Search' />

            <Card
                hoverable
                style={{
                    width: 240,
                    margin:"25px"
                }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </>
    )
}

export default Authors