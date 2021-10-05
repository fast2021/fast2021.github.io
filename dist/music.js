const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Ancient Legends",
        artist: 'Tony chen',
        url: 'https://3x192928s1.eicp.vip/Share/Ancient%20Legends.m4a',
        cover: 'https://oeff2vktt.bkt.clouddn.com/image/84.jpg',
      },
      {
        name: 'Hope',
        artist: 'Tony chen',
        url: 'https://3x192928s1.eicp.vip/Share/Hope.m4a',
        cover: 'https://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      },
    ]
});