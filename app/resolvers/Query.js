const actions = require("../actions")

const prueba = (_, args, context, info) => {
    return "Hello world GraphQL"
}

const Users = (_, args, context, info) => {
    return actions.getAllUsers()
        .then(users => users)
        .catch(e => e)
}

const User = (_, args, context, info) => {
	return actions.getUserById(args.id).then((user) => {
		if (!user) throw new Error("User does not exist");
		return user;
	}).catch((e) => e);
};

const Posts = async (_, args, context, info) => {
    const posts = args.tags ? await actions.getPostsByTag(args.tags)
                    : args.category ? await actions.getPostsByCategory(args.category)
                        :   await actions.getAllPost();
    return posts
}

const Post = (_, args, context, info) => {
	return actions.getPostById(args.id).then((post) => {
		if (!post) throw new Error("Post does not exist");
		return post;
	})
		.catch(e => e);
};

module.exports = {
    prueba,
    Users,
    Posts,
    Post,
    User
}