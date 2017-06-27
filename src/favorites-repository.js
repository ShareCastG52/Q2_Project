'use strict';

const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

class FavoritesRepository {

  query(userId) {
    return knex('favorites')
      .leftJoin('podcasts', 'podcasts.id', 'favorites.podcast_id')
      .leftJoin('episodes', 'episodes.id', 'favorites.episode_id')
      //may need right join, not left join
      .where('user_id', userId)
  }

  get(userId, favoritesId) {
    return knex('favorites')
      .where({id: favoritesId, user_id: userId})
  }

  create(userId, newFavoriteData) {
    return knex('favorites')
      .insert({
        user_id: userId,
        user_id_shared: newFavoriteData.userIdShared,
        podcast_id: newFavoriteData.podcastId,
        episode_id: newFavoriteData.episodeId
        }, '*')
  }

  delete(userId, favoriteId) {
    knex('favorites')
    .where({id: favoriteId, user_id: userId})
    .del()
    .returning(['id', 'user_id'])
  }
}

module.exports = FavoritesRepository;
