import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Tutki',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="magnify" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="ideas"
        options={{
          title: 'Ideat',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="lightbulb-on-outline" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="bots"
        options={{
          title: 'Botit',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="robot-excited-outline" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Buche',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-circle-outline" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
