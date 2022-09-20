Your task is to create a forum that contains posts and comments. All of these should be retrieved from the following API endpoints:


Posts: https://jsonplaceholder.typicode.com/posts

Comments: https://jsonplaceholder.typicode.com/comments



##/ (home page)


The user must see all posts - only print the title of the posts.

When clicking on the title of a post, the user should be navigated to a new page with the URL /post/:id .


##/post/:id


Here, the user should be able to see the post's title and text content. Also print all comments made in this post. Each comment must contain its text content, as well as the name and email of the person who commented.

There should also be a button to go back to the list of all posts (start page).


###Technical requirements

A user should be able to enter an id in the URL (eg /post/9) and be able to see the post with that id.
