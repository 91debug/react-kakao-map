"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Wrapper_1 = require("./styled/Wrapper");
class KakaoMap extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            sdkLoaded: false,
        };
        this.loadKakaoSdk = () => {
            const { apiKey, lng, lat } = this.props;
            ((d, s, id, cb) => {
                const element = d.getElementsByTagName(s)[0];
                const fjs = element;
                let js = element;
                js = d.createElement(s);
                js.id = id;
                js.src =
                    `https://dapi.kakao.com/v2/maps/sdk.js?appKey=${apiKey}&libraries=services,clusterer,drawing&autoload=false`;
                fjs.parentNode.insertBefore(js, fjs);
                js.onload = cb;
            })(document, 'script', 'kakaomap-sdk', () => {
                const el = document.getElementById('kakao-map');
                const daum = window.daum;
                daum.maps.load(function () {
                    const map = new daum.maps.Map(el, {
                        level: 3,
                        center: new daum.maps.LatLng(lat, lng)
                    });
                    // 마커가 표시될 위치입니다
                    const markerPosition = new daum.maps.LatLng(lat, lng);
                    // 마커 생성
                    const marker = new daum.maps.Marker({
                        position: markerPosition
                    });
                    // 마커 표시
                    marker.setMap(map);
                    return map;
                });
            });
        };
    }
    sdkLoaded() {
        this.setState({ sdkLoaded: true });
    }
    componentDidMount() {
        if (document.getElementById('kakaomap-sdk')) {
            this.sdkLoaded();
        }
        this.loadKakaoSdk();
        let kakaoMapRoot = document.getElementById('kakao-map');
        if (!kakaoMapRoot) {
            kakaoMapRoot = document.createElement('div');
            kakaoMapRoot.id = 'kakao-map';
            document.body.appendChild(kakaoMapRoot);
        }
    }
    render() {
        return (React.createElement(Wrapper_1.Wrapper, { id: "kakao-map" }));
    }
}
exports.default = KakaoMap;
