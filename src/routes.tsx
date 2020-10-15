import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap'

function Routes() {
    return (
        <BrowserRouter>
            <Switch> {/* Faz com que apenas uma rota seja chamada por vez */}
                <Route path="/" exact component={Landing}/>
                {/* O atributo exact faz com que para exibir essa rota tenha que ser exatamente igual ao path pois o route-dom não verifica tudo, e como a segunda rota também tem uma barra só a primeira será mostrada */}
                <Route path="/app" component={OrphanagesMap}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes
