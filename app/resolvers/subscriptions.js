const CHANELS = require("../utils/constants/chanels");

const newPosts = {
    subscribe: (parent, args, { pubsub }) => {
        return pubsub.asyncIterator(CHANELS.NEW_POSTS)
    }
}

module.exports = {
    newPosts,
};
