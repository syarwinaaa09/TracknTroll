import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useTailwind } from 'tailwind-rn'
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { OrdersScreenNavigationProp } from './OrdersScreen';
import DeliveryCard from '../components/DeliveryCard';

type OrderScreenRouteProp = RouteProp<RootStackParamList, "Order">;

export type OrderScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList, "Orders">,
NativeStackNavigationProp<RootStackParamList>
>;
const OrderScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation<OrdersScreenNavigationProp>();
    const { params: {order}} = useRoute<OrderScreenRouteProp>();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: order.trackingItems.customer.name,
            headerTintColor: "#EB6A7C",
            headerTitleStyle: { color: "black" },
            headerBackTitle: "Deliveries"
        })
    }, [order])
  return (
    <View style={tw("-mt-2 ")}>
        <DeliveryCard order={order} fullWidth />
    </View>
  )
}

export default OrderScreen