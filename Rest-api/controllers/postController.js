const { userModel, fruitModel, postModel } = require('../models');

function newPost(text, userId, themeId) {
    return postModel.create({ text, userId, themeId })
        .then(post => {
            return Promise.all([
                userModel.updateOne({ _id: userId }, { $push: { posts: post._id }, $addToSet: { fruits: fruitId } }),
                fruitModel.findByIdAndUpdate({ _id: fruitId }, { $push: { posts: post._id }, $addToSet: { subscribers: userId } }, { new: true })
            ])
        })
}

function getLatestsPosts(req, res, next) {
    const limit = Number(req.query.limit) || 0;

    postModel.find()
        .sort({ created_at: -1 })
        .limit(limit)
        .populate('fruitId userId')
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(next);
}

function createPost(req, res, next) {
    const { fruitId } = req.params;
    const { _id: userId } = req.user;
    const { postText } = req.body;

    newPost(postText, userId, fruitId)
        .then(([_, updatedFruit]) => res.status(200).json(updatedFruit))
        .catch(next);
}

function editPost(req, res, next) {
    const { postId } = req.params;
    const { postText } = req.body;
    const { _id: userId } = req.user;

    // if the userId is not the same as this one of the post, the post will not be updated
    postModel.findOneAndUpdate({ _id: postId, userId }, { text: postText }, { new: true })
        .then(updatedPost => {
            if (updatedPost) {
                res.status(200).json(updatedPost);
            }
            else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}

function deletePost(req, res, next) {
    const { postId, fruitId } = req.params;
    const { _id: userId } = req.user;

    Promise.all([
        postModel.findOneAndDelete({ _id: postId, userId }),
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { posts: postId } }),
        fruitModel.findOneAndUpdate({ _id: fruitId }, { $pull: { posts: postId } }),
    ])
        .then(([deletedOne, _, __]) => {
            if (deletedOne) {
                res.status(200).json(deletedOne)
            } else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}

function like(req, res, next) {
    const { postId } = req.params;
    const { _id: userId } = req.user;

    console.log('like')

    postModel.updateOne({ _id: postId }, { $addToSet: { likes: userId } }, { new: true })
        .then(() => res.status(200).json({ message: 'Liked successful!' }))
        .catch(next)
}

module.exports = {
    getLatestsPosts,
    newPost,
    createPost,
    editPost,
    deletePost,
    like,
}
