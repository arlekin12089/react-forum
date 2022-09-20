Your task is to create a forum that contains posts and comments. All of these should be retrieved from the following API endpoints:


Posts: https://jsonplaceholder.typicode.com/posts

Comments: https://jsonplaceholder.typicode.com/comments



## (home page)


The user must see all posts - only print the title of the posts.

When clicking on the title of a post, the user should be navigated to a new page with the URL /post/:id .


## post/:id


Here, the user should be able to see the post's title and text content. Also print all comments made in this post. Each comment must contain its text content, as well as the name and email of the person who commented.

There should also be a button to go back to the list of all posts (start page).


## Technical requirements

A user should be able to enter an id in the URL (eg /post/9) and be able to see the post with that id.
<img width="1380" alt="Screenshot 2022-09-20 at 17 43 26" src="https://user-images.githubusercontent.com/22168037/191307179-3ec18eeb-e481-42ef-b941-1ad70beea4f7.png">
<img width="1363" alt="Screenshot 2022-09-20 at 17 43 51" src="https://user-images.githubusercontent.com/22168037/191307186-f0360f08-77a6-4c1a-b724-00e4e20d7cf5.png">
