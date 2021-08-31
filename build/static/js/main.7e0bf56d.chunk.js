(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(t,e,a){"use strict";a.r(e);var s,n,c,g,r,i=a(3),l=a(67),m=a.n(l),b=a(56),o=a(11),h=a(35),p=a.n(h),k=a(43),u=a(12),j=a(31),d=a(121),O=a(124),_=a(2),y=Object(d.a)(s||(s=Object(j.a)(["\nmutation createMatch($T1Name: String!, $T2Name: String!, $PlayersPerTeam: Int!, $TankPickOrder: [String]!, $NoahsArkCount: Int!, $T1Logo: String!, $T2Logo: String!) {\n  createMatch(team1Name: $T1Name, team2Name: $T2Name, playersPerTeam: $PlayersPerTeam, tankPickOrder: $TankPickOrder, noahsArkCount: $NoahsArkCount, team1Logo: $T1Logo, team2Logo: $T2Logo) {\n    keys {\n      team1\n      team2\n      admin\n      spectate\n    }\n    teams {\n      name\n    }\n  }\n}\n"]))),T=function(){var t=Object(O.a)(y),e=Object(u.a)(t,1)[0],a=Object(i.useState)("Team 1"),s=Object(u.a)(a,2),n=s[0],c=(s[1],Object(i.useState)("Team 2")),g=Object(u.a)(c,2),r=g[0],l=(g[1],Object(i.useState)("https://cdn.discordapp.com/attachments/629193283091955733/769091738013925386/0reopbN.png")),m=Object(u.a)(l,2),b=m[0],o=(m[1],Object(i.useState)("https://cdn.discordapp.com/attachments/581953548666011661/768684847388426281/Bear_Force_One_Website.png")),h=Object(u.a)(o,2),j=h[0],d=(h[1],["2A","4D","3A","2D","1A"]),T=Object(i.useState)(""),I=Object(u.a)(T,2),f=I[0],v=I[1],x=Object(i.useState)(""),S=Object(u.a)(x,2),A=S[0],C=S[1],M=Object(i.useState)(""),w=Object(u.a)(M,2),P=w[0],N=w[1],E=Object(i.useState)(""),R=Object(u.a)(E,2),D=R[0],K=R[1],F=function(){var t=Object(k.a)(p.a.mark((function t(){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e({variables:{T1Name:n,T2Name:r,PlayersPerTeam:6,TankPickOrder:d,NoahsArkCount:2,T1Logo:b,T2Logo:j}});case 3:a=t.sent,v("".concat(window.location.href,"team/").concat(a.data.createMatch.keys.team1)),C("".concat(window.location.href,"team/").concat(a.data.createMatch.keys.team2)),N("".concat(window.location.href,"spectate/").concat(a.data.createMatch.keys.spectate)),K("".concat(window.location.href,"admin/").concat(a.data.createMatch.keys.admin)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return Object(_.jsxs)("div",{children:[Object(_.jsx)("button",{onClick:F,children:"create new test match"}),Object(_.jsx)("table",{children:Object(_.jsxs)("tbody",{children:[Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{children:"Team 1 Key"}),Object(_.jsx)("th",{children:Object(_.jsx)("a",{href:f,target:"_blank",rel:"noreferrer",children:f})})]}),Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{children:"Team 2 Key"}),Object(_.jsx)("th",{children:Object(_.jsx)("a",{href:A,target:"_blank",rel:"noreferrer",children:A})})]}),Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{children:"Spectator Key"}),Object(_.jsx)("th",{children:Object(_.jsx)("a",{href:P,target:"_blank",rel:"noreferrer",children:P})})]}),Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{children:"Admin Key"}),Object(_.jsx)("th",{children:Object(_.jsx)("a",{href:D,target:"_blank",rel:"noreferrer",children:D})})]})]})})]})},I=a(49),f=(a(83),function(t){var e=t.tank,a=t.side,s=I.Tanks.find((function(t){return t.label===e})),n=s?s.bgImg:"https://mpng.subpng.com/20190730/hxu/kisspng-tank-silhouette-army-military-shoulder-t-shirt-tanksilhouettemechanicalwarfree-pictures-fre-5d3fd2e5ceded3.3049184715644638458474.jpg";return Object(_.jsx)("div",{className:a,children:Object(_.jsx)("div",{children:Object(_.jsx)("img",{className:"".concat(a," img"),src:n})})})}),v=function(t){var e=t.match,a=t.side,s="A"===a?e.tankPicks.attack:e.tankPicks.defense,n=e.teams[0].side===a?e.teams[0].logo:e.teams[1].logo;return console.log("logo",n),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("img",{className:"logo img",src:n}),Object(_.jsx)(f,{side:a,tank:s[0]}),Object(_.jsx)(f,{side:a,tank:s[1]}),Object(_.jsx)(f,{side:a,tank:s[2]}),Object(_.jsx)(f,{side:a,tank:s[3]}),Object(_.jsx)(f,{side:a,tank:s[4]}),Object(_.jsx)(f,{side:a,tank:s[5]})]})},x=(a(84),a(66),function(t){var e=t.match;return Object(_.jsxs)("div",{className:"container-spectate",children:[Object(_.jsx)("div",{className:"Spacer"}),Object(_.jsx)(v,{className:"Attack-Tanks",match:e,side:"A"}),Object(_.jsx)(v,{className:"Defense-Tanks",match:e,side:"D"}),Object(_.jsx)("div",{className:"Spacer2"})]})}),S=Object(d.a)(n||(n=Object(j.a)(["\n    query OnGetMatch($userKey: String!) {\n        getMatch(key: $userKey) {\n        tankPicks {\n            attack\n            defense\n        }\n        format {\n            playersPerTeam\n            tankPickOrder\n            noahsArkCount\n        }\n        teams {\n            name\n            side\n            logo\n        }\n        keys {\n            team1\n            team2\n        }\n        turn\n  }\n}\n"]))),A=Object(d.a)(c||(c=Object(j.a)(["\nsubscription Subscription ($userKey: String!) {\n  matchUpdated(key: $userKey) {\n    tankPicks {\n            attack\n            defense\n        }\n        format {\n            playersPerTeam\n            tankPickOrder\n            noahsArkCount\n        }\n        teams {\n            name\n            side\n            logo\n        }\n        keys {\n            team1\n            team2\n        }\n        turn\n  }\n}\n"]))),C=Object(d.a)(g||(g=Object(j.a)(["\nmutation OnPickTanks($userKey: String!, $TTA: [String]!) {\n    pickTanks(key: $userKey, tanks: $TTA) \n}\n"]))),M=Object(d.a)(r||(r=Object(j.a)(["\nmutation AdminResetRoundMutation($userKey: String!, $switchSides: Boolean!) {\nAdminResetRound(key: $userKey, switchSides: $switchSides)\n}\n"]))),w=function(t){var e=t.userKey,a=Object(O.a)(M),s=Object(u.a)(a,1)[0],n=function(t){s({variables:{userKey:e,switchSides:t}})};return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("button",{onClick:function(){return n(!1)},className:"Admin-Reset1",children:Object(_.jsx)("h2",{children:"RESET"})}),Object(_.jsx)("button",{onClick:function(){return n(!0)},className:"Admin-Reset2",children:Object(_.jsx)("h2",{children:"RESET AND SWITCH SIDES"})})]})},P=function(t){t.match;var e=t.userKey,a=Object(i.useState)("All"),s=Object(u.a)(a,2),n=s[0],c=s[1],g=function(t){c(n===t?"All":t)},r=Object(i.useState)(""),l=Object(u.a)(r,2),m=l[0],b=l[1],o=Object(i.useState)([]),h=Object(u.a)(o,2),j=h[0],d=h[1],y=Object(i.useState)(""),T=Object(u.a)(y,2),f=T[0],v=T[1],x=Object(O.a)(C),S=Object(u.a)(x,1)[0],A=function(){var t=Object(k.a)(p.a.mark((function t(){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S({variables:{userKey:e,TTA:j}});case 3:a=t.sent,v(a.data.pickTanks),d([]),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),v(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),M=function(){v("")},w=function(t){var e=t.tank,a=t.index;return Object(_.jsxs)("div",{children:[Object(_.jsx)("b",{children:e}),Object(_.jsx)("button",{onClick:function(){return function(t){if(1===j.length)d([]);else{var e=j.slice(0,t).concat(j.slice(t+1));d(e)}}(a)},children:"X"})]})};return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:"Carousel",onClick:M,children:I.Tanks.filter((function(t){return t.label.toLowerCase().includes(m.toLowerCase())&&("All"===n||t.class===n)})).map((function(t){return Object(_.jsx)("button",{onClick:function(){return d(j.concat(t.label))},children:Object(_.jsx)("h3",{children:t.label})})}))}),Object(_.jsxs)("div",{className:"Carousel-Filter",onClick:M,children:[Object(_.jsx)("button",{onClick:function(){return g("Heavy")},children:"Heavy"}),Object(_.jsx)("button",{onClick:function(){return g("Medium")},children:"Medium"}),Object(_.jsx)("button",{onClick:function(){return g("Light")},children:"Light"}),Object(_.jsx)("button",{onClick:function(){return g("Tank Destroyer")},children:"Tank Destroyer"}),Object(_.jsx)("button",{onClick:function(){return g("Artillery")},children:"Artillery"}),Object(_.jsx)("input",{type:"text",value:m,onChange:function(t){b(t.target.value)}}),f]}),Object(_.jsx)("div",{className:"Carousel-Selected",children:j.map((function(t,e){return Object(_.jsx)(w,{tank:t,index:e},e)}))}),Object(_.jsx)("button",{className:"Pick-Tanks",onClick:A,children:Object(_.jsx)("h2",{children:"PICK TANKS"})})]})},N=(a(85),function(t){var e=t.match,a=t.userKey;return console.log("match",e),Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:"container-admin",children:[Object(_.jsx)(v,{className:"Attack-Tanks",match:e,side:"A"}),Object(_.jsx)(v,{className:"Defense-Tanks",match:e,side:"D"}),Object(_.jsx)(w,{userKey:a}),Object(_.jsx)(P,{match:e,userKey:a})]})})}),E=a(122),R=a(125),D=function(){var t=Object(i.useState)(null),e=Object(u.a)(t,2),a=e[0],s=e[1],n=Object(o.f)().key,c=Object(o.f)().userType,g=Object(E.a)(S,{variables:{userKey:n}}).data;Object(i.useEffect)((function(){g&&g.getMatch&&s(g.getMatch)}),[g]);var r=Object(R.a)(A,{variables:{userKey:n}}).data;if(Object(i.useEffect)((function(){r&&r.matchUpdated&&s(r.matchUpdated)}),[r]),!a)return"Loading...";switch(c){case"admin":return Object(_.jsx)(N,{match:a,userKey:n});case"spectate":return Object(_.jsx)(x,{match:a});default:return"Page Not Found"}},K=(a(93),a(94),function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:"full-screen-div blur-bg",children:[Object(_.jsx)(b.a,{children:Object(_.jsxs)(o.c,{children:[Object(_.jsx)(o.a,{path:"/:userType/:key",children:Object(_.jsx)(D,{})}),Object(_.jsx)(o.a,{path:"/",children:Object(_.jsx)(T,{})})]})}),Object(_.jsx)("div",{class:"blur"})]})})}),F=a(119),H=a(116),L=a(118),B=a(120),G=a(117),$=a(30),V=a(72);a(95).config();var W=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).QUERY_ENDPOINT||"http://wottankpicktool.herokuapp.com/graphql",X=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SUBSCRIPTION_ENDPOINT||"ws://wottankpicktool.herokuapp.com/subscriptions",U=new F.a({uri:W}),z=new V.a({uri:X,options:{reconnect:!0}}),q=Object(H.a)((function(t){var e=t.query,a=Object($.e)(e);return"OperationDefinition"===a.kind&&"subscription"===a.operation}),z,U),J=new L.a({cache:new B.a,link:q});m.a.render(Object(_.jsx)(G.a,{client:J,children:Object(_.jsx)(K,{})}),document.getElementById("root"))},49:function(t,e){t.exports={Maps:[{label:"Cliff",mapImg:"https://stratsketch.com/maps/wot/thumb/18_cliff.jpg",active:!0,bgImg:"https://cdn.discordapp.com/attachments/707746580416954419/851356203442765824/shot_017.jpg"},{label:"Ghost Town",mapImg:"https://stratsketch.com/maps/wot/thumb/95_lost_city_ctf.jpg",active:!1},{label:"Himmelsdorf",mapImg:"https://stratsketch.com/maps/wot/thumb/04_himmelsdorf.jpg",active:!0,bgImg:"https://cdn.discordapp.com/attachments/707746580416954419/851356206924169246/shot_018.jpg"},{label:"Lakeville",mapImg:"https://stratsketch.com/maps/wot/thumb/07_lakeville.jpg",active:!1},{label:"Mannerheim Line",mapImg:"https://stratsketch.com/maps/wot/thumb/38_mannerheim_line.jpg",active:!1},{label:"Mines",mapImg:"https://stratsketch.com/maps/wot/thumb/10_hills.jpg",bgImg:"https://cdn.discordapp.com/attachments/709137404115681312/854948620339380244/shot_005.jpg",active:!1},{label:"Murovanka",mapImg:"https://stratsketch.com/maps/wot/thumb/11_murovanka.jpg",active:!0},{label:"Prokhorovka",mapImg:"https://stratsketch.com/maps/wot/thumb/05_prohorovka.jpg",active:!0,bgImg:"https://media.discordapp.net/attachments/707746580416954419/851356213634924584/shot_020.jpg"},{label:"Ruinberg",mapImg:"https://stratsketch.com/maps/wot/thumb/08_ruinberg.jpg",bgImg:"https://cdn.discordapp.com/attachments/709137404115681312/854949328690216960/shot_006.jpg",active:!1},{label:"Sand River",mapImg:"https://stratsketch.com/maps/wot/thumb/28_desert.jpg",active:!0,bgImg:"https://media.discordapp.net/attachments/707746580416954419/851356213950414878/shot_021.jpg"},{label:"Siegfried Line",mapImg:"https://stratsketch.com/maps/wot/thumb/14_siegfried_line.jpg",active:!1},{label:"Steppes",mapImg:"https://stratsketch.com/maps/wot/thumb/35_steppes.jpg",active:!0},{label:"Tundra",mapImg:"https://stratsketch.com/maps/wot/thumb/63_tundra.jpg",active:!0,bgImg:"https://media.discordapp.net/attachments/707746580416954419/851356167778598972/shot_023.jpg?width=1191&height=670"}],Tanks:[{label:"AMX 13 105",bgImg:"https://tanks.gg/img/tanks/france-F88_AMX_13_105.png",class:"Light"},{label:"Manticore",bgImg:"https://tanks.gg/img/tanks/uk-GB100_Manticore.png",class:"Light"},{label:"Rhm. Pzw.",bgImg:"https://tanks.gg/img/tanks/germany-G125_Spz_57_Rh.png",class:"Light"},{label:"T-100 LT",bgImg:"https://tanks.gg/img/tanks/ussr-R132_VNII_100LT.png",class:"Light"},{label:"WZ-132-1",bgImg:"https://tanks.gg/img/tanks/china-Ch29_Type_62C_prot.png",class:"Light"},{label:"Sheridan",bgImg:"https://tanks.gg/img/tanks/usa-A116_XM551.png",class:"Light"},{label:"121",bgImg:"https://tanks.gg/img/tanks/china-Ch19_121.png",class:"Medium"},{label:"AMX 30 B",bgImg:"https://tanks.gg/img/tanks/france-F72_AMX_30.png",class:"Medium"},{label:"B-C 25t",bgImg:"https://tanks.gg/img/tanks/france-F18_Bat_Chatillon25t.png",class:"Medium"},{label:"Cent. AX",bgImg:"https://tanks.gg/img/tanks/uk-GB86_Centurion_Action_X.png",class:"Medium"},{label:"CS-63",bgImg:"https://tanks.gg/img/tanks/poland-Pl21_CS_63.png",class:"Medium"},{label:"E 50 Ausf. M",bgImg:"https://tanks.gg/img/tanks/germany-G73_E50_Ausf_M.png",class:"Medium"},{label:"K-91",bgImg:"https://tanks.gg/img/tanks/ussr-R144_K_91.png",class:"Medium"},{label:"Leopard 1",bgImg:"https://tanks.gg/img/tanks/germany-G89_Leopard1.png",class:"Medium"},{label:"M48A5 Patton",bgImg:"https://tanks.gg/img/tanks/usa-A120_M48A5.png",class:"Medium"},{label:"Object 140",bgImg:"https://tanks.gg/img/tanks/ussr-R97_Object_140.png",class:"Medium"},{label:"Object 430U",bgImg:"https://tanks.gg/img/tanks/ussr-R148_Object_430_U.png",class:"Medium"},{label:"Progetto 65",bgImg:"https://tanks.gg/img/tanks/italy-It08_Progetto_M40_mod_65.png",class:"Medium"},{label:"STB-1",bgImg:"https://tanks.gg/img/tanks/japan-J16_ST_B1.png",class:"Medium"},{label:"T-62A",bgImg:"https://tanks.gg/img/tanks/ussr-R87_T62A.png",class:"Medium"},{label:"TVP T 50/51",bgImg:"https://tanks.gg/img/tanks/czech-Cz04_T50_51.png",class:"Medium"},{label:"UDES 15/16",bgImg:"https://tanks.gg/img/tanks/sweden-S28_UDES_15_16.png",class:"Medium"},{label:"113",bgImg:"https://tanks.gg/img/tanks/china-Ch22_113.png",class:"Heavy"},{label:"60TP",bgImg:"https://tanks.gg/img/tanks/poland-Pl15_60TP_Lewandowskiego.png",class:"Heavy"},{label:"AMX 50 B",bgImg:"https://tanks.gg/img/tanks/france-F10_AMX_50B.png",class:"Heavy"},{label:"AMX M4 54",bgImg:"https://tanks.gg/img/tanks/france-F82_AMX_M4_Mle1949_Ter.png",class:"Heavy"},{label:"E 100",bgImg:"https://tanks.gg/img/tanks/germany-G56_E-100.png",class:"Heavy"},{label:"IS-4",bgImg:"https://tanks.gg/img/tanks/ussr-R90_IS_4M.png",class:"Heavy"},{label:"IS-7",bgImg:"https://tanks.gg/img/tanks/ussr-R45_IS-7.png",class:"Heavy"},{label:"Kranvagn",bgImg:"https://tanks.gg/img/tanks/sweden-S16_Kranvagn.png",class:"Heavy"},{label:"Maus",bgImg:"https://tanks.gg/img/tanks/germany-G42_Maus.png",class:"Heavy"},{label:"Object 277",bgImg:"https://tanks.gg/img/tanks/ussr-R155_Object_277.png",class:"Heavy"},{label:"Object 705A",bgImg:"https://tanks.gg/img/tanks/ussr-R145_Object_705_A.png",class:"Heavy"},{label:"Pz.Kpfw. VII",bgImg:"https://tanks.gg/img/tanks/germany-G134_PzKpfw_VII.png",class:"Heavy"},{label:"Rinoceronte",bgImg:"https://tanks.gg/img/tanks/italy-It15_Rinoceronte.png",class:"Heavy"},{label:"ST-II",bgImg:"https://tanks.gg/img/tanks/ussr-R169_ST_II.png",class:"Heavy"},{label:"S. Conqueror",bgImg:"https://tanks.gg/img/tanks/uk-GB91_Super_Conqueror.png",class:"Heavy"},{label:"T110E5",bgImg:"https://tanks.gg/img/tanks/usa-A69_T110E5.png",class:"Heavy"},{label:"T57 Heavy",bgImg:"https://tanks.gg/img/tanks/usa-A67_T57_58.png",class:"Heavy"},{label:"Type 5 Heavy",bgImg:"https://tanks.gg/img/tanks/japan-J20_Type_2605.png",class:"Heavy"},{label:"WZ-111 5A",bgImg:"https://tanks.gg/img/tanks/china-Ch41_WZ_111_5A.png",class:"Heavy"},{label:"Foch B",bgImg:"https://tanks.gg/img/tanks/france-F64_AMX_50Fosh_B.png",class:"Tank Destroyer"},{label:"FV215b",bgImg:"https://tanks.gg/img/tanks/uk-GB13_FV215b.png",class:"Heavy"},{label:"Foch 155",bgImg:"https://tanks.gg/img/tanks/france-F64_AMX_50Fosh_155.png",class:"Tank Destroyer"},{label:"FV215b 183",bgImg:"https://tanks.gg/img/tanks/uk-GB48_FV215b_183.png",class:"Tank Destroyer"},{label:"FV217 Badger",bgImg:"https://tanks.gg/img/tanks/uk-GB92_FV217.png",class:"Tank Destroyer"},{label:"FV4005",bgImg:"https://tanks.gg/img/tanks/uk-GB83_FV4005.png",class:"Tank Destroyer"},{label:"Grille 15",bgImg:"https://tanks.gg/img/tanks/germany-G121_Grille_15_L63.png",class:"Tank Destroyer"},{label:"Jg.Pz. E 100",bgImg:"https://tanks.gg/img/tanks/germany-G72_JagdPz_E100.png",class:"Tank Destroyer"},{label:"Obj. 268",bgImg:"https://tanks.gg/img/tanks/ussr-R88_Object268.png",class:"Tank Destroyer"},{label:"Obj. 268 4",bgImg:"https://tanks.gg/img/tanks/ussr-R149_Object_268_4.png",class:"Tank Destroyer"},{label:"Strv 103B",bgImg:"https://tanks.gg/img/tanks/sweden-S11_Strv_103B.png",class:"Tank Destroyer"},{label:"T110E3",bgImg:"https://tanks.gg/img/tanks/usa-A85_T110E3.png",class:"Tank Destroyer"},{label:"T110E4",bgImg:"https://tanks.gg/img/tanks/usa-A83_T110E4.png",class:"Tank Destroyer"},{label:"WZ-113G FT",bgImg:"https://tanks.gg/img/tanks/china-Ch38_WZ113G_FT.png",class:"Tank Destroyer"},{label:"B-C 155 58",bgImg:"https://tanks.gg/img/tanks/france-F38_Bat_Chatillon155_58.png",class:"Artillery"},{label:"ConquerorGC",bgImg:"https://tanks.gg/img/tanks/uk-GB31_Conqueror_Gun.png",class:"Artillery"},{label:"G.W. E 100",bgImg:"https://tanks.gg/img/tanks/germany-G61_G_E.png",class:"Artillery"},{label:"Object 261",bgImg:"https://tanks.gg/img/tanks/ussr-R52_Object_261.png",class:"Artillery"},{label:"T92 HMC",bgImg:"https://tanks.gg/img/tanks/usa-A38_T92.png",class:"Artillery"},{label:"Vz. 55",bgImg:"https://tanks.gg/img/tanks/czech-Cz17_Vz_55.png",class:"Heavy"}]}},66:function(t,e,a){},83:function(t,e,a){},84:function(t,e,a){},85:function(t,e,a){},93:function(t,e,a){},94:function(t,e,a){}},[[109,1,2]]]);
//# sourceMappingURL=main.7e0bf56d.chunk.js.map