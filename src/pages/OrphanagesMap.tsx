import React from 'react';
import { FiPlus } from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../images/face.svg';

import '../styles/pages/orphanages-map.css'

console.log(process.env.REACT_APP_MAPBOX_TOKEN);

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Natal</strong>
                    <span>Rio Grande do Norte</span>
                </footer>
            </aside>
            <Map  
            center={[-5.7744878,-35.2761055]}
            zoom={15}
            style={{
                width:'100%',
                height:'100%'
            }}
            >
                {/* <TileLayer url="https://a.tile.openstrrtmap.org/{z}/{x}/{z}.png"/> */}

                {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{z}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
            </Map>

            <Link to="/" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;