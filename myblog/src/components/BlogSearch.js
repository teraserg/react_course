import React, { PureComponent } from 'react';


class BlogSearch extends PureComponent {
   render() {
    return (
         <div className="aside-item">
            <h4>Blog Search</h4>
            <form autoComplete="off">
                <div className="input-group">
                    <input className="input-window" />
                    <button className="input-btn" type="submit">&#x261B;</button>
                </div>
            </form>
        </div>
     );
   }
}

export default BlogSearch;
