import './gitCards.css';
import React from 'react';
import axios from 'axios';


const testData = [
	{
        id: 1,
        name: "Dan Abramov", 
        avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", 
        company: "@facebook"
    },
    {
        id: 2,
        name: "Sophie Alpert", 
        avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", 
        company: "Humu"
    },
  	{
        id: 3,
        name: "Sebastian Markbåge", 
        avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", 
        company: "Facebook"
    },
];


class Form extends React.Component {
    // userNameInput = React.createRef();
    state = { userName: "" }

    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data)
        this.setState({ userName: "" })
    };

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                    placeholder="GitHub username"
                    required
                />
                <button>Add card</button>
            </form>
        );
    }
}


const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
    </div>
);


export class Card extends React.Component {
    render() {
        const profile = this.props;

        return (
            <div className="github-profile" style={{ margin: '1erm' }}>
                <img src={profile.avatar_url} style={{ width: '75px' }}/>
                <div className="info" style={{display: 'inline-block', marginLeft: 10}}>
                    <div className="name" style={{ fontSize: '125%'}}>{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        )
    }
}


export class CardApp extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         profiles: testData,
    //     };
    // }

    state = {
        profiles: testData,
    };

    addNewProfile = (profileData) => {
        this.setState( prevState => ({
            profiles: [...prevState.profiles, profileData]
        }))
    }

    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Form onSubmit={this.addNewProfile} />
                <CardList profiles={this.state.profiles} />
            </div>
        )
    }
}
