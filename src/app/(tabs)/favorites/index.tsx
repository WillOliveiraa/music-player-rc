import { useMemo } from 'react';

import { ScrollView, Text, View } from 'react-native';

import { TracksList } from '../../../components/TrackList';
import { trackTitleFilter } from '../../../helpers/filter';
import { generateTracksListId } from '../../../helpers/miscellaneous';
import { useNavigationSearch } from '../../../hooks/useNavigationSearch';
import library from '@/assets/data/library.json';
import { screenPadding } from '@/constants/tokens';
import { defaultStyles } from '@/styles';

const FavoritesScreen = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
		},
	});

	// const favoritesTracks = useFavorites().favorites;

	const filteredFavoritesTracks = useMemo(() => {
		// if (!search) return favoritesTracks;

		// return favoritesTracks.filter(trackTitleFilter(search));
		return library.filter((track) => track.rating === 1);
	}, []);

	return (
		<View style={defaultStyles.container}>
			<ScrollView
				style={{ paddingHorizontal: screenPadding.horizontal }}
				contentInsetAdjustmentBehavior="automatic"
			>
				<TracksList
					id={generateTracksListId('favorites', search)}
					scrollEnabled={false}
					tracks={filteredFavoritesTracks}
				/>
			</ScrollView>
		</View>
	);
};

export default FavoritesScreen;
