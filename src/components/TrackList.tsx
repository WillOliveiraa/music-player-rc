import React from 'react';
import { FlatList, FlatListProps, Text, View } from 'react-native';
import { utilsStyles } from '../styles';
import library from '@/assets/data/library.json';
import { TracksListItem } from './TracksListItem';

export type TracksListProps = Partial<FlatListProps<any>> & {
	// id: string;
	tracks: any[];
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
				<TracksListItem track={{ ...track, image: track.artwork }} />
			)}
			{...flatlistProps}
		/>
	);
};
