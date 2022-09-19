const Comment = ({ name, email, body, id }) => {
  return (
    <div className="comment">
      <div className="comment_avatar">
        <img className="user" src="https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"></img>
      </div>
      <div className="comment_body">
	  	
        <h4>
          #{id} {name}
        </h4>
        <p>{body}</p>
        <div>
          <span class="comment_by">By {email}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
