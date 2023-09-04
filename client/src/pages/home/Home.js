// import React from 'react'

// function Home() {
//     const home = {
//         textAlign: 'center',
//         marginTop: '100px'
//     }
//   return (
//     <>
//     <div>
//         <h2 style={home}>Home</h2>
//     </div>
//     </>
//   )
// }

// export default Home
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const sampleObjects = [
    {
      title: 'Sample Title 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      username: 'user1',
    },
    {
      title: 'Sample Title 2',
      content: 'Nulla facilisi. Curabitur ut leo nec arcu egestas bibendum.',
      username: 'user2',
    },
    {
      title: 'Sample Title 3',
      content: 'Fusce eu risus ac nisi fringilla facilisis.',
      username: 'user3',
    },
    {
      title: 'Sample Title 4',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      username: 'user4',
    },
    {
      title: 'Sample Title 5',
      content: 'Aliquam convallis nisi eu felis dignissim, vel iaculis nisi pharetra.',
      username: 'user5',
    },
    {
      title: 'Sample Title 6',
      content: 'Vivamus feugiat risus id orci tristique, sed tincidunt nulla vehicula.',
      username: 'user6',
    },
    {
      title: 'Sample Title 7',
      content: 'Cras bibendum ipsum nec erat volutpat, at volutpat erat dictum.',
      username: 'user7',
    },
    {
      title: 'Sample Title 8',
      content: 'Etiam eget elit nec justo tincidunt bibendum nec quis lorem.',
      username: 'user8',
    },
    {
      title: 'Sample Title 9',
      content: 'In vestibulum tortor eget magna dignissim, in iaculis lorem sollicitudin.',
      username: 'user9',
    },
    {
      title: 'Sample Title 10',
      content: 'Suspendisse at velit eu elit scelerisque interdum vel ac nisl.',
      username: 'user10',
    },
    {
      title: 'Sample Title 11',
      content: 'Phasellus consectetur neque eget justo elementum fringilla.',
      username: 'user11',
    },
    {
      title: 'Sample Title 12',
      content: 'Donec malesuada lectus eget convallis vehicula.',
      username: 'user12',
    },
    {
      title: 'Sample Title 13',
      content: 'Aenean non lectus ut urna tincidunt egestas eu vel metus.',
      username: 'user13',
    },
    {
      title: 'Sample Title 14',
      content: 'Sed vehicula nunc nec cursus. Sed commodo hendrerit libero.',
      username: 'user14',
    },
    {
      title: 'Sample Title 15',
      content: 'Quisque dictum justo et urna laoreet, at consectetur ipsum feugiat.',
      username: 'user15',
    },
    {
      title: 'Sample Title 16',
      content: 'Fusce ac felis ac urna iaculis sollicitudin ut at nisi.',
      username: 'user16',
    },
    {
      title: 'Sample Title 17',
      content: 'Praesent vel odio a nisi auctor tincidunt id a justo.',
      username: 'user17',
    },
    {
      title: 'Sample Title 18',
      content: 'Vestibulum id ligula vitae tortor cursus interdum eget a sapien.',
      username: 'user18',
    },
    {
      title: 'Sample Title 19',
      content: 'Integer dapibus arcu in risus mattis, ac tempus lorem tempus.',
      username: 'user19',
    },
    {
      title: 'Sample Title 20',
      content: 'Nam id odio vitae lectus rhoncus hendrerit sit amet non est.',
      username: 'user20',
    },
  ];
  

let page = 1;
const fetchData = (setItems, items) => {
 axios
   .get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
   .then((res) => {
     setItems([...items, ...res.data]);
     page = page + 1;
   });
};
 
const refresh = (setItems) => {};
 
export default function Home() {
 const [items, setItems] = React.useState([]);
 
 React.useEffect(()=>{
   fetchData(setItems,items)
 },[])
 return (
   <InfiniteScroll
     dataLength={items.length} //This is important field to render the next data
     next={() => {
       fetchData(setItems, items);
     }}
     hasMore={true}
     loader={<h4>Loading...</h4>}
     endMessage={
       <p style={{ textAlign: "center" }}>
         <b>Yay! You have seen it all</b>
       </p>
     }
     // below props only if you need pull down functionality
     refreshFunction={refresh}
     pullDownToRefresh
     pullDownToRefreshThreshold={50}
     pullDownToRefreshContent={
       <h3 style={{ textAlign: "center" }}># 8595; Pull down to refresh</h3>
     }
     releaseToRefreshContent={
       <h3 style={{ textAlign: "center" }}># 8593; Release to refresh</h3>
     }
   >
     <div style={{ minHeight: "100vh" }}>
       {items.map((user) => (
         <img src={user.url} height="100px" width="200px" />
       ))}
     </div>
   </InfiniteScroll>
 );
}