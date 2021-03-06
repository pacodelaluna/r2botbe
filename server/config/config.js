/**
 * Created by INDIGO on 03/09/2015.
 */
if (process.env.NODE_ENV === 'staging') {
  module.exports = {
    TOKEN_SECRET: process.env.TOKEN_SECRET || '<random-token>',
    VOTECK_MONGO_URI: process.env.MONGO_URI || 'mongodb://<user>:<password>@ds<port>.mlab.com:<port>/<dbname>',
    VOTECK_MONGO_PORT: process.env.MONGO_PORT || '<port>',
    VOTECK_MONGO_DB: process.env.MONGO_DB || 'db-staging-name',
    DB_ENV: 'staging',
    FOLDER_OUTPUT: process.env.FOLDER_OUTPUT || 'outputsr2',
    FLN_VALID_VOTES: process.env.FLN_VALID_VOTES || 'valid_votes',
    FLN_INVALID_VOTES: process.env.FLN_INVALID_VOTES || 'invalid_votes',
    FLN_VOTERS: process.env.FLN_VOTERS || 'voters'
  }
} else if (process.env.NODE_ENV === 'production') {
  module.exports = {
    TOKEN_SECRET: process.env.TOKEN_SECRET || '<random-token>',
    VOTECK_MONGO_URI: process.env.MONGO_URI || 'mongodb://<user>:<password>@ds<port>.mlab.com:<port>/<dbname>',
    VOTECK_MONGO_PORT: process.env.MONGO_PORT || '<port>',
    VOTECK_MONGO_DB: process.env.MONGO_DB || 'db-production-name',
    DB_ENV: 'production',
    FOLDER_OUTPUT: process.env.FOLDER_OUTPUT || 'outputsr2',
    FLN_VALID_VOTES: process.env.FLN_VALID_VOTES || 'valid_votes',
    FLN_INVALID_VOTES: process.env.FLN_INVALID_VOTES || 'invalid_votes',
    FLN_VOTERS: process.env.FLN_VOTERS || 'voters'
  }
} else {
  module.exports = {
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'test',
    MONGO_URI: process.env.MONGO_URI || 'localhost',
    FOLDER_OUTPUT: process.env.FOLDER_OUTPUT || 'outputsr2',
    FLN_VALID_VOTES: process.env.FLN_VALID_VOTES || 'valid_votes',
    FLN_INVALID_VOTES: process.env.FLN_INVALID_VOTES || 'invalid_votes',
    FLN_VOTERS: process.env.FLN_VOTERS || 'voters'
  }
}
