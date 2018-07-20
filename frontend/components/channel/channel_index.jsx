import React from 'react';
import ChannelIndexItem from './channel_index_item';
import ChannelFormContainer from './channel_form_container';

class ChannelIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let hashRoute = location.hash;
    hashRoute = hashRoute.slice(2);
    let count = 0;
    let idx = -1
    for(let i = 0; i < hashRoute.length; i++) {
      if (hashRoute[i] === '/') {
        count += 1;
        if(idx = -1) {
          idx = i;
        }
      }
    }
    if (count > 1) {
      hashRoute = hashRoute.slice(0, idx);
    }
    hashRoute = 'api/' + hashRoute + '/channels';
    this.props.fetchChannels(hashRoute);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.server_id !== undefined) {
      if(this.props.server_id !== prevProps.server_id){
        let route = location.hash;
        route = route.slice(2);
        route = 'api/' + route + '/channels';
        this.props.fetchChannels(route);
      }
    }
  }


  render() {
    let channels = this.props.channels;
    let correctChannels = [];
    for(let key in channels) {
        let channel = channels[key];
        if (channel.server_id === this.props.server_id) {
        correctChannels.push(channel);
      }
    }
    // channels.forEach(channel => {
    //   if (channel.serverId === this.props.server_id) {
    //     debugger
    //     correctChannels.push(channel);
    //   }
    // });
    let renderChannels = correctChannels.map(channel => {
      return (
        <ChannelIndexItem key={channel.id} channel={channel} />
      );
    });

    return (
      <div className="channelList">
        <div className="channelListHeading">
          # {this.props.server_name}
          <button onClick={() => this.props.openModal('createChannel')}>+</button>
        </div>
        {renderChannels}
      </div>
    );
  }
}

export default ChannelIndex;
