const actions = require("../actions")

const prueba = (_, args, context, info) => {
    return "Hello world GraphQL"
}

const Users = (_, args, context, info) => {
    return actions.getAllUsers()
        .then(users => users)
        .catch(e => e)
}

const Posts = async (_, args, context, info) => {
    const posts = args.tag ? await actions.getPostsByTag(args.tag)
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
    Post
}