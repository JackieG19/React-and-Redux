import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import pokeball from '../pokeball.png'
import { connect } from 'react-redux'

class Home extends Component {
    render(){
        console.log(this.post)
        const { posts } = this.props;
        const postList = post.length ? (
            posts.map(post => {
             return (
                 <div className="post card" key={post.id}>
                    <div className="card-content">
                        <img src={pokeball} alt="A pokeball"/>
                        <Link to={'/' + post.id} >
                            <span className="card-title red-text">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                 </div>
             )   
            })
        ) : (
            <div className="center">No posts yet</div>
        )

        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);