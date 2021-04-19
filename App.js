import React from 'react';
import type {Node} from 'react';
import 'react-native-gesture-handler';
import {
  Text,
} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import RootNavigation from "./src/Navigation/rootNavigation";


const App: () => Node = () => {
    return (
        <>
            <RootNavigation />
        </>
    );
};

export default App;
