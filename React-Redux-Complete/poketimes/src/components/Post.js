import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component {
    render() {
        //console.log(this.props)
        handleClick = () => {
            this.props.deletePost(this.props.post.id);
        }
        const post = this.props.post ? (
            <div className="post"> 
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                <button className="btn grey" onClick={this.handleClick}>
                    Delete Post
                </button>
                </div>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        )

        return (
            <div className="container">
                { post }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
       post: state.posts.find(post => post.id === id)
    }
}

const mapStateToProps = (dispatch) => {
    return {
        deletePost: (id) => { dipatch({type: 'DELETE_POST', id: id }) }
    }
}

// store.dispatch({type})

export default connect(mapStateToProps)(Post)
