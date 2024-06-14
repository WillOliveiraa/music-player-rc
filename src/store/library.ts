import { Track } from 'react-native-track-player';
import { create } from 'zustand';

import library from '@/assets/data/library.json';
import { TrackWithPlaylist } from '../helpers/types';

interface LibraryState {
	tracks: TrackWithPlaylist[];
	toggleTrackFavorite: (track: Track) => void;
	addToPlaylist: (track: Track, playlistName: string) => void;
}

export const useLibraryStore = create<LibraryState>()((set) => ({
	tracks: library,
	toggleTrackFavorite: (track) =>
		set((state) => ({
			tracks: state.tracks.map((currentTrack) => {
				if (currentTrack.url === track.url) {
					return {
						...currentTrack,
						rating: currentTrack.rating === 1 ? 0 : 1,
					};
				}

				return currentTrack;
			}),
		})),
	addToPlaylist: (track, playlistName) =>
		set((state) => ({
			tracks: state.tracks.map((currentTrack) => {
				if (currentTrack.url === track.url) {
					return {
						...currentTrack,
						playlist: [...(currentTrack.playlist ?? []), playlistName],
					};
				}

				return currentTrack;
			}),
		})),
}));

export const useTracks = () => useLibraryStore((state) => state.tracks);

export const useFavorites = () => {
	const favorites = useLibraryStore((state) => state.tracks.filter((track) => track.rating === 1));
	const toggleTrackFavorite = useLibraryStore((state) => state.toggleTrackFavorite);

	return {
		favorites,
		toggleTrackFavorite,
	};
};
