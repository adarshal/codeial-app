{let n=function(){let n=$("#new-post-form");n.submit((function(o){o.preventDefault();let l=n.attr("action");$.ajax({type:"POST",url:l,data:n.serialize(),success:function(n){let o=t(n.data.post,n.data.accountHolder);console.log(o),$("#posts-list-container>ul").prepend(o),$("#post-add-text").val(""),e($(" .delete-post-button",o))},error:function(n){console.log(n.responseText)}})}))},t=function(n,t){return console.log(n,t),$(`<li id="post-${n._id}">\n        <p>\n            \n        <small>\n                            \n        <a class="toggle-like-button" data-likes="0" href="/likes/toggle/?id=${n._id}&type=Post">\n            0 Likes\n        </a>\n    \n</small>\n\n           \n            ${n.content}\n            <br>\n            <small>\n            ${t}\n            </small>\n            <small>\n    <a href="/likes/togglelike/?id${n._id}&type=Post" data-like="0" class="toggle-like-btn">\n         <i class="fa-regular fa-thumbs-up likes-symbol" ></i> 0\n    </a>\n    <br>\n</small>\n        </p>\n        <div class="post-comments">\n            \n                <form action="/comments/create" method="POST" id="new-comment-form">\n                    <input type="text" name="content" placeholder="Type Here to add comment..." id="comment-add-text" required>\n                    <input type="hidden" name="post" value="${n._id}" >\n                    <input type="submit" value="Add Comment">\n                </form>\n   \n    \n            <div class="post-comments-list">\n                <ul id="post-comments-${n._id}">\n                    \n                </ul>\n            </div>\n        </div>\n        \n    </li>`)},e=function(n){$(n).click((function(t){t.preventDefault(),$.ajax({type:"get",url:$(n).prop("href"),success:function(n){$(`#post-${n.data.post_id}`).remove()},error:function(n){console.log(n.responseText)}})}))};n()}