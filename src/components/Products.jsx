import { Card, Image, List } from 'antd'
import { carpets } from './Data'

const Products = () => {
  return (
    <div>
        <List
            grid={{ column: 3}}
            dataSource={carpets}
            renderItem={(product, index) => {
                return (
                    <Card
                        title={product.name}
                        key={index}
                        cover={<Image className="itemCardImage" src={product.imgSrc} />}
                    >

                    </Card>
                )
            }}
        >

        </List>
    </div>
  )
}

export default Products