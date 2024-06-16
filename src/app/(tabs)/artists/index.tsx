import { ScrollView, Text, View } from 'react-native';

import { screenPadding } from '@/constants/tokens';
import { defaultStyles } from '@/styles';


const ArtistsScreen = () => {
	return (
		<View style={defaultStyles.container}>
			<Text style={defaultStyles.text}>Artists screen</Text>
		</View>
	);
};

export default ArtistsScreen;
