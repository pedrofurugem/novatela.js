import { createStackNavigator } from  'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { Plataform } from 'react-native';
import DetalhesdoLugarTela from '../telas/detalhesDoLugarTela';
import ListaDeLugaresTela from '../telas/ListaDeLugaresTela';
import MapaTela from '..telas/MapaTela';
import NovoLugarTela from '../telas/NovoLugarTela';
import Cores from '../constantes/cores'

const LugaresNavegator = createStackNavigator ({
     ListaDeLugares: ListaDeLugaresTela,
     DetalhesdoLugar: DetalhesdoLugarTela,
     NovoLugar: NovoLugarTela,
     Mapa: MapaTela
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: platform.os === 'android' ? Cres.primary : 'white',
            harderTintColor: Platform.os === 'android' ? 'white' : Cores.primary
        }
    }
 }
)

export default createAppContainer(LugaresNavegator);

//<LugaresNavigator />