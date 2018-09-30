# react-kakao-map
Component react for kakao map

## Installation
- `yarn add react-kakao-map` or `npm install react-kakao-map`

## How to use

### Basic

```js
import React from 'react';
import ReactDOM from 'react-dom';
import KakaoMap from 'react-kakao-map';

ReactDOM.render(
  <KakaoMap
    apiKey="xxxxxxxxxx"
    lng={127.1111}
    lat={59.1111}
  />,
  document.getElementById('demo')
);
```

## Parameters

|    params    |     value           |                default value                        |
|:------------:|:-------------------:|:---------------------------------------------------:|
|     apiKey    |     string          |                Required                             |
|     lng     |     number          |              Required                 |
|     lat    |     number          |      Required           |