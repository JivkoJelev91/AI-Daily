import React from 'react';
import { RefreshControl, SafeAreaView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';
import Dropdown from './components/Dropdown';
import News from './components/News';
import newsData from './data/newsData';

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
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => <News {...item} />}
				style={{ flex: 1, paddingHorizontal: 16 }}
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
	);
}
