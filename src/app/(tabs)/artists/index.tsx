import { screenPadding } from '@/constants/tokens';
import { defaultStyles } from '@/styles';

import { ScrollView, Text, View } from 'react-native';

const ArtistsScreen = () => {
	return (
		<View style={defaultStyles.container}>
			<Text style={defaultStyles.text}>Artists screen</Text>
		</View>
	);
};

export default ArtistsScreen;
