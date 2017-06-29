'use strict';

const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

class FavoritesRepository {

  queryAll(userId) {
    return knex('podcasts')
      .innerJoin('favorites', 'podcasts.id', 'favorites.podcast_id')

      // NOTE episodes table will require utilizing a different API as Itunes doesn't allow for episodes taggin within podcasts, sad I know
      // .leftJoin('episodes', 'episodes.id', 'favorites.episode_id')
      //may need right join, not left join
      .where('favorites.user_id', userId)
  }

  getFav(userId, favoritesId) {
    return knex('favorites')
      .innerJoin('podcasts', 'podcasts.id', 'favorites.podcast_id')
      .where({podcast_id: favoritesId, user_id: userId}, 'podcast_id')
  }

  createRelationship(userId, newFavoriteData) {

    return knex('favorites')
      .insert({
        user_id: userId,
        user_id_shared: newFavoriteData.userIdShared,
        podcast_id: newFavoriteData.podcastId,
        // episode_id: newFavoriteData.episodeId
        }, '*')
  }

  delete(userId, favoriteId) {
    return knex('favorites')
      .where({podcast_id: favoriteId, user_id: userId})
      .del()
      .returning("*")
  }
}

module.exports = FavoritesRepository;
