import { useState, useEffect } from 'react';
import { Row, Col, Typography, Select } from 'antd';

import api from '../../services/api';
import './container.css';

const { Title } = Typography;
const { Option } = Select;

const Container = () => {
  const [assets, setAssets] = useState([]);
  const [units, setUnits] = useState([]);
  const [unitSelected, setUnitSelected] = useState();

  const option = ['Marcos', 'Talita', 'Alicia', 'Helena'];

  useEffect(async() => {
    const assets = await api.get('https://challenge-tractian.herokuapp.com/branchassets');
    const units = await api.get('https://challenge-tractian.herokuapp.com/subsidiaries')
    setAssets(assets.data);
    setUnits(units.data);
  }, []);

  function handleSelectChange(value) {
    setUnitSelected(value);
  }

  return(
    <div className='main-container'>
      <p style={{ textAlign: 'center' }}>Escolha a unidade:</p>
      <div className='select'>
        <Row justify='center' align='top'>
          <Col>
            <Select showArrow='true' style={{ width: 120 }} onSelect={handleSelectChange}>
              {
                units.map(unit => (
                  <Option key={unit.id} value={unit.name}>{unit.name}</Option>
                  ))
              }
            </Select>
          </Col>
        </Row>
      </div>


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
                <div className='assetsContent'>{assets.map(item => (
                  <div>{item.name}
                  </div>
                ))}</div>

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
    </div>
  )
};

export default Container;
