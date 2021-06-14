import React, { Component } from 'react';


class AddPhoto extends Component {

constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
}

    handleSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post ={
            id:Number(new Date()),
            description:description,
            imageLink: imageLink
        };
        
        if(imageLink && description){
                this.props.onAddphoto(post)
        }

    }



    render() {
        return (<>
            <h1>Add Photo</h1>
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="add link" name="link"/>
                    <input type="text" placeholder="description" name="description" />
<button className="">Post</button>
                </form>
            </div>

        </>
        )
    }
}

export default AddPhoto;