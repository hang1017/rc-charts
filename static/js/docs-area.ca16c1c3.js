(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./docs/area.mdx":function(A,e,a){"use strict";a.r(e);var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=a("react"),t=a.n(o),s=a("./node_modules/@mdx-js/react/dist/index.es.js"),r=a("./node_modules/docz/dist/index.esm.js"),g=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),d=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),c=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=a("./node_modules/awe-utils/dist/index.esm.js"),l=a("./node_modules/classnames/index.js"),B=a.n(l),y=a("./node_modules/chroma-js/chroma.js"),x=a.n(y),m=a("./node_modules/@antv/data-set/build/data-set.js"),E=a("./node_modules/bizcharts/umd/BizCharts.js");"undefined"!==typeof IDataItem&&IDataItem&&IDataItem===Object(IDataItem)&&Object.isExtensible(IDataItem)&&Object.defineProperty(IDataItem,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IDataItem",filename:"src/area/area-chart.tsx"}}),"undefined"!==typeof IAreaProps&&IAreaProps&&IAreaProps===Object(IAreaProps)&&Object.isExtensible(IAreaProps)&&Object.defineProperty(IAreaProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IAreaProps",filename:"src/area/area-chart.tsx"}});var p=function(A){var e=A.className,a=A.isStack,n=A.style,o=A.animate,s=A.forceFit,r=A.height,l=A.scale,y=A.xAxis,p=A.yAxis,u=A.legend,h=A.colors,I=A.line,Y=A.point,S=A.titleMap,M=A.smooth,b=A.padding,D=A.borderWidth,j=A.data,O=t.a.useState(null),C=Object(c.a)(O,2),F=C[0],H=C[1],G=t.a.useState([]),f=Object(c.a)(G,2),k=f[0],Q=f[1],U=Object(i.a)(j)?j:[];return t.a.useEffect(function(){if(Object(i.a)(U)){var A=U[0];if(!A)return;var e=Object.keys(A).filter(function(A){return"x"!==A}),a=new m.DataView;a.source(j).transform({type:"map",callback:function(A){var a=Object(d.a)({},A);return e.forEach(function(e){a[S[e]||e]=A[e]}),a}}).transform({type:"fold",fields:e.map(function(A){return S[A]||A}),key:"key",value:"value"}),H(a)}},[A.data]),t.a.useEffect(function(){h&&h.length&&I&&Q(h.map(function(A){return"l (90) 0:".concat(x()(A).alpha(.8)," 1:").concat(x()(A).alpha(.1))}))},[A.colors]),t.a.createElement("div",{className:B()(e,Object(g.a)({},"".concat("rc-area-chart"),!0)),style:n},t.a.createElement(E.Chart,{height:r,data:F,scale:l,padding:b,animate:o,forceFit:s},t.a.createElement(E.Axis,Object.assign({name:"x",title:!0},y)),t.a.createElement(E.Axis,Object.assign({name:"value",title:!0},p)),t.a.createElement(E.Legend,u),t.a.createElement(E.Geom,{type:a?"areaStack":"area",position:"x*value",color:k&&k.length?["key",k]:"key",shape:M?"smooth":""}),I&&t.a.createElement(E.Geom,{type:a?"areaStack":"area",position:"x*value",size:D,color:h&&h.length?["key",h]:"key",shape:M?"smooth":""}),Y&&t.a.createElement(E.Geom,{type:"point",position:"x*value",size:4,shape:"circle",color:h&&h.length?["key",h]:"key",style:{}})))};p.defaultProps={height:400,line:!0,animate:!0,forceFit:!0,borderWidth:2,scale:{},titleMap:{},data:[],isStack:!1,padding:"auto"};var u=p;p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AreaChart",filename:"src/area/area-chart.tsx"}}),"undefined"!==typeof IAreaProps&&IAreaProps&&IAreaProps===Object(IAreaProps)&&Object.isExtensible(IAreaProps)&&Object.defineProperty(IAreaProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IAreaProps",filename:"src/area/index.tsx"}});var h=u;"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AreaChart",filename:"src/area/index.tsx"}}),a.d(e,"default",function(){return S});var I={},Y="wrapper";function S(A){var e=A.components,a=Object(n.a)(A,["components"]);return Object(s.b)(Y,Object.assign({},I,a,{components:e,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"area"},"Area"),Object(s.b)("h2",{id:"\u57fa\u7840\u9762\u79ef\u56fe"},"\u57fa\u7840\u9762\u79ef\u56fe"),Object(s.b)(r.c,{__position:0,__code:"<Area\n  data={[\n    { x: '2019-06-20', y: 7 },\n    { x: '2019-06-21', y: 5 },\n    { x: '2019-06-22', y: 4 },\n    { x: '2019-06-23', y: 2 },\n    { x: '2019-06-24', y: 4 },\n    { x: '2019-06-25', y: 7 },\n    { x: '2019-06-26', y: 5 },\n    { x: '2019-06-27', y: 6 },\n    { x: '2019-06-28', y: 5 },\n  ]}\n/>",__scope:{props:this?this.props:a,Playground:r.c,Props:r.d,Area:h},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKYAEFTSw2V2gAAXIPxhTgSRXFNAiIPYQNJXIk1NXaMFUF0FFjlOXDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnBSABY1PYAA2NSNPWMBgIAMW9aBEgU_hnEOBEHUwGChH4JYiGoSg4G0hFzOrSyaGcCBcMudgAEZ9M0-QeL4ki5nE9gIygmjoHQMN2HkDlxLEFLoxkdgUVEmBuGAPDhNKuB5C3GtgHSqBMuCAAyFrxkSeZKGaRrmvMbgBrlMBkMlAZUHadgAH4NgysMI1yq5erDOLqykGQqzfMwYXVY4YDAMIoCmea8oK1biLmOqEzYggcCszIUivAhLprRhSPFFca2OaJXHKgBtD7Psk9gsAUgAmRTIoATnNRTjPNcGNJaK4AHZss0wHAagkG5XBqGYbh0HIsR-z2AAVjRgHPqxsGIeh2H4dB4mrn0inqwxixqZx2n8fhpMmfYUHWfZ-rgZpvH6dB_T-ZZpRKZF7H2lxumCdJ_nUdltn2c5xXuYl4z-fJjXhY50WufFgnkf54yheN7WlZ50GAA4DZtjGAF0VoxzcVyka7bvux66qkc7l3fMwvxAfztlcNJ_zgahAN0ECDDAqTq34VBvUZJB2H4H5i2qDJzR_Mls_R3OQFYDJ8mofgrn4RScEbxTPPWfhynIfoZm7f0c_4YjisI2BoSwb1S92slKESXM8gKCdNXNfO_lLVv05AKI0DrivVGwOPV4sduYHmcNeIgeAt7Tz7-FNSUt_4AA9SLjJwR2cCTfea2vherTvkBH-f1-78QDrBWvICOBdvAfGoJAFIccE7aCTvoBgUkQC0B9FkOuedTS0HNDfC0swZj8DAfIEhQA",mdxType:"Playground"},Object(s.b)(h,{data:[{x:"2019-06-20",y:7},{x:"2019-06-21",y:5},{x:"2019-06-22",y:4},{x:"2019-06-23",y:2},{x:"2019-06-24",y:4},{x:"2019-06-25",y:7},{x:"2019-06-26",y:5},{x:"2019-06-27",y:6},{x:"2019-06-28",y:5}],mdxType:"Area"})),Object(s.b)("h2",{id:"\u5149\u6ed1\u9762\u79ef\u56fe"},"\u5149\u6ed1\u9762\u79ef\u56fe"),Object(s.b)(r.c,{__position:1,__code:"<Area\n  data={[\n    { x: '2019-06-20', y: 7 },\n    { x: '2019-06-21', y: 5 },\n    { x: '2019-06-22', y: 4 },\n    { x: '2019-06-23', y: 2 },\n    { x: '2019-06-24', y: 4 },\n    { x: '2019-06-25', y: 7 },\n    { x: '2019-06-26', y: 5 },\n    { x: '2019-06-27', y: 6 },\n    { x: '2019-06-28', y: 5 },\n  ]}\n  smooth={true}\n/>",__scope:{props:this?this.props:a,Playground:r.c,Props:r.d,Area:h},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKYAEFTSw2V2gAAXIPxhTgSRXFNAiIPYQNJXIk1NXaMFUF0FFjlOXDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnBSABY1PYAA2NSNPWMBgIAMW9aBEgU_hnEOBEHUwGChH4JYiGoSg4G0hFzOrSyaGcCBcMudgAEZ9M0-QeL4ki5nE9gIygmjoHQMN2HkDlxLEFLoxkdgUVEmBuGAPDhNKuB5C3GtgHSqBMuCAAyFrxkSeZKGaRrmvMbgBrlMBkMlAZUHadgAH4NgysMI1yq5erDOLqykGQqzfMwYXVY4YDAMIoCmea8oK1biLmOqEzYggcCszIUivAhLprRhSPFFca2OaJXHKgBtD7Psk9gsAUgAmRTIoATnNRTjPNcGNJaK4AHZss0wHAagkG5XBqGYbh0HIsR-z2AAVjRgHPqxsGIeh2H4dB4mrn0inqwxixqZx2n8fhpMmfYUHWfZ-rgZpvH6dB_T-ZZpRKZF7H2lxumCdJ_nUdltn2c5xXuYl4z-fJjXhY50WufFgnkf54yheN7WlZ50GAA4DZtjGAF0VuFuBvJEPBytRBlPcBzcVyka7bvux66qkc7l3fMwvxAfztlcNJ_zgahAN0ECDDAqTq34VBvUZJB2H4H5i2qDJzR_MkS_RsuQFYDJ8mofgrn4RScC7xTPPWfhynIfoZm7f1S_4YjisI2BoSwb0692slKESXM8gKCdNXNCu_lLPuC5AKI0HbxvVGwdO94sAeYHmcNeIgeBj_zz7-FNSVj_4AA9SLjJwR2cCTC-NYX6bytO_EAX8f5_wASAdYK15CJ0rt4D41BIApHTpnbQ2d9AMCkiAWgPosjt3LqaWg5pX4WlmDMfg8D5C0KAA",mdxType:"Playground"},Object(s.b)(h,{data:[{x:"2019-06-20",y:7},{x:"2019-06-21",y:5},{x:"2019-06-22",y:4},{x:"2019-06-23",y:2},{x:"2019-06-24",y:4},{x:"2019-06-25",y:7},{x:"2019-06-26",y:5},{x:"2019-06-27",y:6},{x:"2019-06-28",y:5}],smooth:!0,mdxType:"Area"})),Object(s.b)("h2",{id:"\u5806\u53e0\u7ebf\u56fe"},"\u5806\u53e0\u7ebf\u56fe"),Object(s.b)(r.c,{__position:2,__code:"<Area\n  data={[\n    { x: '1750', y1: 20, y2: 10 },\n    { x: '1800', y1: 10, y2: 5 },\n    { x: '1850', y1: 50, y2: 25 },\n    { x: '1900', y1: 60, y2: 30 },\n    { x: '1999', y1: 10, y2: 5 },\n    { x: '2050', y1: 100, y2: 50 },\n  ]}\n  isStack={true}\n/>",__scope:{props:this?this.props:a,Playground:r.c,Props:r.d,Area:h},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKYAEFTSw2V2gAAXIPxhTgSRXFNAiIPYQNJXIk1NXaMFUF0FFjlOXDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnBSABY1PYAA2NSNPWMBgIAMW9aBEgU_hnEOBEHUwGChH4JYiGoSg4G0hFzOrSyaGcCBcMudgAEZ9M0-QeL4ki5nE9gIygmjoHQMN2HkDlxLEFLoxkdgUVEmBuGAPDhNKuB5C3GtgHSqBMuCAAyFrxkSeZKGaRrmvMbgBrlMBkMlAZUHadgAH4NgysMI1yq5erDOLqykGQqzfMwYXVY4YDAMIoCmea8oK1biLmOqEzYggcCszIUivAhLprRhSPFFca2OaJXHKgBtD7Psk9gsAUyKAHYAFZFI0lpIquAAmRSlkSeGrki5SlABz6oJBuVIoADkU6HkbhqKkZaVH2Ah7LNMBwGcdB_GoZhxJSah5HKfh6nMerOmLAZvGAE4iZZ0njPJlGriTDHab5_ngdBwWldFtGJcp7nZblgX2kR5mSdVtWrihmmsfYABdFa5dsYSJW2crUQZS3Ac3FcpGu277seuqpHO5d3zML8QH87ZXDSf84GoQDdBAgwwKk6t-FQb1GSQdh-B-Ytqgyc0fzJFPZf4VgMnyah-CufhFJwSvFM89Z-HKch-hmbt_VT_hiOKwjYGhLBvTz3ayUoRJczyAoJ01c0M7-Uta4TkAojQMu05UcMNDgWeLHrmB5nDXiIHgJf48-_hTUlJf-AAPUi4ycHxnAkw3msT4nq1z5AK-b7vh-QHWFb5EDzO3gPjUEgCkcOkdtDR30AwKSIBaA-iyGXdOppaDmlPhaWYMx-D_3kLgoAA",mdxType:"Playground"},Object(s.b)(h,{data:[{x:"1750",y1:20,y2:10},{x:"1800",y1:10,y2:5},{x:"1850",y1:50,y2:25},{x:"1900",y1:60,y2:30},{x:"1999",y1:10,y2:5},{x:"2050",y1:100,y2:50}],isStack:!0,mdxType:"Area"})),Object(s.b)("h2",{id:"\u81ea\u5b9a\u4e491"},"\u81ea\u5b9a\u4e491"),Object(s.b)(r.c,{__position:3,__code:"<Area\n  data={[\n    { x: '0', y1: 20, y2: 10 },\n    { x: '4', y1: 10, y2: 5 },\n    { x: '8', y1: 50, y2: 25 },\n    { x: '12', y1: 60, y2: 80 },\n    { x: '16', y1: 10 },\n    { x: '20', y1: 100 },\n    { x: '24', y1: 10 },\n  ]}\n  xAxis={{\n    line: null,\n  }}\n  yAxis={{\n    visible: false,\n  }}\n  legend={{\n    visible: false,\n  }}\n  scale={{\n    x: {\n      range: [0, 1],\n    },\n  }}\n  padding={[0, 0]}\n  smooth={true}\n  colors={['#8DDDCC', '#E3E3E3']}\n/>",__scope:{props:this?this.props:a,Playground:r.c,Props:r.d,Area:h},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKYAEFTSw2V2gAAXIPxhTgSRXFNAiIPYQNJXIk1NXaMFUF0FFjlOXDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnBSABY1PYAA2NSNPWMBgIAMW9aBEgU_hnEOBEHUwGChH4JYiGoSg4G0hFzOrSyaGcCBcMudgAEZ9M0-QeL4ki5nE9gIygmjoHQMN2HkDlxLEFLoxkdgUVEmBuGAPDhNKuB5C3GtgHSqBMuCAAyFrxkSeZKGaRrmvMbgBrlMBkMlAZUHadgAH4NgysMI1yq5erDOLqykGQqzfMwYXVY4YDAMIoCmea8oK1biLmOqEzYggcCszIUivAhLprRhSPFFca2OaJXHKgBtD7Psk9gsAUxSNJaSKrgAJkUpZEihq5IuUpQAc-qCQblfTwcSSGothloEfYABWbLNMBwH0YUgAObHcaJ_H4ehkmUercmLEpuVIqh2mrmMhnCap5GybZ9ngYUyLjJ5vHSdR-qxblGGpaRoXZdFjH2ihrG4dxpGZdZwGAF0VpFrBiKwWxyqk_XyagNAItQUIEmF8n5GNtnEjNi3gCtkWLFYWwIA8WArn2qA4BgZ3Add2XYDSDBLdV9h_fyIOItD8PI8-6PrZrOA4lgBOc8-jGfd9ixMhnCLfvxyKDczqP64sbORe0zsCj-_HFKN2W4G8kQ8HK1EGTd8mqCgIU4D-9oAGIqa1ef7HscGZ7PJNV9X9pu5zzcVyka7bvux66qkc7l3fMwvxAfztlcNJ_zgahAN0ECDDA0v-FQb1GSQdh-B-YtqgZHND-Mk39hb8FYBkfI1B-BXH4IpHACDFKeXWPwco5B-gzG7P6H-_BiLFUIrAaEWBvSgN2mSSgiRcx5AKBOTU5p_5_FLCg6s_AohoFgb_FQ4YNBwBYRYNBMB5jhl4hAeAnDS4CMEJqTh_AAB6EscBUxwEmfhNZ-CmklJaSIsiQAKOMkolR_B1grXkJfAB3gPjUEgCke-j9tDP30AwKSIBaA-iyLAv-ppaDmk0RaWYMx-BmNdvIIAA",mdxType:"Playground"},Object(s.b)(h,{data:[{x:"0",y1:20,y2:10},{x:"4",y1:10,y2:5},{x:"8",y1:50,y2:25},{x:"12",y1:60,y2:80},{x:"16",y1:10},{x:"20",y1:100},{x:"24",y1:10}],xAxis:{line:null},yAxis:{visible:!1},legend:{visible:!1},scale:{x:{range:[0,1]}},padding:[0,0],smooth:!0,colors:["#8DDDCC","#E3E3E3"],mdxType:"Area"})),Object(s.b)("h2",{id:"\u81ea\u5b9a\u4e492"},"\u81ea\u5b9a\u4e492"),Object(s.b)(r.c,{__position:4,__code:"<Area\n  data={[\n    { x: '0', y1: 20 },\n    { x: '4', y1: 10 },\n    { x: '8', y1: 50 },\n    { x: '12', y1: 60 },\n    { x: '16', y1: 10 },\n    { x: '20', y1: 100 },\n    { x: '24', y1: 10 },\n  ]}\n  legend={{\n    visible: false,\n  }}\n  scale={{\n    x: {\n      type: 'linear',\n      alias: '\u65f6\u6bb5',\n    },\n    value: {\n      alias: '\u6b21\u6570',\n    },\n  }}\n  line={true}\n  point={true}\n  colors={['#FDE6E6']}\n/>",__scope:{props:this?this.props:a,Playground:r.c,Props:r.d,Area:h},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKYAEFTSw2V2gAAXIPxhTgSRXFNAiIPYQNJXIk1NXaMFUF0FFjlOXDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnBSABY1PYAA2NSNPWMBgIAMW9aBEgU_hnEOBEHUwGChH4JYiGoSg4G0hFzOrSyaGcCBcMudgAEZ9M0-QeL4ki5nE9gIygmjoHQMN2HkDlxLEFLoxkdgUVEmBuGAPDhNKuB5C3GtgHSqBMuCAAyFrxkSeZKGaRrmvMbgBrlMBkMlAZUHadgAH4NgysMI1yq5erDOLqykGQqzfMwYXVY4YDAMIoCmea8oK1biLmOqEzYggcCszIUivAhLprRhSPFFca2OaJXHKgBtD7Psk9gsAUxSNJaSKrgAJmUpQAc-qCQblfTwcSSGothzTAcBxGFIADlR9GAFZMfh-rgYUyKocJq5jNJ6tsYsXG5Ui4yaYx7KscZpmKblGH2cixT6e5nmkfaKGUaWNGrkFzmyYAXRW7nYDSDByqkhnGdYWwIA8WArn2qA4BgLnsfkJXGbgOJYHVsmLCRjWRZrET5gUqA0HFARAqdix4ggfwFMAN9NAFbrb2RbhzXsdYeIGSuR2fb9gO5UAQmtAAdTMPuYjzOLex93nXK1EGRzwHBTQAgC7RGBi8-qgoCFOA_vaABiKytTPYz2_aRWAc3FcpGu277seuqpHO5d3zML8QH87ZXDSf84GoQDdBAgwwPj_hUG9RkkHYfgfmLaoMnNH8yR3rn-FYDJ8mofgrn4RScEfxTPPWfhynIfoZm7f1d_4YjiqEVgNCLA3oz67TJJQRIuY8gFAnJqc0B8_illftWfgUQ0B3z3iocMGg4CoIsO_GA8xwy8QgPALB8dCGCE1Fg_gAA9VmOA8Y4CTAQms_BTSSktJEOhIBGHGWYaw_g6wVryCnofbwHxqCQBSAvJe2gV76AYFJEAtAfRZDvvvU0tBzRcItLMGY_BxHm3kEAA",mdxType:"Playground"},Object(s.b)(h,{data:[{x:"0",y1:20},{x:"4",y1:10},{x:"8",y1:50},{x:"12",y1:60},{x:"16",y1:10},{x:"20",y1:100},{x:"24",y1:10}],legend:{visible:!1},scale:{x:{type:"linear",alias:"\u65f6\u6bb5"},value:{alias:"\u6b21\u6570"}},line:!0,point:!0,colors:["#FDE6E6"],mdxType:"Area"})))}S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/area.mdx"}}),S.isMDXComponent=!0}}]);