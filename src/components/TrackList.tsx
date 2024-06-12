import React from 'react';
import { FlatList, FlatListProps, Text, View } from 'react-native';
import { utilsStyles } from '../styles';
import library from '@/assets/data/library.json';
import { TracksListItem } from './TracksListItem';
import TrackPlayer, { Track } from 'react-native-track-player';

export type TracksListProps = Partial<FlatListProps<Track>> & {
	// id: string;
	tracks: Track[];
	hideQueueControls?: boolean;
};

const ItemDivider = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
);

export const TracksList = ({
	// id,
	tracks,
	hideQueueControls = false,
	...flatlistProps
}: TracksListProps) => {
	const handleTrackSelect = async (selectedTrack: Track) => {
		await TrackPlayer.load(selectedTrack);
		await TrackPlayer.play();
	};

	return (
		<FlatList
			data={tracks}
			contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
			ListEmptyComponent={
				<View>
					<Text style={utilsStyles.emptyContentText}>No songs found</Text>

					{/* <FastImage
						source={{ uri: unknownTrackImageUri, priority: FastImage.priority.normal }}
						style={utilsStyles.emptyContentImage}
					/> */}
				</View>
			}
			ListFooterComponent={ItemDivider}
			ItemSeparatorComponent={ItemDivider}
			renderItem={({ item: track }) => (
				<TracksListItem track={track} onTrackSelect={handleTrackSelect} />
			)}
			{...flatlistProps}
		/>
	);
};