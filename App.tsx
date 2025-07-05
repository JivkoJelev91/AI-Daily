import React from 'react';
import { StyleSheet, RefreshControl, SafeAreaView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';
import Dropdown from './components/Dropdown';
import News from './components/News';

const newsData = [
	{
		title: 'AI breakthrough in NLP sets new benchmarks',
		description:
			`A new AI model has significantly outperformed previous systems in natural language processing tasks.A new AI model has significantly outperformed previous systems in natural language processing tasks.`,
		time: '3h ago',
		image: require('./assets/icon.png'),
		tag: 'AI',
	},
	{
		title: 'New AI model beats humans in image recognition',
		description:
			'Researchers unveil an AI system that surpasses human performance in identifying images.',
		time: '3h ago',
		image: require('./assets/splash-icon.png'),
		tag: 'AI',
	},
	{
		title: 'Advances in neural networks drive AI technology',
		description:
			'Ongoing research in neural networks is pushing the boundaries of what AI can achieve.',
		time: '3h ago',
		tag: 'AI',
		image: require('./assets/adaptive-icon.png'),
	},
  	{
		title: 'AI breakthrough in NLP sets new benchmarks',
		description:
			'A new AI model has significantly outperformed previous systems in natural language processing tasks.',
		time: '3h ago',
		image: require('./assets/icon.png'),
		tag: 'AI',
	},
	{
		title: 'New AI model beats humans in image recognition',
		description:
			'Researchers unveil an AI system that surpasses human performance in identifying images.',
		time: '3h ago',
		image: require('./assets/splash-icon.png'),
		tag: 'AI',
	},
	{
		title: 'Advances in neural networks drive AI technology',
		description:
			'Ongoing research in neural networks is pushing the boundaries of what AI can achieve.',
		time: '3h ago',
		tag: 'AI',
		image: require('./assets/adaptive-icon.png'),
	},
  	{
		title: 'AI breakthrough in NLP sets new benchmarks',
		description:
			'A new AI model has significantly outperformed previous systems in natural language processing tasks.',
		time: '3h ago',
		image: require('./assets/icon.png'),
		tag: 'AI',
	},
	{
		title: 'New AI model beats humans in image recognition',
		description:
			'Researchers unveil an AI system that surpasses human performance in identifying images.',
		time: '3h ago',
		image: require('./assets/splash-icon.png'),
		tag: 'AI',
	},
	{
		title: 'Advances in neural networks drive AI technology',
		description:
			'Ongoing research in neural networks is pushing the boundaries of what AI can achieve.',
		time: '3h ago',
		tag: 'AI',
		image: require('./assets/adaptive-icon.png'),
	},
];

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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
