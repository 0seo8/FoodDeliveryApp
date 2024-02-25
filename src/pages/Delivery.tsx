import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ing from '@/pages/Ing.tsx';
import Complete from '@/pages/Complete.tsx';

const Stack = createNativeStackNavigator();
export default function Delivery() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Ing"
        component={Ing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Complete"
        component={Complete}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
