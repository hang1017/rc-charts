(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/line/line.mdx":function(A,g,e){"use strict";e.r(g);var B=e("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=e("react"),i=e.n(o),t=e("./node_modules/@mdx-js/react/dist/index.es.js"),a=e("./node_modules/docz/dist/index.esm.js"),w=e("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),r=e("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),Y=e("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),Q=e("./node_modules/classnames/index.js"),s=e.n(Q),I=e("./node_modules/awe-utils/dist/index.esm.js"),E=e("./node_modules/@antv/data-set/build/data-set.js"),n=e("./node_modules/bizcharts/umd/BizCharts.js");"undefined"!==typeof IDataItem&&IDataItem&&IDataItem===Object(IDataItem)&&Object.isExtensible(IDataItem)&&Object.defineProperty(IDataItem,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IDataItem",filename:"src/line/line-chart.tsx"}}),"undefined"!==typeof ILineChartProps&&ILineChartProps&&ILineChartProps===Object(ILineChartProps)&&Object.isExtensible(ILineChartProps)&&Object.defineProperty(ILineChartProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ILineChartProps",filename:"src/line/line-chart.tsx"}});var C=function(A){var g=A.className,e=A.style,B=A.title,o=A.height,t=A.padding,a=A.titleMap,Q=A.legend,C=A.colors,d=A.smooth,D=A.borderWidth,h=A.data,U=i.a.useState(null),l=Object(Y.a)(U,2),c=l[0],y=l[1],m=Object(I.a)(h)?h:[];i.a.useEffect(function(){if(Object(I.a)(h)){var A=h[0];if(!A)return;var g=Object.keys(A).filter(function(A){return"x"!==A}),e=new E.DataView;e.source(m).transform({type:"map",callback:function(A){var e=Object(r.a)({},A);return g.forEach(function(g){e[a[g]]=A[g]}),e}}).transform({type:"fold",fields:g.map(function(A){return a[A]}),key:"key",value:"value"}),console.log(e),y(e)}},[A.data]);return i.a.createElement("div",{className:s()(g,Object(w.a)({},"".concat("rc-line-chart"),!0)),style:e},B&&i.a.createElement("h4",null,B),i.a.createElement(n.Chart,{height:o,padding:t,data:c,scale:{x:{type:"linear",tickInterval:50}},forceFit:!0},i.a.createElement(n.Axis,{key:"axis-x",name:"x"}),i.a.createElement(n.Axis,{key:"axis-y",name:"value"}),i.a.createElement(n.Tooltip,null),i.a.createElement(n.Legend,Object.assign({position:"top"},Q)),i.a.createElement(n.Geom,{type:"line",position:"x*value",size:D,color:C?["x",C]:"key",shape:d?"smooth":""}),i.a.createElement(n.Geom,{type:"point",position:"x*value",size:4,shape:"circle",style:{stroke:"#fff",lineWidth:1}})))};C.defaultProps={height:400,borderWidth:2,padding:[60,20,40,40],titleMap:{},smooth:!1};var d=C;C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LineChart",filename:"src/line/line-chart.tsx"}}),e.d(g,"default",function(){return U});var D={},h="wrapper";function U(A){var g=A.components,e=Object(B.a)(A,["components"]);return Object(t.b)(h,Object.assign({},D,e,{components:g,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"line-chart"},"Line Chart"),Object(t.b)("h2",{id:"\u57fa\u672c\u6298\u7ebf\u56fe"},"\u57fa\u672c\u6298\u7ebf\u56fe"),Object(t.b)(a.c,{__position:0,__code:"<Line\n  data={[\n    { x: '1750', y1: 20 },\n    { x: '1800', y1: 10 },\n    { x: '1850', y1: 50 },\n    { x: '1900', y1: 60 },\n    { x: '1999', y1: 10 },\n    { x: '2050', y1: 100 },\n  ]}\n  titleMap={{\n    y1: '\u4e0b\u8f7d\u6570',\n  }}\n/>",__scope:{props:this?this.props:e,Playground:a.c,Props:a.d,Line:d},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKYABk0G6I1ZXaD04AEchJCgMj6LI81yD8YUCIg9hA0lLDKNNRUwVQXQUWOU5cOcAhEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGdVIAFm09gADZtN09YwGAgAxb1oESVT-GcQ4EQdTAYKEfgliIahKDgAyERs6s7JoZwIFwy52AARhMvT5EE4SpgAQTmGT2AjKDWOgdAw3YeQORksRsujGR2BRKSYG4YA8Ikmq4HkLca2APKoAK4IADJuvGRJ5koZoOq68xuHGuUwGQyUBlQdp2AAfg2fKwwjEqrhGsNkurKQZCrN8zBhdVjhgMAwigKY1tK8qdoy5dqwTbiCBwezMhSK8CFamta1I50V2-9BolcOqAG1_u-uT2CwVS4oAdgAVjU3SWjiq4ACYNKUcHvqg6G5TigAONSkaWRJUfizG9IhiHcZhgnEeRsmrkRoqqeptqoZhgBOYnGfJizKexjm8faOKufFvmrjiwWHvZ2m5QxhnSfJ6WZfZ9gAF1tvVmICFgPVZjq-TZeppm5UAaDlAF94wAHUzC9X5G1iHNxXKQnpet6PtaqQ7v2swvxAGi6IY50mOdFi2Oegg4CwQDdBAgwwMI46nt4k1NQ4oiejguA4AAOW9eBU_achs7gVAC7gDPjqg2w0oETJkkwii5VcEYYHNcJoErlVUCT-0oK1IGADUIBgMYm7ddoAAF3AIVhpCB804FHKv-4cCOlksYQLogGYlgAcRgSIlmImA0hQ9g0qwWwT7Puh0DQyhBwn7CPGi1jXGFbvbWrqxoMMgoL9KI4A9DMUefozCpT7F0SAWB7BQDsLJTo5BzTB3bh_diPdDpYEzmgWgAgzqeQaIPAgrgmwwFlMbCweMkQ9wsCDbYMAXJVVRAUDWVxUChCIIEAQPdtrYNwXoAhEpugNF-jAewEdH6DioVnfwecC4LSuCiacKQ6EsJqkorimocD2GcM4aRGQYjwHUQZTsBQtGWH_uYmc6jNgQBSIQLRnDuEZHUVQKAQo4BaJUQUEGGt1GA1IVcYhQNyFEH8eo3WsAfGsJnOwAAPtos0OAnq50BFEl4-tZhaNkfQxhzDfEznYSEVAiR1HyHUY8dggA_tUANHygBZRMAHb-6xYDn3QFo0-7TpFwHUV4AQU4ADqXAJjOK4Tw9RbT77QSCi8WasTVFVMkOwQA9GaADIVQAznqAEW7dY1TAAbeYAEujABccmdBBjJqxwACiIPAVwvCUHJKgPhKVqAiXEZIz-BArhu3svYRgYiyLvOFD0sqskIz9ifnAEq3AyqyKgXkuROd85HjZhYaqsAUXjCyTADF9jHEEAxWYoyKQMXRJgAbPeK4pkoRXB4rxGLLnPjwBi_pQyRlMpXEE1wyiPIwBIa4NmmFZLgruO4l5UwQYYO1EDJYy8CCAqlaQjWWU3Z5BgBJLIEZOELiwdWKBnKsq13rvBCMcAeV8pKktU1fQER8vYFcSJgkLAquXmeMAYAtgEAjFdaFckVwQGaBGQ1DcTVmqBhyEq8KLBQJeBQrKVraK8qBiDNSATHUQ39dlAAhDGogJUugED6I8tN30oHOhGAAaSYYg9gOoPDqA9TgApcBA20FzTgSAF1Iw5uut2zNE12g6Q_MWmseqOCyTLewPlI8x5rXUQDVgOB40IgjJyt86scConcHAOyAgiA5SFhYSS8xVJRBmHbdWqwEgeAlNsCMQgRgRoPSOsV7Ay0ilGFlKCIDQwfsqU-iwZbK2JDgO2oUZ4JR4BbbGn1kaL1vtGCDUl5KQY5o1kq2S96UOttTSbdmxU50XvzYW19Y930jAI9TLGuGLDFSFhuzIqBt1Cj3bB76R7YrtDsp1c96tIDznQPcEjFaq04FPVB2UPqkOzCwxQjWHIMXUwKapApPH2asHiAyVS6moAMnaELfDw6o0vPuX-TxKQV2sCHf6XDsr5V8os1Z76jslDsBBsKkDnK5M6qM4xqYHjq3wrxrB9jqk0Gf1U4e2I2wGhCO08zNSGKqM0e8xOUcxGoyyxjKwcGJd5FItqu1Uu-Xm25cRQXJYrHXPFAACTAH7KdCAcCEHyGKCU1EDJwbFUdt9NFBXevdfYF9NqpL2C9WyomEyYhgCkvkBWSbHIBsJnlULXFhA6qrYIItmshKCh1R2zOLbFhOV1UlXyw7VU4iwBO_c5qQsd0Insi8cGQ2cbGChoAF3j2A8nO4wK-th2AFL4CAVw184DmiwPwV9BcgcQ5AOwZ21G5JvcSJ977Qtfug4B0woHIPbDmkSJD8uR4gfaY63DhH6Ot73JiDMeHL22pvfqV9yQP2un3z7LM7sqAgcRBmJD4A36qXoEwhTxHjBD6RCfexoHaD-BPsFPkLnMOjCk8ZCAJ9-QYp1RZRkYZ6AJjnaM54gQdV_2FmN3YJaIMB3I1pQIOASrlNML04jmjGu_DzDqgy65i05Te4mPNVS7Rzui_VuLo-RApcDVqvwQUeC5eu454r2ayvVcJ4vVVaKBWTKG6qh7gr_ByAQForAfgufetGzNyoygjCrj8AAMRurAH5M3aC9cTClk-h2QsEfUykPKobu1YzrDfH-6zbyI44EwGdUIF0emfvWBtq4JliZsx1wIdvNz2BozZvtlI9qBZLAxksFfJ-U1sykzMK4wAktVSuR3w08Rl5mDHwI460_zokQBRHHu_tA6SDARgEkFUGwA3WjljmAn0AYD7imGglHnlSLlAVHnDg-QgWdBwV_gaDgJgB6U3msSJSWFCVIXCSKkQIAOQMlT9COntA_1n1gPgJ_z9iUADlonIKAMAJQOFDAJjm0DjigMTk4hTmbnlDNFXj8yKwriLlKzLgrjEMhn3h33Xg-U3m3hpwPgjyWEcCFByCATlDflwklW_l7k4gHmHlHnHiLhnhoHnk5SXhXh7hgPYEewIEsGwClEnlonNEgAtFoCwBfAcM4iojYM4OeixCMMgRfXq1gXgWrWQXNA4MoJ1WoLHCEUIVET5RINkTxiKTUXWGYRcQmRf0EmSP6nmD_gAXiT4AuTiUKGrCSXhV5w4XGTcRXH6DxSaNcV4RXC8BuEiA6MKNllgDAE-VfWaK6OrEdiSQKNBDqNc2mIECWHmMWLGOWM6I1nWCSRBhyJlRqJwzf3tDwQyDSMaGwPn1hQkKPAWQKHUV6y0Tdj0QMQHCMVHl6V2WWRqUAAsIwACqVABuV0AAB9QAZ0VAAYf8OSOXGDRHOQsHcH5CyC0TuQeVFWNyuNsXWDt28WURqIdQuXnA9WyDhO3nFCLWrGqUAHBjQALO1PjAAQt0AA2swAMr0gTABVZUAFl5ME9oayRfGABxJxfolo4k94j4wAUMVABO-MAF3Y9YPfSxfA649YTlEJDI1tLEw9EQeIO4nRNJQERJUYzozUr1KFMqN2dU7yKYsYxzTFPWGAVUlJQ0mAG4t4SwLFS0yUVJTUdJTAJZVZNZQAPjNAAuTwiGp13nWD9J3hmHxJM3cHdIFMAAuEwAQPNAAFdUAHALQAb59KTAApZUABD9IE5Nc0OKDWSkwAeB1rZ1g0BnQBARQOwIA8gxlOjJkyJN8qyBiLBqlAA_N0ADAlQAFesfTxSMgEQaB6zeTGz-TKTABe7VpMACvAwAIATAAUvUBNsiFAexeFDIRLePYEAHbgwANeUNgPl2BAA87TqUpMAD21QAYBimRUBD4CAFCYsUR3AEQtEIxJUrgFDdEI49T2BWBKAuAnlrMoE4BLtuhZIsjr8VwQs5Q4gXwMUGM0h7UEt4oNYBU2ZmF4UiA0ArgEt1gqNX8hIX1sD5UvkdEfk_lTj0IQVsp3MXzYUX14VpD8t6VJJ0UVwNsMV7sYBnCCUKjiUVxoSohaACVuz9AMU7d-L7k6UgKsV6U7TRKgLlSoAMViyMgyyWA8gMU282UMVqAzyLzfNrzITSChV0IUsoE_AMBYB1K0ZLzSEhI_zsp7z2BHz5UyKVw1LRwNKryLLRs-pHLzzTLNKLK7znyKl9KX0gyad7JmNoh7UVxtiVwIxv1P4UhBMkR_EyKodLiMTFlXyNNYociioVx0NXMVwB0jBYQeywKorsiajSQeSBAXz91cMidYoSRwZVcrgatgAwUvsKY1IOQN1KBHsagHw0YFsABSYoRLeTdYPY3VF9Wgi6RwC3LKNEyZUcQ0UKuVIS8YiwWAKYfVXSiFKfIGRJTYnDDapaoK3eLKdzbq_0mYRaqYZeWASUXMHau4RdHEh69AFLDNMFXizMBJJJIql0caWSTq31WWO63EnIWSU5ZeAjU62nSGp_G0lcHdLi2aoULKCMJqlhVRey3DT61XGSftQAA2U2zXwQb1YiMBBzA7cDqTQUhr0Iw0ZEp4oTIma0Z4Z4Ylg1IcB6YOQ_RKNwYKbzB2h697I1J7I0Z7J4Y-aawMKAZ9rZIwZcNKsRZiaIsaxmEDJ7dmLPFogvqE1MwABqOUV8BTVmcGZW1SQAWeUSbTaLBmFVZ2BzQ-xP5l57IdbPV_rDbjaxrcNb8LAjrsrrMfMRJ0Ax0hNJ0zCZ1TTQ7F0eUV0w16Mt1kaaq2No9VJPaSrZY-NOpVJEhVMWArx8hqBVIdIMV_B07vrM6aMrN1hBabpvosscsLiCsqKK47zm6KshYQYWqojGsYiWs2sITOsFtwYK9gB-sVx6dGBnDXC_D2AogsAQrIos86o2aWp0dKpW7idgAe6YE-7msAB9A-yVYodexPRgZbRPVFX8r3X83PCwDbdbTkvFe-5ahNZwuqJi5w1-47eqVgV-vfPbNi1-zirIOqUB2gV-jy5y8yhEdbSoYypyrylyhEXPenamYAYwIwdgQABeNvTABD-UAHsDCMWGjkQAEb9AA3uWZ1fuAEzUzVhrctrCp2DLz1GHtPNM_oRpFzEBoawfYATMTMoeobNwvuEAGVKJjxAAmFHFcEh1ktLPLLyDqnkfkorOajpxEYl0jyvprDHqgmUv1yZSxprw40bzdXmm7x0aVKurqgYaWlhpCt3WiDtVyHDEgGdGFzN0PWjyB0OIEG03VR2HTwz2205xT1j0ruCZCfNyFFNysZrEVuiepht1tpCYzppvScBvYA0iWmRuiFRqOCuGmtWot1SfViVX8FKQJ3idftRVetoB4HHvqeyFft7wvX7wjirCfVavpA8HYdgBpoiFISgBKjGwy2iaywRQUW3t3oaya2aiPr4JoFPvQblhGzGa8ZrETHhimxmwrB2c2ZHviemyksYfGaSYTHuguZxnYyGiHGGYJqQSmiEi53mnsakquiuCGfiFqa2YANWepiOYufHvEvNMYe2am16f6ZgFm0kDwB2dfqH1kCfSBfZiRanskBnrcMHx3GRerFHx1Wwsn2Kfn3_PWAgdina2xVnPfpeC-YhLZiX3YBX1QurBUcUcEy5oRjZgMYfzil3zYvtTikUOguFc5vWNQAwpKOKZggYI-V_2YP_0AOCMlRwDCIgL0FAhACnkcPaAAD9Z50AmIPBJBetJBpGjw4BpBTpP81X4BwjUAp5e6sAWIEErg9W4iEiI40CcAp46s96XWS51HZEFc5li7Us4IYhWBEag7RtFmI4ybQnk9w2uhI22AY23dY3upFnIDMx4VQ2ucrhXAPBTUdNaAYan54tBqCMhiRjEZq2VwF7zQmWMY1JtIYa3DzR4gHEVIeh9B-yaxN1GNkb6Wt1I2YAIxzR62lgp21JBqa7ZYyo8ATJE3voW20Z23wZFJlJzQeiIgiArgCZN3cM7crgp5fCLQ7c7DdBAYBBylwYIoLQ24uSRjUBQqoAKNlqaAl4s8pYzIsBP20Fm3n7CB0YN2AOVx-FF3fB4ZV2ax13j3qZt20BzRGj2Aj2IOT21qrh68CZXA8O8PP3H3zRn32jX132iPgIf2Yo_3EOIYgOEPMOnNh0ypadYMmWkxwPP3kPe21JP3T32Ap5NhyyZwWI1rKPv3NdYo4ocA0YKFAPmIOOuPwYRgbBaAl4QpYo32RhMhrrIO0KijUB_YQpthXA0h_xTUjPeDc2E4QBZF-A6r-A68gJyg_hSxzQfwyQ1c2Z-Bo37dZonP2B-AuaQuW9qx-ByhyB-gZgudAv-A0pM9fxoQsBvQvOToyRKBEhcw8gChUszQxPXPiRQQQAfOQAog0A4uVBwwNA4AwuLAIuYB5hwwhIXjAv4V-B-JRAkAguQAAA9OKCybmnAJMOrmsQvUuOq2r7r_gXrtGWTnACyUb-r4HNuDuGIBBSr3rkLnAWGJbnrqwueBeUhOwrr5zrbnAaWWTvb_gfQwwzbpMHAeGHAEya7wQFBbw1Dtwzb7buKV7w1-7i7rmYb17zry0SXabvrgbobkb9XCYl_P_Nz3AXQSAFICz6gDV-OBgeSKRihMkLIJzwvU0dT0H2YPnBQBQB2IAA",mdxType:"Playground"},Object(t.b)(d,{data:[{x:"1750",y1:20},{x:"1800",y1:10},{x:"1850",y1:50},{x:"1900",y1:60},{x:"1999",y1:10},{x:"2050",y1:100}],titleMap:{y1:"\u4e0b\u8f7d\u6570"},mdxType:"Line"})),Object(t.b)("h2",{id:"\u5e73\u6ed1\u7ebf\u56fe"},"\u5e73\u6ed1\u7ebf\u56fe"),Object(t.b)(a.c,{__position:1,__code:"<Line\n  data={[\n    { x: '1750', y1: 20 },\n    { x: '1800', y1: 10 },\n    { x: '1850', y1: 50 },\n    { x: '1900', y1: 60 },\n    { x: '1999', y1: 10 },\n    { x: '2050', y1: 100 },\n  ]}\n  smooth={true}\n  titleMap={{\n    y1: '\u4e0b\u8f7d\u6570',\n  }}\n/>",__scope:{props:this?this.props:e,Playground:a.c,Props:a.d,Line:d},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKYABk0G6I1ZXaD04AEchJCgMj6LI81yD8YUCIg9hA0lLDKNNRUwVQXQUWOU5cOcAhEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGdVIAFm09gADZtN09YwGAgAxb1oESVT-GcQ4EQdTAYKEfgliIahKDgAyERs6s7JoZwIFwy52AARhMvT5EE4SpgAQTmGT2AjKDWOgdAw3YeQORksRsujGR2BRKSYG4YA8Ikmq4HkLca2APKoAK4IADJuvGRJ5koZoOq68xuHGuUwGQyUBlQdp2AAfg2fKwwjEqrhGsNkurKQZCrN8zBhdVjhgMAwigKY1tK8qdoy5dqwTbiCBwezMhSK8CFamta1I50V2-9BolcOqAG1_u-uT2CwVS4oAdgAVjU3SWjiq4ACYNKUcHvqg6G5TigAONSkaWRJUfizG9IhiHcZhgnEeRsmrkRoqqeptqoZhgBOYnGfJizKexjm8faOKufFvmrjiwWHvZ2m5QxhnSfJ6WZfZ9gAF1tvVuAApEPA6tRBltfZmICFgPVZjq-TZeppm5UAaDlAF94wAHUzC9X5BN77NxXKQnpet6PtaqQ7v2swvxAGi6IY50mOdFi2Oegg4CwQDdBAgwwMI46nt4k1NQ4oiejguA4AAOW9eA8_acgS7gVBK7gQvjqg2w0oETJkkwii5VcEYYHNcJoCblVUGz-0oK1IGADUIBgMZu7ddoAAF3AIVhpCB804FHZuJ4cROlksYQLogGYlgAcRgSIlmImA0hQ9g0qwWxb_vuh0DQyhB0X7CPGi1irhhQj1tC3Kw0FDIFF_pRHAHoZhzz9GYVKfYuiQCwPYKAdhZKdHIOaGOA9AHsVHodLARc0C0AEGdTyDQp4EFcE2GAsobYWDxkiUeFgQbbBgC5KqqICgayuKgUIRBAgCFHttEhZC9CUIlN0Bov0YD2ETl_QczDi7-HLpXBaVwUTThSOw3hNVtFcU1DgewzhnAqIyDEeABiDKdgKMYywECHEzgMZsCAKRCDGKESIjIBiqBQCFHAYxuiCggw1gYwGdCrg0KBgwogESDFm1gKEvhM52AAB8TFmhwE9MugJkkvAtrMYxaiOFcJ4WEmcAiQioESAY-QBjHjsEAH9qgBo-UALKJgA7f3WLAB-6BjF3wGSouABivACCnAAdS4BMHxwjREGP6R_aCQUXizTSXo5pkh2CAHozQAZCqAGc9QAi3brBaYADbzAAl0YALjkzqYMZNWXWz48BXC8JQckqBxEpWoCJBRSigEECuP7ey9hGDyLIv84UoyyqyQjP2b-cASrcDKmo5B5T1GlwrkeNmFhqqwBxeMYpMACUeK8QQAl9ijIpAJSkmAltz4rmWShFcgTgkEqefrAlEzpmzLwAS6JrgdEeRgLQ1wbNMKyXhXcAJPypgg0IdqIGSwd4EEhYquhGssr-zyDACSWQIxCIXMQ6syCBVZTbh3eCEY4DCtFSVJaNq-gIlFewK4STBIWG1TvM8YAwBbAIBGK6yK5IrggM0CMFrO7WttUDDkJV0UWGQS8RhWVHW0RFUDEGalIkeohmG7KABCZNRASpdAIH0T5ubvrIOdCMAA0twrB7AdQeHUP6nAlS4ARtoCWnAkALqRmLddIdBaJrtB0h-KtNZTUcFkrW9gorZ7zzWgYgGrAcBpoRBGAVb51Y4FRO4OAdkBBEBykLCwkl5iqSiDMd26tVgJA8BKbYEYhAjHjee6dsr2C1pFKMLKUFYGhn_U0z9Fha0NsSHAPtQozwSjwN2lNwaE33t_aMEGtL6Ug2LRrTVsk33YZ7Tm227NiqrvvWWitP755_pGOR6mWMSMWGKkLfdmRUBHqFKelD31L2xXaHZTqd71aQHnOge41H62NpwDexDspg2YdmIRxhGsOQEuppU1SlThPs1YPEBkqk9NQAZO0IWZGp2Jp-e8v8QSUjbtYJO_0JGVVqtFfZxz30TZKHYCDKV0GBWqeNZZjjUxAlNvRXjFDfHVL4KATpi9sRtgNGkUZ5makCWMeY0Fico4qNRlljGVg4Na4aKxbVdqdcytdpK5iyuSweM-eKAAEmAP2U6EB0GYPkMUWpRsHkMY5F7GseLysjaG19NqtL2C9WyomEyYhgC0vkBWebg3waMDVULUlhA6rbYIEN76lKCh1SOzOA7NYBV1QVaK87uK4iwCu-85qQtj0Insi8cGE2cbGChoAF3j2A8lu7WZ-th2CVL4CAVwL84DmiwPwH9lcIdw5AOwH2TG5I_cSP9wHQtGAg7sOD_gUPbDmkSPDhuR4IdGYZPDtHuPj7vJiDMVHX22o_Y6QDyQQPGDDI_n2NZ3ZUAQ4iDMeHwAgNMvQJhOn6PGBX0iJ-vjEP8H8E_YKfIgukdGGp4yEAn78gxTqtyjIMz0ATCB5ZoJAg6pgcLFbuwS0QbjuRqygQcBNVae4aZ9HzH9d-HmHVDlBYlrtCD3geaql2hA5l-rOX18iCK4GrVfggpyGq59_zjXs0tc6_T_eqq0VysmQt1Vf35X-DkAgLRWA_AS8jetrb3RlAuFXH4AAYl9WAPytv8Gm4mFLT9nshZo-plINVE3dqxnWG-UDTm_mJxwJgM6oQLqjIA-sPbVwTLEzZsbgQfeXnsDRmzU7KQ3UCyWBjJY2_r_ZrZopmYVxgCZaqnrfvhp4g7zMLPyRx0l_nRIghUTlHgjijkkHgRgEkFUGwH3RTjTmAn0AYHHimGgjnjVWrjgTngTgBUQWdFITAQaFQJgFGSPhcSpSWDiToQSSKgwPAKwIVT9COntH_xXxQLQOAPDiUEjlojoMgIgOwOFFgNTm0HTkQKzk4lzh7nlDND3lC0q0bmrhq3rkblkMhgvmPwPgBSPhPiZ0vnjyWEcCFByGgTlH_lwgVRATHk4knhnjngXmrlXhoA3gFW3l3lHmQPYHewIEsGwClCXlonNEgAtFoCwBfHcM4iol4IEOeixEsKQW_TazQQwSbRwXNH4IYONSYLHGkSoTkVFWoLUTxmqX0XWB4V8UWW_0EiyP6nmHAUgQyT4EeXSUKGrGyXRRF0EQWX8RXH6DJU6L8TERXC8BuEiH6IqNllgDAEBR_S6MGOrBNmyXKNBFaJ8yWIECWDWI2NmK2IGI1nWGyRBmKOVWaOI1_3tHIQyFyMaCILX1RXkKPE2QKAMRG2MX9nMUsQHGsTnjGTOR2VaUAAsIwACqVABuV0AAB9QAZ0VAAYf6uWuXGDRH6zqX5CyGMTeQ-RlSt0eLcXWFdxCR0WaPdUeXnH9WyBRJPnFErWrBaUAHBjQALO0ATAAQt0AA2swAMr1ITABVZUAFl5WE9oayDfGATxbxMY7oykv4_4wAUMVABO-MAF3Y9YU_JxMgp49YAVWJfIntAki9EQeIV40xfJQELJGYgY_UwNJFMqf2XU7yRY2YjzQlc2GAbU3Jc0mAZ4t4SwIle0yUPJTUApTAbZPZfZQAPjNAAuTwiEZzPnWBDNPhmFJOs3cF9LFMAAuEwAQPNAAFdUAHALQAb596TAApZUABD9SErNc0OKDWekwAeB0XZ1g0BnQBARQOwIA8h5kBilkyID8GzxiLAWlAA_N0ADAlQAFesgzZSMgEQaBWzhT2zRT6TABe7WZMACvAwAIATAAUvQhNsiFDexeGjLRN-PYEAHbgwANeUNgAV2BAA87XaXpMAD21QAYBimRUAr4CB1DksUR3AERjEIwFUrh1CzFE4TT2BWBKAuAvknNkE4B7tuhZJCin8Vxos5Q4gXwCV2M0g3V0t4oNZxU2YeF0UiA0Arh0t1hGMf8hJv0iC1UgVTEQUwUbj0IYVso_MvzUVv10UlCyt2VJJ8UVw9sCVXsYAvCKV6jqUVx3AkTaAKVBz9ACVXdRL3k2UIKiV2UXTpKILNSoACVKyMgayWA8gCVe9eUCVqAby7yQtHyESJUUEEVstkE_AMBYBdK0Z7y6EhIQLspXz2B3y1UaKVwdLRw9KHy7Lps-p3LbzrL9K7KXzPzGlTLv0Iymd7IuNog3UVwjiVwIwgMgEUgJMkQIkaKEcHi8Stlvz9NYpiiioVw8MfMVxx0jBYQhyYKEqijmjSQhSBAvyz0SMKdYoSRwYdcrhmtgA4UAcKY1IOR91KB3sagHw0ZBsABSYoDLNTdYU4k1b9Fgi6Rwe3LKHEpZUcQ0aK1VCSuYiwWAKYM1SVdCRfIGLJA44jPajaiKs-LKPzQa0MmYdaqYHeWASUXMI6hFDdIkt69AbLfNOFYSzMTJbJCql0caWSfqkNWWF64knIWSO5Hecja65neGz_J0lcY9KIbaq3LKCMDq3hPRVykjf6nXGSMdQAA2UezXwob1ZKMBBzBXczqTQUgn0Iw0ZEp4oTIOa0Z4Z4Ylg1IcB6YOQ_QGNwY6bzB2g297I1J7I0Z7J4YRaaw8KAZTrZIwYSMGsRZKb4saweEDI3dOKglogAb01MwABqOUV8dTVmcGTW1SQAWeUqbraLAeFVZ2BzQ-wgEd57IjaA1QbzbLaZqSMX8LALrCqnNgsRJ0BZ1JMF1bDl1rTo6N1hVt1Y02ND1MamreMk9VJ_aqrZZRNOpVJEgdMWArx8hqBVIdICV_Bc7Ab87mNHN1hxabpvpCtit7jysGLG4XzO76shYQYurEiOtkjutet4TwZipzt69gAxsVxWdGAvCfDQj2AogsAorIpC86oeaWpcdKpu7KdgAh7UER6usAB9M-hVYoXejPDbRORvYCwPYCkvCwPbXbfkslF-za9NLwuqDirwr-y7eqVgL-0_E7Hir-_irG8rKBrIL-vyzy2yhEXbSoSyjygKryhEEvVnamYAYwIwdgQABeNAzABD-UAHsDCMZGjkQAEb9AA3uU5y_uAALQLWRp8trAZ0jNL1GFdNtL_rRulzEEYfwfYDTPTLoYYdtw22EEmRqOTxAAmFHFcHh2UurNrLyDqhUdUrrOahZ0kflwTwz2-hnqgk0rNz5QJub34w719XmiH0MZrGRsNh0JuqWmRqipPWiFdVyHDEgGdCl1twvSTwhwuIECMz1R2Dz3zxrHV3WWoAhzzsiaibtyFBt3se-nVqSepmd2dqibzqZryfBvYA0iWkxuiGWqFC8cWuxskrSZrE1X8DqTJ1qa_txW-toB4FnraeyC_pH3vTH0TirE_W6vpA8B4dgCZoiDoSgBKhm3yyScKwxU0UPuPva062agvtEJoGvpwblim1mYCZrETHhgWyWwrGOYObW1qcWwUrYbmcyYTHunuZxj4yGiHCmbJuwSmiEkF3mlcYUquiuEmfiBacOfAJ2epkufudntkttLYaOYWxGbGZgGW0kDwGOa_sn1kE_UhfZkxYXskCXt8Inx3CxerBn2NUIoXyqbX1AvWFgdoEBfhLZn_peEZYZDZk33YG32wurE0bUYkwFoRjZlMffzihPx4rdTig0MQqlf5r2NQDwuqKqZgnYIBRAK4LAIgKiIVRwFiPgL0FAhAGXg8PaAAD8150AmIPBJARtJAFGjw4BpBToADdX4A4jUBl5h6sAWJMErhTXUj0jE5cCcBl5WsT7vXa4dG1EYnBcrgug4IYhWB0aI7psNnE4abomBdZo435xog2Bk3fcU3uoNmEDMx0UY3s2QgPAbVjNaAkbv40txryNJjpjEYm2Vw17zROWMY1JtIkbfDzR4hPEVIeh9BRyHH2NOMT1GXD0E2YAIxzQ22lhF21Jxqm7ZYyo8ATIM3vpu20Y-3wZFJlJzRhiIgiArgCYD2SNXcrhl4QiLRXdXDdBAYBAGlwYIoLR-4BTpjUBoqoB6NNqaBt5C8pYzIsAAP8Eu2P7CB0Z93wOVwJEN3fB4Yd2aw92r3qYj20BzQOj2BL34Pr2dqrg28CZXBSPSOAOP3zQv2-if0_3KPgJgOYpQOMOIZIP0OCPPMp0ypmcUNOWkw4OAOsOR21IAOb32Bl5NhayZwWIdqGOgODdYo4ocA0ZGEIPmJ-PBPwYRgbBaBt4QpYpf2RhMhHqEOcLKjUAI4QpthXA0h_wbVLORDS3M4QA1F-AWr-BW8gJyg_hSxzQfwyRdc2Z-Ak23dZpPP2B-ABbovu9qx-ByhyB-gZhBcIv-A0oC9fxoQsBvRAuToyRKBEhcw8gCgcszRZOfPiRQQQBguQAog0BUuVBwwNA4BYuLB4uYB5hwwhJviIv0V-B-JRAkBIuQAAA9OKCyQWnAJMVrmsCvOuFqlrob_gEbtGFTnACyGbtryHfuQeGITBBrkb6LnAWGTb4bxw9eTeOhVwwbrzw7nAaWFT07_gMwiwg7pMHAeGHAEyJ7wQXBIInD3wg7o7uKH7i1t7-7rmKbn7gby0BXJb0b8byb6bvXeY7_UA3z3AXQSAFIez6gfVjOBgeSeRxhMkLITzivU0PTmH2YUXBQBQT2IAA",mdxType:"Playground"},Object(t.b)(d,{data:[{x:"1750",y1:20},{x:"1800",y1:10},{x:"1850",y1:50},{x:"1900",y1:60},{x:"1999",y1:10},{x:"2050",y1:100}],smooth:!0,titleMap:{y1:"\u4e0b\u8f7d\u6570"},mdxType:"Line"})),Object(t.b)("h2",{id:"\u5806\u53e0\u7ebf\u56fe"},"\u5806\u53e0\u7ebf\u56fe"),Object(t.b)(a.c,{__position:2,__code:"<Line\n  data={[\n    { x: '1750', y1: 20, y2: 10 },\n    { x: '1800', y1: 10, y2: 5 },\n    { x: '1850', y1: 50, y2: 25 },\n    { x: '1900', y1: 60, y2: 30 },\n    { x: '1999', y1: 10, y2: 5 },\n    { x: '2050', y1: 100, y2: 50 },\n  ]}\n  titleMap={{\n    y1: '\u4e0b\u8f7d\u6570',\n    y2: '\u70b9\u8d5e\u6570',\n  }}\n/>",__scope:{props:this?this.props:e,Playground:a.c,Props:a.d,Line:d},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKYABk0G6I1ZXaD04AEchJCgMj6LI81yD8YUCIg9hA0lLDKNNRUwVQXQUWOU5cOcAhEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGdVIAFm09gADZtN09YwGAgAxb1oESVT-GcQ4EQdTAYKEfgliIahKDgAyERs6s7JoZwIFwy52AARhMvT5EE4SpgAQTmGT2AjKDWOgdAw3YeQORksRsujGR2BRKSYG4YA8Ikmq4HkLca2APKoAK4IADJuvGRJ5koZoOq68xuHGuUwGQyUBlQdp2AAfg2fKwwjEqrhGsNkurKQZCrN8zBhdVjhgMAwigKY1tK8qdoy5dqwTbiCBwezMhSK8CFamta1I50V2-9BolcOqAG1_u-uT2CwVS4oAdgAVjU3SWjiq4ACY1KWRI0auOKNKUcHvqg6G5TigAONSkax1H4sxlocfYeGir0iGIeJmGycR5HEhpxGsYZtGmYJh7Wchkn2jigBOSnuZpiy6exq4k3xlnRYsdnSclrXZdxhWGaF1W1Y19oMa56ndb1q5EeZwn2AAXW2tWYgIWA9VmOr5JF1medUwBoOUAX3jAAdTMK1YsRW5UATodAD1Y4PDYh-RHYhzcVykJ6Xrej7WqkO79rML8QBouiGOdJjnRYtjnoIOAsEA3QQIMMDCOOp7eJNTUOKIno4LgOAADlvXgVv2nIbu4FQAe4A746oNsNKBEyZJMIouVXBGGBzXCaBJ5VVAm_tKCtSBgA1CAYDGJe3XaAABdwCFYaQgfNOBRyn_eHArpZLGEC6IBmJYAHEYCRCWMRGAaQULsDSlgWwICwF0HQGhSgg4L7YQ8NFVirhhTb1tNPKw0FDIFBQZRHAHoZinz9GYVKfYuiQCwPYKAdhZKdHIOaYu68MHsR3odLAnc0C0AEGdTyDRD4EFcE2GAspPYWBJkiHeFgQbbBgC5KqqICh2yuKgUIRBAgCB3ttbhvC9ACIlN0Bov0YD2ArogwcUiu7-D7gPBaVwUTThSHIlRNUnFcU1DgewzhnDWIyDEeA7iDKdgKF4yw-DwkzncZsCAKRCBeM0dojI7iqBQCFHALxLiCggztu4wGoirjCKBuIog-T3HO1gDk1RM52AAB9vFmhwE9XugIqkvFdrMLxtj5GKOUbkmc6iQioESO4-Q7jHjsEAH9qgBo-UALKJgA7f3WLAcB6AvGgPWdYuA7ivACCnAAdS4BMZJWidHuLWfA6CQUXizVqa4qZkh2CAHozQAZCqAGc9QAi3brGmYADbzAAl0YALjkzoMMZNWOAAURB4CuF4Sg5JUB6JStQES5jLGYIIFcNO9l7CMDMWRdFwodllVkhGfsSC4AlW4GVWxVC-l2J7v3I8cdqqwDjtUmAcd4mJIIHHMJRkUjsq6TAN2f8VxXJQiuDJWSWVQomHHfZRyTl4DjkU1wziPIwBEa4VWmFZLkruOklFUwQYcO1EDJYz8CCEvNaIu2WU055BgBJLIEZNELi4dWKhaqsqz3nvBCMcBNXapKktINfQETavYFcSpgkLCOufmeMAYAtgEAjFdalckVwQGaBGP1C9A3BqBhyEq9KLBUJeBIrK4baJaqBiDNSBS40QxzdlAAhJWogJUugED6Ii5t30qHOhGAAaSUYw9gOoPDqFTTgAZcA820C7TgSAF1IyduuhuttE12g6Q_AOms3qOCyWHewbVJ8z5rXcQDVgOAa0IgjGqt8ascConcHAOyAgiA5VthYSS8xVJRBmCHUOcQEgeAlNsCMQgRilt_Ye417Bh0ilGFlKCJDQyocmfBiww6x2JDgCuoUZ4JR4EXVWzNZbQ7IdGCDDloqQadrtva2SMHGNLqbV7UWxVr2hx7X2pDZ8UMjF46zYWatiq21fZkVAH6hTfqo99f9sV2h2U6iBtWkB5zoHuIJ0d46cBAfI7KTN9HZjsYkXbDkcdWYDNUgMjTotWDxAZKpZzUAGTtFtjxg95aUXwr_JklIj7WD7v9Fxq1NrtUhbC99ROSh2AgwNYRtVVnPV-dk1MDJE76Ukyo8p1SbDMGOb_bEbYDQjHuatpjFc4mirpYnKOATUYRYxlYODEe9imW1XaqPbrC7OuMoHksRTiXigABJgD9lOhAOhDD5DFBGaiBk4NiqJ2-qynrm31vsC-m1Dl7BerZUTCZMQwAOXyArKdjkO2Ew2tttywgdVHsEFuzWflBQ6ofZnG9iwaq6pmu1b9qqYGevZeB5-hE9kXjgz20TYwUNAAu8ewHkwPGBQNsOwAZfAQCuGgXAc0WB-BIYHjjonIB2DJy4-rBHiRkeo9tuj_HWOlE47x7Yc0iRifjyPDj9zK2KdU8Z1_eFMQZiU7h21BH8yUeSDR1s-BfZbndlQDjiIMxifAAwxK9AmEhfU9rIAyI8HlM47YfweDgp8gq7J0YfnjIQDwfyDFOqiqMjHPQBMYHfnMkCDqjhwsvu7BLRBru5G0qBBwHtfZpRXmDcWG91VPw8w6qQufHiJa7Q0_QvmqpdowP9dq0YEbogJuBq1X4IKPhFv49K-t7NW39ua-hyqtFHrJlE9wGTz1_g5AIC0VgPwTvklYAewDy4ygiirj8AAMTJrAH5APbCPcTFxvBhOtsqesykDavbu1YzrDfNh8LaKK44EwGdUIF0dlofWC9q4JlKaqzdwIFfML2Bo1Vt9lIMb5ZLAxksI_oAY2qrGZjMFcMAHVtnqvoaPEM_GYMfgYsdBfudCRAShXDvPnIXJIGQjAJIKoNgK-tXLXMBPoAwHvFMNBKfDakPKQqfOXBihQs6Dwrgg0FQTADsp_NEgKksKUqIuUkVLQTgfQWan6EdPaCgVfpQdQRgXnEoAXLRMIXgbgQwcKEQTXNoHXGQY3JxC3MvPKGaK_Fln1hPEPINmPBPEYZDP_J_u_Bip_N_GLgAkAkQEsI4EKDkEQnKGgrhGatgrvJxAfMfKfOfEPDfDQPfGqk_C_DvBQewNDgQJYNgFKJfLROaJABaLQFgC-LEZxFREoaoc9FiP4ZQohtNrQvQhOswuaCoaIZ6uIWOEYoIqYtqgIbYiTEMm4usMoikhcggYJA0f1PMHggQvUnwBCnUoUNWE0vSurhoucmkiuP0DyvMakroiuF4DcJEKsX0SLLAGAJikhgsesdWInE0r0aCNMYlhcQIEsDcXcccQ8WsXbOsE0iDJ0ZapMZxkgfaHwhkM0Y0OwTfrSiYUeA8gUO4ptl4mnH4gEgOEEqfLsr8s8jMoABYRgAFUqADcroAAD6gAzoqAAw_4CkCuMGiOChYO4PyFkF4nCgikar7uCbEusBHtks4pMbGhCvOKmtkNSd_OKP2tWNMoAODGgAWdpomAAhboABtZgAZXr4mACqyoALLyxJ7Q1kd-MACSSSOxixApKJqJgAoYqACd8YALux6w3-kS3BEJ6waqJSrRS67Jf6Ig8Q0JPibSgIjSRxaxbp6aVKZUacLp3k5xxxsW4wwqTpLSfpMAkJbwlgIZWKzpmo7SmATyrybygAfGaABcnhEKLr_OsJmT_DMDyQFu4EmbqYABcJgAgeaAAK6oAOAWgA3z5imABSyoACH6-JDa5ocUdsYpgA8DqBzrBoDOgCAigdgQB5BnJrGXJkRv6jm7EWDTKAB-boAGBKgAK9bpkmkZAIg0BTlakzk6limAC92lKYAFeBgAQAmAApenibZEKFDi8AWbSciewIAO3BgAa8obAYrsCAB52nMmKYAHtqgAwDFMioCAIEA2EVYojuAIheIRhmpXA2G-IVzensCsCUBcBIrhZUJwCg637Vh5YrgFZyhxAvhxwyZpAxp0ztm6qqzKL0pEBoBXA1anFJSepULsE2qxktI4p4pAnoQkrZTJbwW0qIb0rmHdYsoj6corgvZxyQ4wAJF8qjGCorgUlRC0B8prn6BxwR7qXwoyo4XCospRm6U4UOlQBxx9kZCDksB5BxzL7KpxzUCAXAWZZgVkmCH6roQNZUJ-AYCwD2VowgWiJCTdCkpQXsAwU2p8Urh2WjgOWgUBWHZ9SRVAW-WOUBWQVwUTLuWIa5li72TybRAxorgfErgRgYaYIpC6ZIj5J8Uk5gmsmPIIUuaxSdFFQrgsaJYri7pGCwjrkEVFUdGTGkiakCDwU_pcY86xQkjgz25XATbABkoo60xqQcivqUDQ41APhow3YACkxQccxUqs3xXqiGkhF0jgQeWUzJlyo4houV1qWlJxFgsAUwPqrlFK5-QMjSbxnGD1V1WVv8WUyWy1WZMwl1Uwz8sAkouYL1dwd6nJEN6ADWraZKqlmYDSTSXVLo40ski1WaIsYNXJOQskoKz8vGv14uhNcBEZK4n6Slp1QoWUEYU1Kiri4VXGiN9uMkO6gABsqLmvg41qz8YCDmAR4fUmgpAQYRhoyJTxQmRS2CzwxLBqQ4Ccwch-hibgwC3mDtAz72RqT2Roz2Twyq01iIEizPVtVcajbizc0lY1jKIGSR7SWZLRBI21qZgADUcor4NmNsFtts4sgAs8o83e1hwWzsDmh9iYLPz2RO1pro3u2e3WarZxxfXNXhYZYiToDHp6ZnrBGXpBmZ13qaqPrFrSbvrU0jVKbl6qRx09UixaadSqSJCOYsBXj5DUCqQ6Rxz-DV3I210J5hbrAa03TfRtYdaglg7j0Dbj0ja2wgwzXlGzaVELZLakmrY3bgybap6iU7aS6MAJFJHZHsBRBYA5WRRt51SCwtSM6VRCWk7ADz00KL3zYAD6z9ZqxQV9tejA92teFg6F8QW2oOieFgL2z2apPKwD11taCRdUUlCRkD_29UrAkD3-X2clkDilWQdUmDtAkDCV0V_lCIz2lQ3lUVSVMVCIiekurMwAxgRg7AgAC8ZpmACH8oAPYGEYpNHIgAI36ABvcrLpA8AG2m2qTXFbWCLnmUnqMNGS7D1kTTAHrmIAI3Q-wNWTWbw_wwHt_cIAckMRXiABMKOK4MTqZQOUOXkHVCY-ZcOc1BLpoyXgHn_aJR7OwNZZ7iqkzZPipnPsmvNBvr_TWKTXVCI0tKTTlV-tENGrkOGJAM6Lrg47ozjn8QIO5i6jsM3i3u9srg3pXr3ekxk4HkKP7v499GDMUxDGHsHRkzXSLdU5jewBpEtNTdELTUcFcMdbdUHpU2rPav4KMlzmU5A3_bDbQDwMAHjXDZA1vqHDvhXFWPBrNfSB4NI7ACLREKIlACVEdi1vk21gyg4rzvfZNgvXNs1K_VoTQB_dQ6LOdsKqI9s_kzWImPDGdhdhWM8_E-vWU-dkZXc_EwmPdA82zMpkNEOOsxzUwlNEJCrvNCE0ZVdFcGs_EIM48zgVc6zJ84C2M_pTI6I082dos8s_I284o5ozuLIPBhi6LPvuS1xlIPvckXvmS61Efp6sxWfu0zfrJLYjg7FMtmJeFJedJS8Ai6SarPfuwI_nRRYJY2Y7porQjKrK4zAXFF_nJTGnFLYaRZqy8agCbYMe0zBDIRipgfIdgbgQUWajgMUSQXoKBCAFfHEe0AAH63zoBMQeCSCbaSAGNHhwDSCnSoFWvwAlGoBXzHMsQMJXBOvVG1EVxME4BXxTaP1YARs2O2JW53Lt2NZwQxCsCU1p2HZnMVx82ZP15ZtdA5tsD5sJ7NrdRnOkGZj0oZsq5XCuAeBBoea0Ak1ILVabW8b7GHGIx9srjH3mjisYxqTaQk3JHmjxAJIqQ9D6BbkBMyZyZfoivvo5swARjmhDtLC7tqSbUD0ixlR4AmQlvfTjtoxTvgyKTKTmibERBEBXBkw3tcYR5XBXxZEWgR7RG6CAwCDjLgwRQWhrzqmHGoC5VQCibXU0BPxt64xmRYAwdsJjvgOEDozXvIe1YHqntMxUZXtvusx3toDmhzHsCvvYfvt3VXAz5kyuD0f0cwcgfmhgcrFIZQfMfATwcxSIdEcQyoeEdUdxa4d9gXs1jitJhYcwckcLtqQwcfvsBXybBDkzgsR3VcdwfO6xRxQ4BowSIofMSSfSfgwjA2C0BPwhSxSQcjCZDA04enH9GoD5whTbCuBpD_hBrOeaENsNwgC2L8BjX8DT5ATlB_Cljmg_hkgO6qz8B5uR6zTBfsD8CK2peL7Vj8DlDkD9AzAq5Jf8BpSt6_jQhYDejRcnRkiUCJC5h5AFCNZmjqdhfEigggCxcgBRBoD5cqDhgaBwDpcWCZcwDzDhhCSIlJf0r8D8SiBIDJcgAAB6cUFkStOASY_XNYveo8Y1fXM3_Ac3aMenOAFka3A3uOa8G8MQDCXXc3qXOAsMx3s34Rd8D8oi0R03IX13OAeMen93_APhfhV3SYOA8MOAJkP3ggLCGRZHyRV3N3cUYPrrAPn3ksK3YPU3loxuO383i3y3q3jujnurWB4XuAugkAKQnn1ANr9cDA8k-jEiZIWQwXvepoFnaPswGuCgCgCcQAA",mdxType:"Playground"},Object(t.b)(d,{data:[{x:"1750",y1:20,y2:10},{x:"1800",y1:10,y2:5},{x:"1850",y1:50,y2:25},{x:"1900",y1:60,y2:30},{x:"1999",y1:10,y2:5},{x:"2050",y1:100,y2:50}],titleMap:{y1:"\u4e0b\u8f7d\u6570",y2:"\u70b9\u8d5e\u6570"},mdxType:"Line"})))}U&&U===Object(U)&&Object.isExtensible(U)&&Object.defineProperty(U,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/line/line.mdx"}}),U.isMDXComponent=!0}}]);