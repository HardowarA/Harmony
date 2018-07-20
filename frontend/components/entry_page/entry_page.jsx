// import React from 'react';
// import { Redirect } from 'react-router';
//
// class EntryPage extends React.Component {
//
//   constructor(props) {
//     super(props);
//   }
//
//   componentDidMount() {
//     this.props.fetchChannels(hashRoute);
//   }
//
//   componentDidUpdate(prevProps) {
//     if(prevProps.server_id !== undefined) {
//       if(this.props.server_id !== prevProps.server_id){
//         let route = location.hash;
//         route = route.slice(2);
//         route = 'api/' + route + '/channels';
//         this.props.fetchChannels(route);
//       }
//     }
//   }
//
//
//   render() {
//     const channels = this.props.channels.map(channel => {
//       return (
//         <ChannelIndexItem key={channel.id} channel={channel} />
//       );
//     });
//
//     return (
//       <div className="channelList">
//         {this.props.server_name}
//         {channels}
//         <button onClick={() => this.props.openModal('createChannel')}>+</button>
//       </div>
//     );
//   }
// }
//
// export default EntryPage;
