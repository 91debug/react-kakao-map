import * as React from 'react';
export interface KakaoMapProps {
    apiKey: string;
    lat: number;
    lng: number;
}
interface KakaoMapState {
    sdkLoaded: boolean;
}
declare class KakaoMap extends React.Component<KakaoMapProps, KakaoMapState> {
    state: KakaoMapState;
    loadKakaoSdk: () => void;
    sdkLoaded(): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export default KakaoMap;
//# sourceMappingURL=KakaoMap.d.ts.map