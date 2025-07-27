import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ExploreScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#ffffff', dark: '#333333' }}
            headerImage={
                <Image
                    source={require('@/assets/images/explore.svg')}
                    style={styles.headerImg}
                    contentFit='contain'
                    contentPosition='center'
                />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="subtitle">Trebuche</ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    headerImg: {
        height: '100%',
        width: '100%',
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
