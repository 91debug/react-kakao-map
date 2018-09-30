import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

import KakaoMap from '../dist/index';

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        map:
        <KakaoMap
          apiKey="eb292e8cda190944e5b9fca5fd50b149"
          lng={126.9161292}
          lat={37.595239}
        />
      </Wrapper>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('demo')
);