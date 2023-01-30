import { StatusBar, Button } from "react-native";
import * as Notifications from 'expo-notifications';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";

import { Routes } from "./src/routes";
import { Loading } from "./src/assets/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  Notifications.setNotificationHandler({
    handleNotification: async ( ) => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }) 
  })

  async function scheduleNotification(){
    const triggerNotification = new Date(Date.now());
    triggerNotification.setMinutes(triggerNotification.getMinutes() + 1);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Oláaaa',
        body: 'Você praticou seus hábitos hoje?'
      },
      trigger: triggerNotification
    });
  }

  async function getScheduleNotification(){
    const schedules = await Notifications.getAllScheduledNotificationsAsync();
    console.log(schedules);
  }

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <>
      <Routes></Routes>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}
