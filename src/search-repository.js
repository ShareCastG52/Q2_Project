'use strict';

const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

class SearchRepository {

  getPodcastData(itunesData) {
    let displayResults = [];

    itunesData.results.forEach(podcastData => {
      displayResults.push({
        artist_id: podcastData.artistId,
        collection_id: podcastData.collectionId,
        track_id: podcastData.trackId,
        artist_name: podcastData.artistName,
        collection_name: podcastData.collectionName,
        artist_view_url: podcastData.artistViewUrl,
        collection_view_url: podcastData.collectionViewUrl,
        feed_url: podcastData.feedUrl,
        track_view_url: podcastData.trackViewUrl,
        artwork_url_60: podcastData.artworkUrl60,
        release_date: podcastData.releaseDate,
        artwork_url_600: podcastData.artworkUrl600,
        genre_ids: podcastData.genreIds,
        genres: podcastData.genres
      });
    });

    return displayResults;
  }

  checkForPodcastInTable(podcastData) {
    return knex('podcasts')
      .where({
        artist_id: podcastData.artistId,
        track_id: podcastData.trackId
      })
      .first()
  }

  createPodcastEntry(podcastData) {
    return knex('podcasts')
      .insert({
        artist_id: podcastData.artistId,
        collection_id: podcastData.collectionId,
        track_id: podcastData.trackId,
        artist_name: podcastData.artistName,
        collection_name: podcastData.collectionName,
        artist_view_url: podcastData.artistViewUrl,
        collection_view_url: podcastData.collectionViewUrl,
        feed_url: podcastData.feedUrl,
        track_view_url: podcastData.trackViewUrl,
        artwork_url_60: podcastData.artworkUrl60,
        release_date: podcastData.releaseDate,
        artwork_url_600: podcastData.artworkUrl600,
        genre_ids: podcastData.genreIds,
        genres: podcastData.genres
      }, 'id')
  }

  getPodcastId(podcastData) {
    return knex('podcasts')
      .where({artist_id: podcastData.artistId, track_id: podcastData.trackId})
      .select('id')
      .first()
  }

  createFavoritesEntry(userId, podcastId) {
    return knex('favorites')
      .insert({
        user_id: userId,
        podcast_id: podcastId.id,
        // episode_id: newFavoriteData.episodeId
        }, '*')
  }
}

module.exports = SearchRepository;
