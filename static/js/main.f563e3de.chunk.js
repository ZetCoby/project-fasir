(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(t,e,n){t.exports=n(38)},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(19),s=n.n(r),c=(n(27),n(28),n(5)),i=n(6),l=n(8),u=n(7),h=n(9),m=n(13),p=n(10),f=(n(29),function(t){function e(){var t,n;Object(c.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={storyId:0,title:"",comments:[],url:"",score:""},n}return Object(h.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.getStoryIdFromUrl()}},{key:"getStoryIdFromUrl",value:function(){this.setState({storyId:this.props.location.pathname.split("/").pop()},this.fetchStory)}},{key:"fetchStory",value:function(){var t=this;this.state.storyId&&fetch("https://hacker-news.firebaseio.com/v0/item/".concat(this.state.storyId,".json")).then(function(t){return t.json()}).then(function(e){console.log(e),t.setState({title:e.title,comments:e.kids,url:e.url,score:e.score})})}},{key:"render",value:function(){return a.a.createElement("div",{className:"container story-view-wrapper"},a.a.createElement("div",{className:"title"},a.a.createElement("a",{href:this.state.url},this.state.title)))}}]),e}(a.a.Component)),y=(n(30),function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"story-wrapper"},a.a.createElement(m.b,{to:"/story/".concat(this.props.story.id)},a.a.createElement("div",{className:"points"},this.props.story.score," P"),a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"title"},this.props.story.title),a.a.createElement("div",{className:"details"},this.props.story.by," | ",this.props.story.kids?this.props.story.kids.length:0," comments"))))}}]),e}(a.a.Component)),d=(n(36),function(t){function e(){var t,n;Object(c.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={topStoriesIds:[],storyList:[]},n}return Object(h.a)(e,t),Object(i.a)(e,[{key:"getItems",value:function(){for(var t=this,e=[],n=0;n<=20;n++)e.push(fetch("https://hacker-news.firebaseio.com/v0/item/".concat(this.state.topStoriesIds[n],".json")).then(function(t){return t.json()}));Promise.all(e).then(function(e){t.setState({storyList:e})}).catch(console.log)}},{key:"componentDidMount",value:function(){var t=this;fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty").then(function(t){return t.json()}).then(function(e){t.setState({topStoriesIds:e}),t.getItems()}).catch(console.log)}},{key:"showStories",value:function(){return this.state.storyList.map(function(t,e){return a.a.createElement(y,{story:t,key:e})})}},{key:"render",value:function(){return a.a.createElement("div",{className:"home container-fluid"},this.showStories())}}]),e}(o.Component)),v=(n(37),function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return a.a.createElement(m.a,null,a.a.createElement("div",{className:"app container-fluid"},a.a.createElement(p.c,null,a.a.createElement(p.a,{exact:!0,path:"/",component:d}),a.a.createElement(p.a,{exact:!0,path:"/home",component:d}),a.a.createElement(p.a,{exact:!0,path:"/story/:id",component:f}))))}}]),e}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.f563e3de.chunk.js.map