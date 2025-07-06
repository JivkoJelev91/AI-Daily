import React from 'react';
import { RefreshControl, SafeAreaView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';
import Dropdown from './components/Dropdown';
import NewsList from './components/News';
import newsData from './data/newsData';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsDetailScreen, { RootStackParamList } from './screens/NewsDetailScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
	const [selected, setSelected] = React.useState('AI News');
	const [refreshing, setRefreshing] = React.useState(false);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		// Simulate fetching new data
		setTimeout(() => {
			setRefreshing(false);
		}, 2000);
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					presentation: 'card',
				}}
			>
				<Stack.Screen name="Home" options={{ headerShown: false }}>
					{() => (
						<SafeAreaView style={{ flex: 1, backgroundColor: '#101820' }}>
							<StatusBar style='auto' />
							<Header />
							<Dropdown
								options={['AI News', 'Tech News', 'Robotics']}
								selected={selected}
								onSelect={setSelected}
							/>
							<FlatList
								data={newsData}
								keyExtractor={(_, index) => index.toString()}
								renderItem={null}
								ListHeaderComponent={<NewsList data={newsData} />}
								style={{ flex: 1, paddingHorizontal: 16 }}
								showsHorizontalScrollIndicator={false}
								showsVerticalScrollIndicator={false}
								contentContainerStyle={{ paddingBottom: 20 }}
								bounces={true}
								alwaysBounceVertical={true}
								scrollEventThrottle={16}
								refreshControl={
									<RefreshControl
										refreshing={refreshing}
										onRefresh={onRefresh}
										tintColor="#80B4B8"
										colors={["#80B4B8"]}
										progressBackgroundColor="#18222d"
										progressViewOffset={0}
									/>
								}
							/>
						</SafeAreaView>
					)}
				</Stack.Screen>
				<Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
