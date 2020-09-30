import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import './AirQuality.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = 'pk.eyJ1Ijoic2VyaGlpdml0a292c2t5aSIsImEiOiJja2ZsYXBjdWYwYmt2MnhtdDlsdTlhNnVhIn0.zcR8598PNabsBhC_GXh6Pg';

const AirQuality = () => {
	const mapContainer = useRef(null);
	const [locationInfo, setLocationInfo] = useState({
		lng: 31,
		lat: 48.3,
		zoom: 5
	});
	
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/outdoors-v11',
			center: [locationInfo.lng, locationInfo.lat],
			zoom: locationInfo.zoom,
		});
		
		const nav = new mapboxgl.NavigationControl();
		map.addControl(nav, 'bottom-left');
		map.addControl(new mapboxgl.FullscreenControl());
	}, [])
	
	return (
		<section className={'air-q container'}>
			<h2 id="index" className="air-q-title">Индекс качества воздуха в режиме реального времени</h2>
			
			<div className="air-q-map" ref={mapContainer}/>
			
			<p className="air-q-text">Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.</p>
		</section>
	);
};

export default AirQuality;