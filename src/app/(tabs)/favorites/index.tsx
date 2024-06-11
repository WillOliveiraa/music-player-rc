import { screenPadding } from '@/constants/tokens';
import { defaultStyles } from '@/styles';

import { ScrollView, Text, View } from 'react-native';

const FavoritesScreen = () => {
	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<Text style={defaultStyles.text}>Favorites screen</Text>
			</ScrollView>
		</View>
	);
};

export default FavoritesScreen;
