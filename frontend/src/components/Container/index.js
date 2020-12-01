import { Row, Col, Typography } from 'antd';
import { blue } from '@ant-design/colors';
import Header from '../Header'
import './container.css';

const { Title } = Typography;

const Container = () => {
  return(
    <>
      <Row justify='center' align='top'>
        <Col>
          <Header />
        </Col>
      </Row>

      <Row gutter={[16,32]}>
        <Col xl={12} xxl={12}>
            <Title
              level={3}
              style={{
                textAlign: 'center',
                color: '#613400',
                background: '#ffd666',
                borderTopLeftRadius: '4px',
                borderTopRightRadius: '4px',
              }}
            >
              Assets
            </Title>
            <div className='content'>
                <div className='assetsContent'>Content of Assets</div>
            </div>
        </Col>

        <Col xl={12} xxl={12}>
          <Title
            level={3}
            style={{
              textAlign: 'center',
              color: '#613400',
              background: '#ffd666',
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px'
            }}
          >
            Health Assets
          </Title>
          <div className='content'>
              <div className='healthAssetsContent'>
                Content of  Healt Assets
              </div>
          </div>
        </Col>
      </Row>

      <Row justify='center'>
        <Col span={24}>
          <Title level={3} style={{
            textAlign:'center',
            color: '#613400',
            background: '#ffd666'
            }}
          >
              Graph
          </Title>
          <p>GRAPH Content</p>
        </Col>
      </Row>
    </>
  )
};

export default Container;
