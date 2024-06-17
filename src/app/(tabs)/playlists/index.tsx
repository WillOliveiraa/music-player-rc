import { screenPadding } from '@/constants/tokens';
import { defaultStyles } from '@/styles';
import { useRouter } from 'expo-router';
import React, { useMemo } from 'react';

import { ScrollView, Text, View } from 'react-native';
import { Playlist } from '../../../helpers/types';
import { useNavigationSearch } from '../../../hooks/useNavigationSearch';
import { PlaylistsList } from '../../../components/playlist/PlaylistsList';
import { usePlaylists } from '../../../store/library';
import { playlistNameFilter } from '../../../helpers/filter';

const PlaylistsScreen = () => {
	const router = useRouter();

	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in playlists',
		},
	});

	const { playlists } = usePlaylists();

	const filteredPlaylists = useMemo(() => {
		return playlists.filter(playlistNameFilter(search));
	}, [playlists, search]);

	const handlePlaylistPress = (playlist: Playlist) => {
		router.push(`/(tabs)/playlists/${playlist.name}`);
	};

	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{
					paddingHorizontal: screenPadding.horizontal,
				}}
			>
				<PlaylistsList
					scrollEnabled={false}
					playlists={filteredPlaylists}
					onPlaylistPress={handlePlaylistPress}
				/>
			</ScrollView>
		</View>
	);
};

export default PlaylistsScreen;
