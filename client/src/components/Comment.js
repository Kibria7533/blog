import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return (
            <div>
            <div className="comment">
             <img src="/w3images/bandmember.jpg" alt="Avatar" />
             <p>Hello. How are you today?</p>
             <span className="time-right">11:00</span>
           </div>
           <div className="comment">
             <img src="/w3images/bandmember.jpg" alt="Avatar" />
             <p>Hello. How are you today?</p>
             <span className="time-right">11:00</span>
           </div>
           <div className="comment">
             <img src="/w3images/bandmember.jpg" alt="Avatar" />
             <p>Hello. How are you today?</p>
             <span className="time-right">11:00</span>
           </div>
           <form action="/action_page.php">
             <textarea name="message" rows={5} cols={90} defaultValue={"The cat was playing in the garden."} />
             <br /><br />
             <input type="submit" />
           </form>

            </div>
        );
    }
}

export default Comment;