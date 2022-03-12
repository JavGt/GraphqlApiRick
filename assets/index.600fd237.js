import{j as g,u as E,L as u,O as C,c as S,a as k,n as y,F as L,b as A,d as w,g as b,r as l,e as N,A as I,B as j,R as O,f as p,h as R,H as $,I as B,i as F,k as M}from"./vendor.78ec015e.js";const q=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}};q();var D="/assets/58f37720a4fa116215a9240f.11783ee8.png";const e=g.exports.jsx,o=g.exports.jsxs,f=g.exports.Fragment,H=()=>{const t=E();return console.log(t.pathname),o(f,{children:[e("header",{className:"header",children:o("div",{className:"header__contenido container",children:[e("div",{className:"header__logo",children:e(u,{to:"/",children:e("img",{className:"header__img",src:D,alt:"imagen logo"})})}),e("nav",{className:"header__nav",children:o("ul",{children:[e("li",{children:e(u,{className:`${t.pathname==="/"?"active":""}`,to:"/",children:"Home"})}),e("li",{children:e(u,{to:"/personajes",children:"Personajes"})}),e("li",{children:e(u,{to:"temporadas",children:"Temporadas"})})]})})]})}),e(C,{})]})};const v=()=>o("div",{className:"spinner",children:[e("div",{className:"bounce1"}),e("div",{className:"bounce2"}),e("div",{className:"bounce3"})]});const P=S().shape({barra:k().required("Es obligatorio agregar un numero").min(1,"ID Invalido")}),T=y.div`
	background-color: #CD6155;
	color: white;
	font-family: 'Raleway', sans-serif;
	padding: 1rem 2rem;
	width: 40%;
	text-align: center;
    text-transform: uppercase;
    font-weight: 700;
	border-radius: 0.2rem;
	font-size: 2rem;
	margin-bottom: 1rem;
`,G=({children:t})=>e(T,{children:t}),V=({setIdEpisode:t})=>e("div",{className:"container",children:e(L,{initialValues:{barra:""},onSubmit:s=>t(s.barra),validationSchema:P,children:({errors:s,touched:r})=>e(A,{className:"Barra",children:o("div",{className:"Barra__campo",children:[e(w,{className:"Barra__input",type:"text",id:"barra",placeholder:"Ingrese el id",name:"barra",autoComplete:"off"}),s.barra&&r.barra?e(G,{children:s.barra}):""]})})})});var z="/assets/211818_search_icon.ecf0cd12.png",x="/assets/4835105_404_icon.b5a7b3c3.png";const K=b`
	query getEpisode($id: ID!) {
		episode(id: $id) {
			name
			id
			characters {
				name
				image
				id
			}
		}
	}
`,Q=b`
	query getCharacter($id: ID!) {
		character(id: $id) {
			id
			name
			status
			species
			image
			episode {
				name
			}
			created
			type
			location {
				name
				dimension
			}
		}
	}
`,U=t=>{const[s,r]=l.exports.useState({}),{data:i,loading:a,error:n}=N(K,{variables:{id:t},skip:!t,fetchPolicy:"cache-and-network"});return l.exports.useEffect(()=>{i!==void 0&&r(i.episode)},[i]),[s,a,n]},J=t=>{const[s,r]=l.exports.useState({}),{data:i,loading:a,error:n}=N(Q,{variables:{id:t},skip:!t,fetchPolicy:"cache-and-network"});return l.exports.useEffect(()=>{i!==void 0&&r(i.character)},[i]),[s,a,n]};const W=({setIdCharacter:t,setModal:s,character:r})=>e(f,{children:o("div",{onClick:()=>{s(a=>!a),t(r.id)},className:"character",children:[e("h2",{children:r.name}),e("img",{src:r.image,alt:`imagen de ${r.name}`})]})}),X=({setIdCharacter:t,setModal:s,episode:r})=>{const[i,a]=l.exports.useState([]);return l.exports.useEffect(()=>{Object.keys(r).length!==0&&a(r.characters)},[r]),o("div",{className:"episode container",children:[e("h2",{className:"episode__heading",children:r.name}),e("div",{className:"episode__contenido container",children:i.map(n=>e(W,{setIdCharacter:t,setModal:s,character:n},n.id))})]})};const Y=({idCharacter:t,setModal:s})=>{const[r,i,a]=J(t),[n,d]=l.exports.useState(!1),m=()=>{d(c=>!c)};return e("div",{onClick:c=>{c.target.className==="modal"&&s(h=>!h)},className:"modal",children:Object.keys(r).length===0||i?e(v,{}):a?e("img",{src:x}):o("div",{className:"modal__contenido container",children:[e("img",{src:r.image,alt:`imagen ${r.name}`}),o("div",{className:"modal__ventana",onTouchStart:c=>console.log(c.innerHeight),onTouchEnd:c=>console.log(c.innerHeight),children:[o("div",{className:`modal__texto ${n?"cerrar":" abrir"}`,children:[e("h2",{children:r.name}),o("ul",{children:[o("li",{children:["Especie: ",r.species]}),o("li",{children:["Estado: ",r.status]}),o("li",{children:["Ubicaci\xF3n: ",r.location.name]}),o("li",{children:["Dimension: ",r.location.dimension]}),o("li",{children:["Creado: ",r.created]}),e("button",{onClick:m,children:"Episodios"})]})]}),o("div",{className:`modal__episode ${n?"abrir":"cerrar"}`,children:[o("button",{onClick:m,children:[e(I,{})," Atras"]}),e("h2",{children:"Episodios"}),e("ul",{children:r.episode.map(c=>e("li",{children:c.name}))})]})]})]})})},_=y.div`
	display: flex;
	justify-content: center;
	padding-top: 7rem;

	img {
		height: 25rem;
	}
`,Z=()=>{const[t,s]=l.exports.useState(0),[r,i,a]=U(t),[n,d]=l.exports.useState(!1),[m,c]=l.exports.useState("");return l.exports.useEffect(()=>{const h=document.querySelector("body");n?h.classList.add("no-scroll"):h.classList.remove("no-scroll")},[n]),o(f,{children:[n&&e(Y,{idCharacter:m,setModal:d}),e(V,{setIdEpisode:s}),t===0?e(_,{className:"not_content",children:e("img",{src:z})}):i?e(v,{}):a?e(_,{className:"not_content",children:e("img",{src:x})}):e(X,{setIdCharacter:c,setModal:d,episode:r})]})},ee=()=>e(j,{children:o(O,{children:[e(p,{path:"/",element:e(H,{}),children:e(p,{index:!0,element:e(Z,{})})}),e(p,{path:"/Spinner",element:e(v,{})})]})});function re(){return e(ee,{})}const ae=new R({link:new $({uri:"https://rickandmortyapi.com/graphql"}),cache:new B});F.render(e(M,{client:ae,children:e(re,{})}),document.getElementById("root"));
