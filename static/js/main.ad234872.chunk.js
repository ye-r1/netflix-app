(this["webpackJsonpnetflix-app"]=this["webpackJsonpnetflix-app"]||[]).push([[0],{259:function(n,e,t){},260:function(n,e,t){"use strict";t.r(e);var r=t(2),i=t(1),a=t.n(i),c=t(38),o=t.n(c),s=t(10),u=t(9),d=t(27);function l(){var n=Object(s.a)(["\n"]);return l=function(){return n},n}function b(){var n=Object(s.a)(["\n  display: flex;\n  align-content: center;\n"]);return b=function(){return n},n}function j(){var n=Object(s.a)(["\n  height: 50px;\n  max-width: 1400px;\n  margin: 0 auto;\n  width: 93%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  h1 {\n    margin-right: 10px;\n    color: ",";\n    font-weight: 500;\n    font-family: 'Montserrat', sans-serif;\n    display: flex;\n    align-items: center;\n  }\n\n  ul {\n    display: flex;\n    align-items: center;\n    height: 50px;\n\n    li {\n      padding: 0 20px;\n    }\n  }\n"]);return j=function(){return n},n}function f(){var n=Object(s.a)(["\n  border-bottom: 1px solid #333;\n  background: #121212;\n  font-size: 13px;\n"]);return f=function(){return n},n}var m=u.b.header(f()),p=u.b.div(j(),(function(n){return n.theme.mainColor})),v=u.b.div(b()),h=u.b.div(l()),O=t(22);var g=function(){var n=Object(O.b)((function(n){return n.user})).isLoggedIn,e=void 0!==n&&n;return Object(r.jsx)(m,{children:Object(r.jsxs)(p,{children:[Object(r.jsxs)(v,{children:[Object(r.jsx)("h1",{children:Object(r.jsx)(d.b,{to:"/",children:"Movie App"})}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{to:"/genre",children:"Genre"})}),Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{to:"/member/my-list",children:"MyList"})}),Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{to:"/search",children:"Search"})})]})]}),Object(r.jsx)(h,{children:Object(r.jsx)("ul",{children:e?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{to:"/member/profile",children:"profile"})}),Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{to:"/member/logout",children:"logout"})})]}):Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{to:"/member/login",children:"login"})})})})]})})};function x(){var n=Object(s.a)(["\n    overflow:hidden;\n"]);return x=function(){return n},n}function y(){var n=Object(s.a)(["\n  font-size: 13px;\n"]);return y=function(){return n},n}var w=u.b.div(y()),L=u.b.main(x()),T=function(n){var e=n.children;return Object(r.jsxs)(w,{children:[Object(r.jsx)(g,{}),Object(r.jsx)(L,{children:e})]})},M=t(16),S=t(17);var k=function(n){var e=n.name,t=n.item,r=n.target;return"assending"===e?function(n,e){return n&&n.sort((function(n,t){return n[e]-t[e]}))}(t,r):"descending"===e?function(n,e){return n&&n.sort((function(n,t){return t[e]-n[e]}))}(t,r):"guid"===e?Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15):void 0};var E=function(n){var e=n.Movies,t=n.myList,r=n.bestMovies;return[function(n){var i,a=n.el,c=n.val,o=n.sorting;return"genres"===a&&(i=e.length&&e.filter((function(n){return-1!==n.genres.indexOf(c)}))),"myList"===a&&(i=t&&t.map((function(n){return e.find((function(e){return e.id===n}))}))),"recommend"===a&&(i=e.length&&r.map((function(n){return e.find((function(e){return e.id===n}))}))),!1!==o&&(i=k({name:"descending",item:i,target:"rating"})),i}]},I=t(33),D=t(118),P=t.n(D);function _(){var n=Object(s.a)(["\n  margin-top: 5px;\n  font-size: 13px;\n"]);return _=function(){return n},n}function A(){var n=Object(s.a)(["\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  transition: .4s;\n"]);return A=function(){return n},n}function U(){var n=Object(s.a)(["\n  height: 0;\n  overflow: hidden;\n  position: relative;\n  padding-bottom: 85%;\n"]);return U=function(){return n},n}function C(){var n=Object(s.a)(["\n  padding: 0 3px;\n  box-sizing: border-box;\n  &:hover img{\n    opacity: 0.4;\n  }\n"]);return C=function(){return n},n}function z(){var n=Object(s.a)(["\n  margin-top: 10px;\n"]);return z=function(){return n},n}var F=Object(u.b)(P.a)(z()),R=u.b.div(C()),Y=u.b.div(U()),N=u.b.img(A()),V=u.b.h3(_());var B=function(n){var e=n.item,t=n.settings;return Object(r.jsx)(F,Object(I.a)(Object(I.a)({},t),{},{children:e.length&&e.map((function(n){return Object(r.jsx)(R,{children:Object(r.jsxs)(d.b,{to:"/detail/".concat(n.id),children:[Object(r.jsx)(Y,{children:Object(r.jsx)(N,{src:n.large_cover_image,alt:n.title})}),Object(r.jsx)(V,{className:"e_",children:n.title})]})},n.id)}))}))};function G(){var n=Object(s.a)(["\n  color: #fff;\n  padding: 15px 0;\n  h2 {\n    font-size: 15px;\n  }\n"]);return G=function(){return n},n}var q=u.b.div(G()),J=function(n){var e=n.itemlistTitle,t=n.item,i=n.settings;return Object(r.jsxs)(q,{children:[Object(r.jsx)("h2",{children:e}),Boolean(t.length)&&Object(r.jsx)(B,{item:t,settings:i})]})};function H(){var n=Object(s.a)(["\n  position: relative;\n  max-width: 93%;\n  margin: 0 auto;\n  padding: 40px 0;\n"]);return H=function(){return n},n}var W=u.b.div(H());var K=function(n){var e=n.MovieListFilter,t=void 0===e?{}:e,i=n.isLoggedIn,a=n.nickname,c=void 0===a?"":a,o=n.myList,s=n.settings;return Object(r.jsxs)(W,{children:[Object(r.jsx)(J,{settings:s,itemlistTitle:"\uc778\uae30 \ucd94\ucc9c \ucee8\ud150\uce20",item:t({el:"recommend",sorting:!1})}),i&&Boolean(o.length)&&Object(r.jsx)(J,{settings:s,itemlistTitle:"".concat(c,"\ub2d8\uc774 \uc88b\uc544\ud558\ub294 \ucee8\ud150\uce20"),item:t({el:"myList",sorting:!1})}),Object(r.jsx)(J,{itemlistTitle:"\ub4dc\ub77c\ub9c8",settings:s,item:t({el:"genres",val:"Drama"})}),Object(r.jsx)(J,{itemlistTitle:"\ucf54\ubbf8\ub514 \uc601\ud654",settings:s,item:t({el:"genres",val:"Comedy"})})]})};var Q=function(){var n=Object(O.b)((function(n){return n})),e=n.app,t=e.Movies,i=void 0===t?[]:t,a=e.bestMovies,c=void 0===a?[]:a,o=n.user,s=o.isLoggedIn,u=void 0!==s&&s,d=o.LoginData,l=d.myList,b=void 0===l?[]:l,j=d.nickname,f=void 0===j?"":j,m=E({Movies:i,myList:b,bestMovies:c}),p=Object(S.a)(m,1)[0];return Object(r.jsx)(K,{MovieListFilter:p,isLoggedIn:u,nickname:f,myList:b,settings:{dots:!1,infinite:!1,speed:500,slidesToShow:7,slidesToScroll:7,touchMove:!1}})},X=t(119);function Z(){var n=Object(s.a)(["\n  font-size: 20px;\n  transition: animation .4s;\n  @keyframes bounceHeart {\n    0% {transform: translateY(0px)}\n    50% {transform: translateY(-3px)}\n    100% {transform: translateY(0px)}\n  }\n"]);return Z=function(){return n},n}function $(){var n=Object(s.a)(["\n  font-size: 15px;\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  transition: .4s;\n\n  span {\n    margin-left: 8px;\n  }\n\n  &:not(.active):hover {\n    opacity: 0.5;\n  }\n\n  svg {\n    animation: bounceHeart 1s 2 ease-out;\n  }\n  &.active {\n    color: #34b56b;\n  }\n"]);return $=function(){return n},n}function nn(){var n=Object(s.a)(["\n"]);return nn=function(){return n},n}function en(){var n=Object(s.a)(["\n  overflow:hidden;\n  margin-top: 50px;\n  background: rgba(0,0,0,0.5);\n  padding: 35px 25px;\n  box-sizing: border-box;\n  h3 {\n    margin-bottom: 10px;\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(s.a)(["\n  + span {\n    margin-left: 5px;\n  }\n"]);return tn=function(){return n},n}function rn(){var n=Object(s.a)(["\n    opacity: 0.5;\n"]);return rn=function(){return n},n}function an(){var n=Object(s.a)(["\n  font-size: 15px;\n  margin: 20px 0 25px;\n  max-width: 600px;\n  line-height: 1.6;\n  opacity: 0.7;\n"]);return an=function(){return n},n}function cn(){var n=Object(s.a)(["\n    opacity: 0.5;\n"]);return cn=function(){return n},n}function on(){var n=Object(s.a)(["\n    margin-bottom: 20px;\n"]);return on=function(){return n},n}function sn(){var n=Object(s.a)(["\n    margin: 15px 0px 0px;\n"]);return sn=function(){return n},n}function un(){var n=Object(s.a)(["\n  font-family: 'Montserrat', sans-serif;\n  font-size: 32px;\n  letter-spacing: -.3px;\n"]);return un=function(){return n},n}function dn(){var n=Object(s.a)(["\n  box-sizing: border-box;\n  padding: 0 50px;\n  font-size: 14px;\n  width: calc(100% - 250px);\n\n  @media "," {\n    width: 100%;\n    padding: 20px 0;\n  }\n"]);return dn=function(){return n},n}function ln(){var n=Object(s.a)(["\n  width: 250px;\n\n  @media "," {\n    width: 180px;\n  }\n"]);return ln=function(){return n},n}function bn(){var n=Object(s.a)(["\n"]);return bn=function(){return n},n}function jn(){var n=Object(s.a)(["\n"]);return jn=function(){return n},n}function fn(){var n=Object(s.a)(["\n  display: flex;\n\n  @media "," {\n    flex-wrap: wrap;\n  }\n"]);return fn=function(){return n},n}function mn(){var n=Object(s.a)(["\n"]);return mn=function(){return n},n}var pn=u.b.div(mn()),vn=u.b.div(fn(),(function(n){return n.theme.mobile})),hn=u.b.div(jn()),On=u.b.div(bn()),gn=u.b.img(ln(),(function(n){return n.theme.mobile})),xn=u.b.div(dn(),(function(n){return n.theme.mobile})),yn=u.b.h2(un()),wn=u.b.div(sn()),Ln=u.b.div(on()),Tn=u.b.div(cn()),Mn=u.b.div(an()),Sn=u.b.div(rn()),kn=u.b.span(tn()),En=u.b.div(en()),In=u.b.div(nn()),Dn=u.b.button($()),Pn=Object(u.b)(X.a)(Z()),_n=t(120),An=t(8),Un=t.n(An);function Cn(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(_n.a,{})," ",Object(r.jsx)("span",{children:"\ubcf4\uad00\ud568\uc5d0 \ucd94\uac00\ub428"})]})}function zn(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Pn,{})," ",Object(r.jsx)("span",{children:"\ubcf4\uad00\ud568\uc5d0 \ucd94\uac00"})]})}var Fn=function(n){var e=n.post,t=n.otherPost,i=n.isLiked,a=n.isLoggedIn,c=n.toggleLikeButton,o=n.settings;return Object(r.jsx)(pn,{children:Object(r.jsxs)(vn,{children:[Object(r.jsxs)(hn,{children:[Object(r.jsx)(On,{children:Object(r.jsx)(gn,{src:e.medium_cover_image,alt:""})}),a&&Object(r.jsx)(Dn,{type:"button",onClick:function(){return c(i)},className:Un()({active:i}),children:i?Object(r.jsx)(Cn,{}):Object(r.jsx)(zn,{})})]}),Object(r.jsxs)(xn,{children:[Object(r.jsx)(yn,{children:e.title_long}),Object(r.jsx)(wn,{children:e.year}),Object(r.jsxs)(Ln,{children:["\ubcc4\uc810 : \u2b50",e.rating]}),Object(r.jsx)(Mn,{children:e.description_full}),Object(r.jsxs)(Tn,{children:["\uc804\uccb4 : ",e.runtime,"\ubd84"]}),Object(r.jsxs)(Sn,{children:["\uc7a5\ub974 :",e.genres&&e.genres.map((function(n,e){return Object(r.jsx)(kn,{children:n},e)}))]}),Object(r.jsxs)(En,{children:[Object(r.jsxs)("h3",{children:[e.title," \uc640 \ube44\uc2b7\ud55c \uc791\ud488"]}),t&&void 0!==typeof t&&t.length&&Object(r.jsx)(B,{item:t,settings:o}),Object(r.jsx)(In,{})]})]})]})})};function Rn(){var n=Object(s.a)(["\n    z-index: 2;\n"]);return Rn=function(){return n},n}function Yn(){var n=Object(s.a)(["\n  position: relative;\n  min-height: 100vh;\n  background: #202020 "," no-repeat center top /cover fixed;\n  transition: background-image 0.5s .1s;\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.5);\n  }\n"]);return Yn=function(){return n},n}var Nn=u.b.div(Yn(),(function(n){return n.background&&"url(".concat(n.background,")")})),Vn=Object(u.b)(W)(Rn()),Bn=t(39),Gn={openSidebar:!1,bestMovies:[26185,26232,26213,26229,26231,26229,26216,26182,26206,26199]},qn={Types:{UPDATE_STATE:"@@APP/UPDATE_STATE",GET_MOVIES:"@@APP/GET_MOVIES"},Creators:{updateState:function(n){return{type:qn.Types.UPDATE_STATE,payload:n}},getMovies:function(){return{type:qn.Types.GET_MOVIES}}}},Jn=t(121),Hn={Users:[{id:"7c1a38ba-2ebe-4600-a546-9f7482766aee",userId:"admin",userPassword:"1234",nickname:"ye-r1",myList:[26231,26229,26199,26216,26182,26206],SearchList:[]}],LoginData:{},isLoggedIn:!1},Wn={Types:{UPDATE_STATE:"@@USER/UPDATE_STATE",ADDED_USER:"@@USER/ADDED_USER",ADD_MYLIST:"@@USER/ADD_MYLIST",REMOVE_MYLIST:"@@USER/REMOVE_MYLIST"},Creators:{updateState:function(n){return{type:Wn.Types.UPDATE_STATE,payload:n}},addedUser:function(n){return{type:Wn.Types.ADDED_USER,payload:n}},addMyList:function(n){return{type:Wn.Types.ADD_MYLIST,payload:n}},removeMyList:function(n){return{type:Wn.Types.REMOVE_MYLIST,payload:n}}}},Kn=Object(Bn.combineReducers)({app:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){default:return n;case qn.Types.UPDATE_STATE:return Object(I.a)(Object(I.a)({},n),e.payload)}},user:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Hn,e=arguments.length>1?arguments[1]:void 0;return Object(Jn.a)(n,(function(t){switch(e.type){default:return t;case Wn.Types.UPDATE_STATE:return Object(I.a)(Object(I.a)({},n),e.payload);case Wn.Types.ADDED_USER:t.Users.push(e.payload);break;case Wn.Types.ADD_MYLIST:t.LoginData.myList.unshift(e.payload);break;case Wn.Types.REMOVE_MYLIST:t.LoginData.myList.splice(t.LoginData.myList.indexOf(e.payload),1)}}))}}),Qn=t(139),Xn=t(36),Zn=t.n(Xn),$n=t(53),ne=t(122),ee=t(90),te=t.n(ee);te.a.defaults.baseURL="/netflix-app/";var re={getMovies:function(){var n=Object(ne.a)(Zn.a.mark((function n(){return Zn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,te.a.get("/list_movies.json");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},ie=Zn.a.mark(ae);function ae(){return Zn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object($n.a)([Object($n.d)(qn.Types.GET_MOVIES,Zn.a.mark((function n(){var e;return Zn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object($n.b)(re.getMovies);case 2:if(!(null===(e=n.sent)||void 0===e?void 0:e.data)){n.next=6;break}return n.next=6,Object($n.c)(qn.Creators.updateState({Movies:e.data.data.movies}));case 6:case"end":return n.stop()}}),n)})))]);case 2:case"end":return n.stop()}}),ie)}var ce=ae,oe=Zn.a.mark(se);function se(){return Zn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),oe)}var ue=se,de=Zn.a.mark(le);function le(){return Zn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object($n.a)([ce(),ue()]);case 2:case"end":return n.stop()}}),de)}var be=le,je=t(123),fe=Object(Qn.a)(),me=Object(Bn.createStore)(Kn,Object(je.composeWithDevTools)(Object(Bn.applyMiddleware)(fe)));fe.run(be);var pe=me,ve=pe.dispatch,he=Object(Bn.bindActionCreators)(qn.Creators,ve),Oe=Object(Bn.bindActionCreators)(Wn.Creators,ve);var ge=function(n,e,t){var r=Object(i.useState)(!1),a=Object(S.a)(r,2),c=a[0],o=a[1],s=Object(i.useState)({}),u=Object(S.a)(s,2),d=u[0],l=u[1],b=Object(i.useState)({}),j=Object(S.a)(b,2),f=j[0],m=j[1];return Object(i.useEffect)((function(){var t=e.length&&e.find((function(e){return n===e.id}));l(t)}),[e,n]),Object(i.useEffect)((function(){var n=d&&Boolean(t.find((function(n){return n===d.id}))),r=d.genres,i=r&&e.filter((function(n){for(var e=0;e<r.length;e++)if(-1!==n.genres.indexOf(r[e])&&d.id!==n.id)return!0})),a=k({name:"descending",item:i,target:"rating"});o(n),m(a)}),[d]),[d,f,c,function(n){o(!n),t.includes(d.id)?Oe.removeMyList(d.id):Oe.addMyList(d.id)}]};var xe=function(n){var e=n.match,t=Number(e.params.id),i=Object(O.b)((function(n){return n})),a=i.app.Movies,c=void 0===a?[]:a,o=i.user,s=o.LoginData.myList,u=void 0===s?[]:s,d=o.isLoggedIn,l=ge(t,c,u),b=Object(S.a)(l,4),j=b[0],f=b[1],m=b[2],p=b[3];return Object(r.jsx)(Nn,{background:j.background_image_original,children:Object(r.jsx)(Vn,{children:Object(r.jsx)(Fn,{post:j,otherPost:f,isLiked:m,isLoggedIn:d,toggleLikeButton:p,settings:{dots:!1,infinite:!1,speed:500,slidesToShow:6,slidesToScroll:6,touchMove:!1}})})})};var ye=function(n){var e=n.MovieListFilter,t=void 0===e?{}:e,i=n.settings;return Object(r.jsxs)(W,{children:[Object(r.jsx)(J,{itemlistTitle:"\ub4dc\ub77c\ub9c8",settings:i,item:t({el:"genres",val:"Drama"})}),Object(r.jsx)(J,{itemlistTitle:"\ucf54\ubbf8\ub514 \uc601\ud654",settings:i,item:t({el:"genres",val:"Comedy"})}),Object(r.jsx)(J,{itemlistTitle:"\ub2e4\ud050\uba58\ud130\ub9ac \uc601\ud654",settings:i,item:t({el:"genres",val:"Documentary"})}),Object(r.jsx)(J,{itemlistTitle:"\ud310\ud0c0\uc9c0 \uc601\ud654",settings:i,item:t({el:"genres",val:"Fantasy"})}),Object(r.jsx)(J,{itemlistTitle:"\uc74c\uc545 \uc601\ud654",settings:i,item:t({el:"genres",val:"Music"})}),Object(r.jsx)(J,{itemlistTitle:"\ub85c\ub9e8\uc2a4 \uc601\ud654",settings:i,item:t({el:"genres",val:"Romance"})}),Object(r.jsx)(J,{itemlistTitle:"\uc561\uc158 \uc601\ud654",settings:i,item:t({el:"genres",val:"Action"})})]})};var we=function(){var n=Object(O.b)((function(n){return n})).app.Movies,e=E({Movies:void 0===n?[]:n}),t=Object(S.a)(e,1)[0];return Object(r.jsx)(ye,{MovieListFilter:t,settings:{dots:!1,infinite:!1,speed:500,slidesToShow:7,slidesToScroll:7,touchMove:!1}})};function Le(){var n=Object(s.a)(["\n\n"]);return Le=function(){return n},n}var Te=u.b.div(Le()),Me=function(){return Object(r.jsx)(Te,{children:"Search"})},Se=t(263),ke=t(264),Ee=t(138),Ie=t(266),De=t(267);function Pe(){var n=Object(s.a)(["\n  width: 300px;\n\n  .ant-form-item {\n    color: #fff;\n  }\n\n  .ant-btn {\n    width: 100%;\n  }\n\n  .user-name {\n    margin-bottom: 12px;\n  }\n\n  .login-form-link {\n    color: #fff;\n    text-decoration: underline;\n    font-family: 'Montserrat', sans-serif;\n  }\n  \n"]);return Pe=function(){return n},n}function _e(){var n=Object(s.a)(["\n  position: relative;\n  z-index: 2;\n  h2 {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 15px;\n    margin-bottom: 10px;\n    font-weight: 500;\n    letter-spacing: -.2px;\n  }\n"]);return _e=function(){return n},n}function Ae(){var n=Object(s.a)(["\n  background: #202020 "," no-repeat center top /cover fixed;\n  transition: background-image 0.5s .1s;\n  height: 100vh;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  position: relative;\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.5);\n  }\n"]);return Ae=function(){return n},n}var Ue=u.b.div(Ae(),(function(n){return n.background&&"url(".concat(n.background,")")})),Ce=u.b.div(_e()),ze=Object(u.b)(Se.a)(Pe());var Fe=function(n){var e=n.form,t=n.background,i=n.handleSubmit;return Object(r.jsx)(Ue,{background:t,children:Object(r.jsxs)(Ce,{children:[Object(r.jsx)("h2",{children:"Member Login"}),Object(r.jsxs)(ze,{name:"normal_login",className:"login-form",form:e,onFinish:i,children:[Object(r.jsx)(Se.a.Item,{name:"userId",className:"user-name",children:Object(r.jsx)(ke.a,{prefix:Object(r.jsx)(Ie.a,{className:"site-form-item-icon"}),placeholder:"Username"})}),Object(r.jsx)(Se.a.Item,{name:"userPassword",children:Object(r.jsx)(ke.a,{prefix:Object(r.jsx)(De.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(r.jsxs)(Se.a.Item,{children:[Object(r.jsx)(Ee.a,{type:"primary",htmlType:"submit",className:"login-btn",children:"Log in"}),"or ",Object(r.jsx)(d.b,{to:"/member/join",className:"login-form-link",children:"register now!"})]})]})]})})};var Re=function(n,e,t,r){var a=Object(i.useState)(!1),c=Object(S.a)(a,2),o=c[0],s=c[1];return Object(i.useEffect)((function(){if(r)return alert("\uc774\ubbf8 \ub85c\uadf8\uc778\ub41c \ud68c\uc6d0\uc785\ub2c8\ub2e4."),t.push("/"),!1}),[r]),Object(i.useEffect)((function(){if(o)return t.push("/"),e.resetFields(),!1}),[o]),[function(e){s(!1);var t=n.length&&n.find((function(n){return n.userId===e.userId}));return t?t.userPassword!==e.userPassword?e.userPassword?(alert("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),!1):(alert("\ube44\ubc00\ubc88\ud638 \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1):(alert("\ub85c\uadf8\uc778 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),s(!0),void Oe.updateState({isLoggedIn:!0,LoginData:{id:t.id,userId:t.userId,nickname:t.nickname,myList:t.myList}})):e.userId?(alert("\uc77c\uce58\ud558\ub294 \uc544\uc774\ub514\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),!1):(alert("\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1)}]};var Ye=function(n){var e=n.history,t=Se.a.useForm(),a=Object(S.a)(t,1)[0],c=Object(i.useState)(""),o=Object(S.a)(c,2),s=o[0],u=o[1],d=Object(O.b)((function(n){return n})),l=d.app.Movies,b=void 0===l?[]:l,j=d.user,f=j.Users,m=void 0===f?[]:f,p=j.isLoggedIn,v=void 0!==p&&p;Object(i.useEffect)((function(){var n=b.length&&b[Math.floor(Math.random()*b.length)].background_image_original;n&&u(n)}),[b]);var h=Re(m,a,e,v),g=Object(S.a)(h,1)[0];return Object(r.jsx)(Fe,{form:a,background:s,handleSubmit:g})};function Ne(){var n=Object(s.a)(["\n  opacity: 0.2;\n  font-size: 14px;\n"]);return Ne=function(){return n},n}function Ve(){return Object(r.jsx)(Be,{children:"\ubcf4\uad00\ud558\uc2e0 \ucee8\ud150\uce20\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})}var Be=u.b.div(Ne()),Ge=function(n){var e=n.isLoggedIn,t=n.MovieListFilter,i=n.nickname,a=n.myList,c=n.settings;return Object(r.jsxs)(W,{children:[e&&Object(r.jsx)(J,{itemlistTitle:"".concat(i,"\ub2d8\uc774 \uc88b\uc544\ud558\ub294 \ucee8\ud150\uce20"),settings:c,item:t({el:"myList",sorting:!1}),sorting:!1}),!a.length&&Object(r.jsx)(Ve,{})]})};var qe=function(){var n=Object(O.b)((function(n){return n})),e=n.app.Movies,t=void 0===e?[]:e,i=n.user,a=i.isLoggedIn,c=void 0!==a&&a,o=i.LoginData,s=o.myList,u=void 0===s?[]:s,d=o.nickname,l=void 0===d?"":d,b=E({Movies:t,myList:u}),j=Object(S.a)(b,1)[0];return Object(r.jsx)(Ge,{isLoggedIn:c,MovieListFilter:j,nickname:l,myList:u,settings:{dots:!1,infinite:!1,speed:500,slidesToShow:7,slidesToScroll:7,touchMove:!1}})};function Je(){var n=Object(s.a)(["\n  color: ",";\n  margin-top: 2px;\n"]);return Je=function(){return n},n}function He(){var n=Object(s.a)(["\n  .ant-form-item-label > label {\n    color: #fff;\n  }\n  .ant-form-item {\n    margin: 12px 0 0px;\n  }\n"]);return He=function(){return n},n}function We(){var n=Object(s.a)(["\n  max-width: 600px;\n  margin: 60px auto;\n  h2{\n    font-family: 'Montserrat', sans-serif;\n    font-size: 15px;\n    margin-bottom: 10px;\n    font-weight: 500;\n    letter-spacing: -.2px;\n  }\n"]);return We=function(){return n},n}var Ke=u.b.div(We()),Qe=Object(u.b)(Se.a)(He()),Xe=u.b.div(Je(),(function(n){return n.theme.mainColor}));var Ze=function(n){var e=n.form,t=n.handleSubmit,i=n.handleOnChange,a=n.user,c=n.error;return Object(r.jsxs)(Ke,{children:[Object(r.jsx)("h2",{children:"Member Join"}),Object(r.jsxs)(Qe,{form:e,onFinish:t,children:[Object(r.jsx)(Se.a.Item,{name:"username",children:Object(r.jsx)(ke.a,{placeholder:"Username",value:a.id,name:"id",onChange:function(n){return i(n)}})}),c.id&&Object(r.jsx)(Xe,{children:c.id}),Object(r.jsx)(Se.a.Item,{name:"password",children:Object(r.jsx)(ke.a.Password,{placeholder:"Password",type:"password",value:a.password,name:"password",onChange:function(n){return i(n)}})}),c.password&&Object(r.jsx)(Xe,{children:c.password}),Object(r.jsx)(Se.a.Item,{name:"verifyPassword",children:Object(r.jsx)(ke.a.Password,{placeholder:"Verify Password",type:"password",value:a.verifyPassword,name:"verifyPassword",onChange:function(n){return i(n)}})}),c.verifyPassword&&Object(r.jsx)(Xe,{children:c.verifyPassword}),Object(r.jsx)(Se.a.Item,{name:"nickname",children:Object(r.jsx)(ke.a,{placeholder:"User Nickname",value:a.nickname,name:"nickname",onChange:function(n){return i(n)}})}),c.nickname&&Object(r.jsx)(Xe,{children:c.nickname}),Object(r.jsx)(Se.a.Item,{children:Object(r.jsx)(Ee.a,{type:"primary",htmlType:"submit",children:"Join"})})]})]})},$e=t(72),nt=function(n,e){return n&&n!==e?"\uc785\ub825\ud558\uc2e0 \ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.":n&&(null===e||void 0===e?void 0:e.length)<2?"\ucd5c\uc18c 2\uc790 \uc774\uc0c1 \uc785\ub825\ud574\uc8fc\uc138\uc694.":n&&(null===e||void 0===e?void 0:e.length)>20?"\ucd5c\ub300 20\uc790\uae4c\uc9c0 \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4.":null};var et=function(n){var e=n.current,t=n.value,r=n.user,i=n.error,a=n.required,c={};return("id"===e||!e&!t&!0===a.id)&&(c.id=function(n,e){return!n&&e?"\ud544\uc218 \uc785\ub825\uac12 \uc785\ub2c8\ub2e4.":n.length<2?"\ucd5c\uc18c 2\uc790 \uc774\uc0c1 \uc785\ub825\ud574\uc8fc\uc138\uc694.":n.length>20?"\ucd5c\ub300 20\uc790\uae4c\uc9c0 \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4.":null}(e?t:r.id,a.id)),("password"===e||!e&!t&!0===a.password)&&(c.password=function(n,e){return!n&&e?"\ud544\uc218 \uc785\ub825\uac12 \uc785\ub2c8\ub2e4.":n.length<2?"\ucd5c\uc18c 2\uc790 \uc774\uc0c1 \uc785\ub825\ud574\uc8fc\uc138\uc694.":n.length>20?"\ucd5c\ub300 20\uc790\uae4c\uc9c0 \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4.":null}(e?t:r.password,a.password),c.verifyPassword=nt(e?t:r.password,null===r||void 0===r?void 0:r.verifyPassword)),("verifyPassword"===e||!e&!t&!0===a.verifyPassword)&&(c.verifyPassword=nt(null===r||void 0===r?void 0:r.password,e?t:null===r||void 0===r?void 0:r.verifyPassword)),("nickname"===e||!e&!t&!0===a.nickname)&&(c.nickname=function(n,e){return!n&&e?"\ud544\uc218 \uc785\ub825\uac12 \uc785\ub2c8\ub2e4.":n.length<2?"\ucd5c\uc18c 2\uc790 \uc774\uc0c1 \uc785\ub825\ud574\uc8fc\uc138\uc694.":n.length>20?"\ucd5c\ub300 20\uc790\uae4c\uc9c0 \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4.":null}(e?t:r.nickname,a.nickname)),Object(I.a)(Object(I.a)({},i),c)};var tt=function(n,e,t){var r=Object(i.useState)({}),a=Object(S.a)(r,2),c=a[0],o=a[1],s=Object(i.useState)({}),u=Object(S.a)(s,2),d=u[0],l=u[1],b=Object(i.useState)(!1),j=Object(S.a)(b,2),f=j[0],m=j[1],p=Object(i.useCallback)((function(n){m(!1);var e=n.target,r=e.name,i=e.value,a=Object(I.a)(Object(I.a)({},c),{},Object($e.a)({},r,i));o(a);var s=et({current:r,value:i,user:c,error:d,required:t});l(s)}),[c,d]);return[c,o,d,l,p,function(){m(!1);var r=et({user:c,error:d,required:t});l(r);var i=Object.values(r);Boolean(i.length)&&i.every((function(n){return null===n}))?(n(e(c)),m(!0)):alert("\uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc600\uc2b5\ub2c8\ub2e4.")},f]};var rt=function(n){var e=n.form,t=n.required,r=n.isLoggedIn,a=n.history,c=n.storeDispatch,o=n.buildDispatch,s=tt(c,o,t),u=Object(S.a)(s,7),d=u[0],l=u[1],b=u[2],j=u[3],f=u[4],m=u[5],p=u[6],v=void 0!==p&&p;return Object(i.useEffect)((function(){if(r)return alert("\uc774\ubbf8 \uac00\uc785\ub41c \ud68c\uc6d0\uc785\ub2c8\ub2e4."),a.push("/"),!1}),[r]),Object(i.useEffect)((function(){v&&(alert("\ud68c\uc6d0\uac00\uc785\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),l({}),j({}),e.resetFields(),a.push("/member/login"))}),[v]),[d,b,m,f]};var it=function(n){var e=n.history,t=Object(O.b)((function(n){return n.user})).isLoggedIn,i=void 0!==t&&t,a=Se.a.useForm(),c=Object(S.a)(a,1)[0],o=rt({form:c,required:{id:!0,password:!0,verifyPassword:!0,nickname:!0},isLoggedIn:i,history:e,storeDispatch:function(n){return Oe.addedUser(n)},buildDispatch:function(n){return{id:k({name:"guid"}),userId:n.id,userPassword:n.password,nickname:n.nickname,myList:[],SearchList:[]}}}),s=Object(S.a)(o,4),u=s[0],d=s[1],l=s[2],b=s[3];return Object(r.jsx)(Ze,{form:c,handleSubmit:l,handleOnChange:b,user:u,error:d})};function at(){var n=Object(s.a)(["\n\n"]);return at=function(){return n},n}var ct=u.b.div(at()),ot=function(){return Object(r.jsx)(ct,{children:"Profile"})};var st=function(n){var e=n.history,t=Object(O.b)((function(n){return n.user})).isLoggedIn,r=void 0!==t&&t;return Object(i.useEffect)((function(){return r?(Oe.updateState({LoginData:{},isLoggedIn:!1}),alert("\ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),e.push("/"),!1):(alert("\uc815\uc0c1\uc801\uc778 \uacbd\ub85c\uac00 \uc544\ub2d9\ub2c8\ub2e4."),e.push("/"),!1)}),[r]),null};var ut=function(n){var e=n.history;return Object(r.jsxs)(M.c,{children:[Object(r.jsx)(M.a,{path:"/member/login",component:Ye}),Object(r.jsx)(M.a,{path:"/member/join",component:it,history:e}),Object(r.jsx)(M.a,{path:"/member/logout",component:st,history:e}),Object(r.jsx)(M.a,{path:"/member/my-list",component:qe}),Object(r.jsx)(M.a,{path:"/member/profile",component:ot})]})},dt="768px",lt="1279px",bt="1280px",jt="1679px",ft="1680px",mt={mainColor:"#c30000",mobile:"screen and (max-width:".concat("767px",")"),tablet:"screen and (min-width:".concat(dt,") and (max-width:").concat(lt,")"),laptop:"screen and (min-width:".concat(bt,") and (max-width:").concat(jt,")"),desktop:"screen and (min-width:".concat(ft,")")},pt=function(){var n=Object(M.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[n]),null},vt=t(135);var ht=function(){var n=Object(O.b)((function(n){return null===n||void 0===n?void 0:n.app})).Movies,e=void 0===n?[]:n;return Object(i.useEffect)((function(){e.length||(console.log("@@APP/GET_MOVIES"),he.getMovies())}),[]),Object(r.jsxs)(u.a,{theme:mt,children:[Object(r.jsx)(pt,{}),Object(r.jsx)(T,{children:Object(r.jsx)(M.c,{children:Object(r.jsxs)(vt.a,{atEnter:{opacity:0},atLeave:{opacity:0},atActive:{opacity:1},className:"switch-wrapper",children:[Object(r.jsx)(M.a,{exact:!0,path:"/",component:Q}),Object(r.jsx)(M.a,{path:"/detail/:id",component:xe}),Object(r.jsx)(M.a,{path:"/genre",component:we}),Object(r.jsx)(M.a,{path:"/search",component:Me}),Object(r.jsx)(M.a,{path:"/member",component:ut})]})})})]})};t(259);o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(O.a,{store:pe,children:Object(r.jsx)(d.a,{basename:"/netflix-app",children:Object(r.jsx)(ht,{})})})}),document.getElementById("root"))}},[[260,1,2]]]);
//# sourceMappingURL=main.ad234872.chunk.js.map