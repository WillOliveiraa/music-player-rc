import { screenPadding } from '@/constants/tokens';
import { defaultStyles } from '@/styles';

import { ScrollView, Text, View } from 'react-native';

const SongsScreen = () => {
	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<Text style={defaultStyles.text}>Songs screen</Text>
			</ScrollView>
		</View>
	);
};

export default SongsScreen;
