const Post = require('../models/post');
const User = require('../models/users');

module.exports.home = async function (req, res) {

        // populate the user of each post //25dec populate likes
   
        try{
            // CHANGE :: populate the likes of each post and comment
            let posts = await Post.find({})
            .sort('-createdAt')
            .populate('user')
            .populate({
                path: 'comments',
                populate: {
                    path: 'user'
                },
                populate: {
                    path: 'likes'
                }
            }).populate('likes');
    
        
            let users = await User.find({});
    
            return res.render('home', {
                title: "Codeial | Home",
                posts:  posts,
                all_users: users
            });
    
        }catch(err){
            console.log('Error', err);
            return;
        }
       
    }


    // populate the user of each post using exec old 1.1 Now use=ing asyc await
    // Post.find({}).populate('user')
    //     .populate(
    //         {
    //             path: 'comments',
    //             populate: {
    //                 path: 'user'
    //             }
    //         }
    //     )

    //     .exec(function (err, posts) {
    //         User.find({}, function (err, users) {
    //             return res.render('home', {
    //                 title: "Codeial | Home",
    //                 posts: posts,
    //                 user_list:users
    //             });
    //         });
    //     });

    //old
    //    return res.render('home',{
    //         title : 'Home'
    //     })
// }