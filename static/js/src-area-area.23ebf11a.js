(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/area/area.mdx":function(e,A,a){"use strict";a.r(A);var r=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=a("react"),n=a.n(t),o=a("./node_modules/@mdx-js/react/dist/index.es.js"),s=a("./node_modules/docz/dist/index.esm.js"),i=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),l=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),c=a("./node_modules/classnames/index.js"),m=a.n(c),g=a("./node_modules/bizcharts/umd/BizCharts.js");"undefined"!==typeof IAreaProps&&IAreaProps&&IAreaProps===Object(IAreaProps)&&Object.isExtensible(IAreaProps)&&Object.defineProperty(IAreaProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IAreaProps",filename:"src/area/area-chart.tsx"}});var B=function(e){var A=e.className,a=e.style,r=e.animate,t=e.forceFit,o=e.height,s=e.scale,c=e.data,B=e.xAxis,p=e.yAxis,d=e.color,E=e.line,x=e.borderColor,h=e.borderWidth,u={x:Object(l.a)({type:"cat",range:[0,1]},s.x),y:Object(l.a)({min:0},s.y)};return n.a.createElement("div",{className:m()(A,Object(i.a)({},"".concat("rc-area-chart"),!0)),style:a},n.a.createElement(g.Chart,{animate:r,scale:u,height:o,forceFit:t,data:c,padding:[36,5,30,5]},n.a.createElement(g.Axis,Object.assign({key:"axis-x",name:"x",label:null,line:null,tickLine:null,grid:null},B)),n.a.createElement(g.Axis,Object.assign({key:"axis-y",name:"y",label:null,line:null,tickLine:null,grid:null},p)),n.a.createElement(g.Tooltip,{showTitle:!1,crosshairs:!1}),n.a.createElement(g.Geom,{type:"area",position:"x*y",color:d,tooltip:["x*y",function(e,A){return{name:e,value:A}}],shape:"smooth",style:{fillOpacity:1}}),E?n.a.createElement(g.Geom,{type:"line",position:"x*y",shape:"smooth",color:x,size:h,tooltip:!1}):n.a.createElement("span",{style:{display:"none"}})))};B.defaultProps={height:400,animate:!0,forceFit:!0,color:"rgba(24, 144, 255, 0.2)",borderColor:"#1089ff",borderWidth:2,scale:{x:{},y:{}},data:[]};var p=B;B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AreaChart",filename:"src/area/area-chart.tsx"}}),a.d(A,"default",function(){return x});var d={},E="wrapper";function x(e){var A=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(E,Object.assign({},d,a,{components:A,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"linechart"},"LineChart"),Object(o.b)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),Object(o.b)(s.c,{__position:0,__code:"<AreaChart\n  data={[\n    { x: '2019-06-20', y: 7 },\n    { x: '2019-06-21', y: 5 },\n    { x: '2019-06-22', y: 4 },\n    { x: '2019-06-23', y: 2 },\n    { x: '2019-06-24', y: 4 },\n    { x: '2019-06-25', y: 7 },\n    { x: '2019-06-26', y: 5 },\n    { x: '2019-06-27', y: 6 },\n    { x: '2019-06-28', y: 5 },\n  ]}\n/>",__scope:{props:this?this.props:a,Playground:s.c,Props:s.d,AreaChart:p},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKYAEFTXsPx7SNWV2g9OABHISRXFNRjTXNcgKJfFVUEI9V2EDSUsOo01FTBVBdBRY5Tlw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZ00gAWfT2AANn0wz1jAYCADFvWgRJNP4ZxDgRB1MBgoR-CWIhqEoOATIRBzqycmhnAgXDLnYABGCyjPkUTxJIuYFPYCMoPY6B0DDdh5A5BSxFy6MZHYFE5JgbhgDwmS6rgeQtxrYACqgIrggAMl68ZEnmShmi6nrzG4Sa5TAZDJQGVB2nYAB-DZCrDCMyquMaw3S6spBkKs3zMGFeMwMAwigKYNvKyq9uIuZ2oTfiCBwZzMhSK8CEemtGFI8VyKY0RqxrGt0GiVwGoAbRXEGLCgrBNIAJi0pKAE5zS0mzzWRwyWiuAB2EqjNh2H4aRlH0cx7Gktxjz2AAViJmHSfYBG5WRtGMaxxHEdpq4LKZ4GSaU1nyc5qnEaTPn2ERwXhY60X2YprnsYs6WBaUZmQbJpXxe5-npcJzWhZJnX2g5ynuZs6XGeN-W4cV83lYl_HpZsuX7bNi2VcRgAOG2PZJgBdXaSc3FcpGe173s-9qpHu5d3zML8QDohimPFFjxTYjicAIOAsEA3QQIMMCePtZ7BJNTUCIgno4LgOAADlvXgKv2nIBu4FQVu4FroiReIrBbCWAHhSWABxGBIiWSxhEuiAZiWIfbDQyhB0wqi5Q8eL2MBvuuOOrAB7QWgBHO3yGj-1w18HZTq07_xm9bparhRacUi4ixatgV--M1HA9hnDOFvhkGI8Av6FigEKP-78CiQM2BAFIhA_6oFCEQQIAhIFeAEFORw0CBCwNRPA9YUA0AwD_l4Sg5JUCQPcPyLIlD57iloesLAK84B_w4bfOAkCnL0RgM5F4TDqEsMgXAOIv8rj3xBlgP-MjYYxB2I4ZCBBUHoMwZAiw8gtEtHkczJR2wVE0HURgjIuidHrEsdWRIHC_7QUBhAeIv1h5wB4WIbBQopwAHUuATFMZo9YYMCCuGkSuNmaCzFHAAD41WITOXRdNImBOrPISGQcuK7TMJlPsXRIBYHsFAOwilOjkHNBnVwOdAZ-mydQCS18x4ECuFHZy9hGBX1NO4nKEZ-zrzgGVbgFUFE5IURYR-jcW5HmJjWH-MBpkWHoVEWg8zDRCgREIggKzEHIM2SuCR8Q5krmCa4FZ7DXErNseclcVACErLIc6FZOC8HUKFI8rxGRfHoAmFYnKvS7iHwfnUqY-zYA8JyqMxWEKLCyXmJpOIL4VkWEyDORKkMtJLCSkHRF7AcC4pBX-EkK47Y1jplC9gRA0BXHRczXFOB8U4ESCs4l1j1g5NoBJRS0MhbADZk7PW2MtKG2JXDXl3sJY0yWHTemwqlKiudtzXmkr-Yyp5WLS22MpZKpliquV_LEZqy1RZHVaqfYGy1fjY1ut1WI2tlq6VKzVVWp9q7LVNlLV8utf7O1od2AZNEmMoFQ5qExBmFcSGcCZxLAjLSpiKR7ghFQIkdJAyhnsB7keIhH8lTsFYPEBkb94mznkEHHKXKQbtCwEYRIUUQYRjZhGlIWqG0ptymS9NiVCUmxzXmxKjKiUcmmX6_0gLUASRMp2AoYbkkZCWNOgQs6NEzrTYugQJbOVJhsksemSwkzooZkO9YXQCB9HMFGIWMZWDM3Gc_I8DVr2TPgBGe9rclhkosJDYoAASYA_YYD5MKa1YoQcriogZMzUqPqQazIarMyD7BvoJkaVrBNDDaANUWVkODUHJH1WAPinhWGazbMIA1YjBBCMWH4esl4DUqOCJeBR444MGrHMY-OsyKQGrsYKIRhDP0OHIYsNsGAiQ-AgFcK480WB-CCbTa3MT0mQCybgoEKADU0EJEYxYe5uGNNQC0-MWI2wAAy5D1OhE07JxCXBzOWa7drWlZzbCMfDvZ2sAm3NCZE2JiTthzSJBk55uTt7-ABaU0FlT85bP6eU2Z4AemDOGNM86aLBnrM8HixZmLQXgC0suc55Drn5aMDnsGxeNVhgjEsC8WAtH4hwBgJhcgQhG5-AgAIOAdWimNfYEV4WjAp6RFkzC-q_AKmBftn2MKLx5oKarRN-2NyhR3peQIRL88Q0NQiGVmYBm4B-HmGJuAIURB4AW_LaDwA32w0gAkHUEUXh0yStikG8gXN8bhjp5at1JsDenkQWT0KhqjZADp879tBT5G7KgObYXAcVdmCD47z4zvhcmwGghDUnkZHwUKAz394q4exwIT5Ex8dBoXjMLrDWDN9ZJptH79tGDhXcHEuqDUoIsHCnBOm7RUDUBgItN7vWPvsA5IRqQjTvr7VjOsN8LLUANNzmdC6BAwWKQUWR_mWlqXVgw7QEDaJDnRTWfRpp4wjfTKW2WE0KQPCuAjPqjFFlUoy3ptu9gWkcCIw5DW9gxPcc2_aAAYiSlpX2qMwBgD98T0neAriI2mfi6RkKlB4yUphYlxyw1BzMArk69oVcWZImRDiXEU4RW2K4NI_44DUCLsBfQDAFH8HbfwK4_AfjFmqBkc0P4ySMhANM_grAMj5GoO39g_Avcz6Cusfg5RmuL2h5P_gxEaqEVgNCLA3oB_HBgGSSgiRcx5AKBOTUbEix_FLHP6s_AohoFXyocMGg4C34sAvg_dBMBiQgPASfEK_AwkogSAU-IAAAeklDZDgL7DgEmO_jWJ3l3O2m_qAfwOAYjN7jgDZAgR_iADvLhHvMKKgR3hAUmDgPTDgBZLgWAcAZaENmgRAVATAXAQtrtPICnN3t4B8NQJACkLXvXtoMXE3mBMpCALQD6FkO3p3qaLQOaHQbMDMPwBwW9vIEAA",mdxType:"Playground"},Object(o.b)(p,{data:[{x:"2019-06-20",y:7},{x:"2019-06-21",y:5},{x:"2019-06-22",y:4},{x:"2019-06-23",y:2},{x:"2019-06-24",y:4},{x:"2019-06-25",y:7},{x:"2019-06-26",y:5},{x:"2019-06-27",y:6},{x:"2019-06-28",y:5}],mdxType:"AreaChart"})))}x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/area/area.mdx"}}),x.isMDXComponent=!0}}]);