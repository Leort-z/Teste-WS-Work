(this["webpackJsonpws-work"]=this["webpackJsonpws-work"]||[]).push([[0],{13:function(e,t,r){e.exports={modalBackground:"styles_modalBackground__3E8UY",modal:"styles_modal__EmFcJ",buttonsContainer:"styles_buttonsContainer__2e6Zo",button:"styles_button__Rvbjj"}},26:function(e,t,r){e.exports={developedBy:"styles_developedBy__3cYWn"}},27:function(e,t,r){e.exports={container:"styles_container__2lZ6n",button:"styles_button__2nSFX"}},45:function(e,t,r){e.exports={header:"styles_header__17UFi"}},47:function(e,t,r){e.exports={mainTable:"styles_mainTable__21wVV"}},79:function(e,t,r){},80:function(e,t,r){"use strict";r.r(t);var n=r(3),c=r(22),a=r.n(c),o=r(12),s=r(17),i=r(45),l=r.n(i),d=r(1);function j(){return Object(d.jsxs)("header",{id:l.a.header,children:[Object(d.jsx)("h1",{children:"Teste WS-Work"}),Object(d.jsx)("h3",{children:"Informa\xe7\xf5es de ve\xedculos agrupadas por marca"})]})}var b=r(46),u=r.n(b);function h(e,t){var r=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"});return e.forEach((function(e){var n=e.valor_fipe;e.valor_fipe=t?n%1!==0?r.format(Number.parseInt(e.valor_fipe.toString().replace(".","")+"00")):r.format(Number.parseInt(e.valor_fipe.toString().replace(".","")+"000")):r.format(e.valor_fipe)})),e}function O(e){var t;return(t="marca_nome",function(e){return e.reduce((function(e,r){var n=r[t].toUpperCase();return e[n]=(e[n]||[]).concat(r),e}),{})})(e)}var x=r(47),p=r.n(x);function m(){var e=Object(s.useQuery)(["carsData"],(function(){return u.a.get("https://demo0566678.mockable.io/test-ws-front")}),{refetchOnWindowFocus:!1}).data,t=Object(n.useState)(),r=Object(o.a)(t,2),c=r[0],a=r[1];return Object(n.useEffect)((function(){a(function(e){var t,r=[],n=JSON.parse(localStorage.getItem("persistedCars"));if(n&&e)n=h(n.array,!1),t=h(e.data.cars,!0),r=O(r=n.concat(t));else if(n&&!e)r=O(n=h(n.array,!1));else{if(n||!e)return null;r=O(t=h(e.data.cars,!0))}return r}(e))}),[e]),Object(d.jsx)(d.Fragment,{children:c?Object(d.jsx)("main",{children:Object.entries(c).map((function(e,t){var r=Object(o.a)(e,2),n=r[0],c=r[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:n}),Object(d.jsxs)("table",{id:p.a.mainTable,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Modelo"}),Object(d.jsx)("th",{children:"Ano"}),Object(d.jsx)("th",{children:"Cor"}),Object(d.jsx)("th",{children:"Combust\xedvel"}),Object(d.jsx)("th",{children:"N\xba de portas"}),Object(d.jsx)("th",{children:"Valor FIPE"})]})}),Object(d.jsx)("tbody",{children:c.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.nome_modelo}),Object(d.jsx)("td",{children:e.ano}),Object(d.jsx)("td",{children:e.cor}),Object(d.jsx)("td",{children:e.combustivel}),Object(d.jsx)("td",{children:e.num_portas}),Object(d.jsx)("td",{children:e.valor_fipe})]},t)}))})]})]},t)}))}):Object(d.jsx)("h2",{children:"Sem dados no momento, adicione um ve\xedculo ou tente novamente mais tarde"})})}var f=r(23),v=r(25),_=r(13),y=r.n(_);function g(e){var t=e.toggleForm,r=Object(n.useState)(),c=Object(o.a)(r,2),a=c[0],s=c[1];function i(e){s(Object(v.a)(Object(v.a)({},a),{},Object(f.a)({},e.target.name,e.target.value)))}return Object(d.jsx)("div",{id:y.a.modalBackground,children:Object(d.jsxs)("div",{id:y.a.modal,children:[Object(d.jsx)("h2",{children:"Adicionar ve\xedculo"}),Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),function(){var e=JSON.parse(localStorage.getItem("persistedCars"));e?(e.array.push(a),localStorage.setItem("persistedCars",JSON.stringify(e))):localStorage.setItem("persistedCars",JSON.stringify({array:[a]}))}(),t()},children:Object(d.jsxs)("fieldset",{children:[Object(d.jsx)("legend",{children:"Preencha os campos abaixo para adicionar um ve\xedculo"}),Object(d.jsxs)("label",{children:["Modelo",Object(d.jsx)("input",{type:"text",name:"nome_modelo",placeholder:"Focus",required:!0,onChange:i})]}),Object(d.jsxs)("label",{children:["Marca",Object(d.jsx)("input",{type:"text",name:"marca_nome",placeholder:"Ford",required:!0,onChange:i})]}),Object(d.jsxs)("label",{children:["Ano",Object(d.jsx)("input",{type:"text",name:"ano",placeholder:"2021",required:!0,onChange:i})]}),Object(d.jsxs)("label",{children:["Cor",Object(d.jsx)("input",{type:"text",name:"cor",placeholder:"Preto",required:!0,onChange:i})]}),Object(d.jsxs)("label",{children:["Combust\xedvel",Object(d.jsx)("input",{type:"text",name:"combustivel",placeholder:"Gasolina",required:!0,onChange:i})]}),Object(d.jsxs)("label",{children:["N\xba de portas",Object(d.jsx)("input",{type:"text",name:"num_portas",placeholder:"4",required:!0,onChange:i})]}),Object(d.jsxs)("label",{children:["Valor FIPE",Object(d.jsx)("input",{type:"text",name:"valor_fipe",placeholder:"85000",required:!0,onChange:i})]}),Object(d.jsxs)("div",{id:y.a.buttonsContainer,children:[Object(d.jsx)("button",{type:"reset",onClick:t,className:y.a.button,children:"Cancelar"}),Object(d.jsx)("button",{type:"submit",className:y.a.button,children:"Adicionar"})]})]})})]})})}var C=r(28),S=r(26),w=r.n(S);function k(){return Object(d.jsx)("footer",{id:w.a.header,children:Object(d.jsxs)("pre",{id:w.a.developedBy,children:["Desenvolvido por Leonardo Teixeira!",Object(d.jsx)("a",{href:"https://github.com/leort-z",target:"_blank",rel:"noreferrer",children:Object(d.jsx)(C.a,{color:"white",size:"1rem"})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/leortz/",target:"_blank",rel:"noreferrer",children:Object(d.jsx)(C.b,{color:"white",size:"1rem"})})]})})}var F=r(27),N=r.n(F),I=new s.QueryClient;function B(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),r=t[0],c=t[1];function a(){c(!r)}return Object(d.jsxs)(s.QueryClientProvider,{client:I,children:[r&&Object(d.jsx)(g,{toggleForm:a}),Object(d.jsx)(j,{}),Object(d.jsxs)("div",{id:N.a.container,children:[Object(d.jsx)("button",{type:"button",className:N.a.button,onClick:a,children:"Adicionar ve\xedculo"}),Object(d.jsx)(m,{},r)]}),Object(d.jsx)(k,{})]})}r(79);a.a.render(Object(d.jsx)(B,{}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.75195b49.chunk.js.map