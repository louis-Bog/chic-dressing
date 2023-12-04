(()=>{var e,t={1831:(e,t,r)=>{"use strict";r.r(t);var o=r(9307),n=r(5736);const s=window.wp.blocks;var a=r(1984),l=r(7286);const c=window.wp.blockEditor,i=window.wp.components;var d=r(4184),m=r.n(d);function u(e,t,r){const o=new Set(t.map((e=>e[r])));return e.filter((e=>!o.has(e[r])))}const p=window.wp.htmlEntities,g={clear:(0,n.__)("Clear all selected items","woocommerce"),noItems:(0,n.__)("No items found.","woocommerce"),
/* Translators: %s search term */
noResults:(0,n.__)("No results for %s","woocommerce"),search:(0,n.__)("Search for items","woocommerce"),selected:e=>(0,n.sprintf)(/* translators: Number of items selected from list. */
(0,n._n)("%d item selected","%d items selected",e,"woocommerce"),e),updated:(0,n.__)("Search results updated.","woocommerce")},w=(e,t=e)=>{const r=e.reduce(((e,t)=>{const r=t.parent||0;return e[r]||(e[r]=[]),e[r].push(t),e}),{}),o=("id",t.reduce(((e,t)=>(e[String(t.id)]=t,e)),{}));const n=["0"],s=(e={})=>e.parent?[...s(o[e.parent]),e.name]:e.name?[e.name]:[],a=e=>e.map((e=>{const t=r[e.id];return n.push(""+e.id),{...e,breadcrumbs:s(o[e.parent]),children:t&&t.length?a(t):[]}})),l=a(r[0]||[]);return Object.entries(r).forEach((([e,t])=>{n.includes(e)||l.push(...a(t||[]))})),l},b=(e,t)=>{if(!t)return e;const r=new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`,"ig");return e.split(r).map(((e,t)=>r.test(e)?(0,o.createElement)("strong",{key:t},e):(0,o.createElement)(o.Fragment,{key:t},e)))},h=({label:e})=>(0,o.createElement)("span",{className:"woocommerce-search-list__item-count"},e),v=e=>{const{item:t,search:r}=e,n=t.breadcrumbs&&t.breadcrumbs.length;return(0,o.createElement)("span",{className:"woocommerce-search-list__item-label"},n?(0,o.createElement)("span",{className:"woocommerce-search-list__item-prefix"},1===(s=t.breadcrumbs).length?s.slice(0,1).toString():2===s.length?s.slice(0,1).toString()+" › "+s.slice(-1).toString():s.slice(0,1).toString()+" … "+s.slice(-1).toString()):null,(0,o.createElement)("span",{className:"woocommerce-search-list__item-name"},b((0,p.decodeEntities)(t.name),r)));var s},_=({countLabel:e,className:t,depth:r=0,controlId:n="",item:s,isSelected:a,isSingle:l,onSelect:c,search:d="",selected:g,useExpandedPanelId:w,..._})=>{var k,E;const[y,f]=w,R=null!=e&&void 0!==s.count&&null!==s.count,C=!(null===(k=s.breadcrumbs)||void 0===k||!k.length),S=!(null===(E=s.children)||void 0===E||!E.length),N=y===s.id,P=m()(["woocommerce-search-list__item",`depth-${r}`,t],{"has-breadcrumbs":C,"has-children":S,"has-count":R,"is-expanded":N,"is-radio-button":l}),I=_.name||`search-list-item-${n}`,T=`${I}-${s.id}`,O=(0,o.useCallback)((()=>{f(N?-1:Number(s.id))}),[N,s.id,f]);return S?(0,o.createElement)("div",{className:P,onClick:O,onKeyDown:e=>"Enter"===e.key||" "===e.key?O():null,role:"treeitem",tabIndex:0},l?(0,o.createElement)(o.Fragment,null,(0,o.createElement)("input",{type:"radio",id:T,name:I,value:s.value,onChange:c(s),onClick:e=>e.stopPropagation(),checked:a,className:"woocommerce-search-list__item-input",..._}),(0,o.createElement)(v,{item:s,search:d}),R?(0,o.createElement)(h,{label:e||s.count}):null):(0,o.createElement)(o.Fragment,null,(0,o.createElement)(i.CheckboxControl,{className:"woocommerce-search-list__item-input",checked:a,...!a&&s.children.some((e=>g.find((t=>t.id===e.id))))?{indeterminate:!0}:{},label:b((0,p.decodeEntities)(s.name),d),onChange:()=>{a?c(u(g,s.children,"id"))():c(function(e,t,r){const o=u(t,e,"id");return[...e,...o]}(g,s.children))()},onClick:e=>e.stopPropagation()}),R?(0,o.createElement)(h,{label:e||s.count}):null)):(0,o.createElement)("label",{htmlFor:T,className:P},l?(0,o.createElement)(o.Fragment,null,(0,o.createElement)("input",{..._,type:"radio",id:T,name:I,value:s.value,onChange:c(s),checked:a,className:"woocommerce-search-list__item-input"}),(0,o.createElement)(v,{item:s,search:d})):(0,o.createElement)(i.CheckboxControl,{..._,id:T,name:I,className:"woocommerce-search-list__item-input",value:(0,p.decodeEntities)(s.value),label:b((0,p.decodeEntities)(s.name),d),onChange:c(s),checked:a}),R?(0,o.createElement)(h,{label:e||s.count}):null)},k=_;var E=r(5430),y=r(4333),f=r(906);r(5932);const R=({id:e,label:t,popoverContents:r,remove:s,screenReaderLabel:l,className:c=""})=>{const[d,u]=(0,o.useState)(!1),g=(0,y.useInstanceId)(R);if(l=l||t,!t)return null;t=(0,p.decodeEntities)(t);const w=m()("woocommerce-tag",c,{"has-remove":!!s}),b=`woocommerce-tag__label-${g}`,h=(0,o.createElement)(o.Fragment,null,(0,o.createElement)("span",{className:"screen-reader-text"},l),(0,o.createElement)("span",{"aria-hidden":"true"},t));return(0,o.createElement)("span",{className:w},r?(0,o.createElement)(i.Button,{className:"woocommerce-tag__text",id:b,onClick:()=>u(!0)},h):(0,o.createElement)("span",{className:"woocommerce-tag__text",id:b},h),r&&d&&(0,o.createElement)(i.Popover,{onClose:()=>u(!1)},r),s&&(0,o.createElement)(i.Button,{className:"woocommerce-tag__remove",onClick:s(e),label:(0,n.sprintf)(
// Translators: %s label.
(0,n.__)("Remove %s","woocommerce"),t),"aria-describedby":b},(0,o.createElement)(a.Z,{icon:f.Z,size:20,className:"clear-icon"})))},C=R;r(8462);const S=e=>(0,o.createElement)(k,{...e}),N=e=>{const{list:t,selected:r,renderItem:n,depth:s=0,onSelect:a,instanceId:l,isSingle:c,search:i,useExpandedPanelId:d}=e,[m]=d;return t?(0,o.createElement)(o.Fragment,null,t.map((t=>{var u,p;const g=null!==(u=t.children)&&void 0!==u&&u.length&&!c?t.children.every((({id:e})=>r.find((t=>t.id===e)))):!!r.find((({id:e})=>e===t.id)),w=(null===(p=t.children)||void 0===p?void 0:p.length)&&m===t.id;return(0,o.createElement)(o.Fragment,{key:t.id},(0,o.createElement)("li",null,n({item:t,isSelected:g,onSelect:a,isSingle:c,selected:r,search:i,depth:s,useExpandedPanelId:d,controlId:l})),w?(0,o.createElement)(N,{...e,list:t.children,depth:s+1}):null)}))):null},P=({isLoading:e,isSingle:t,selected:r,messages:s,onChange:a,onRemove:l})=>{if(e||t||!r)return null;const c=r.length;return(0,o.createElement)("div",{className:"woocommerce-search-list__selected"},(0,o.createElement)("div",{className:"woocommerce-search-list__selected-header"},(0,o.createElement)("strong",null,s.selected(c)),c>0?(0,o.createElement)(i.Button,{isLink:!0,isDestructive:!0,onClick:()=>a([]),"aria-label":s.clear},(0,n.__)("Clear all","woocommerce")):null),c>0?(0,o.createElement)("ul",null,r.map(((e,t)=>(0,o.createElement)("li",{key:t},(0,o.createElement)(C,{label:e.name,id:e.id,remove:l}))))):null)},I=({filteredList:e,search:t,onSelect:r,instanceId:s,useExpandedPanelId:l,...c})=>{const{messages:i,renderItem:d,selected:m,isSingle:u}=c,p=d||S;return 0===e.length?(0,o.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},(0,o.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},(0,o.createElement)(a.Z,{icon:E.Z})),(0,o.createElement)("span",{className:"woocommerce-search-list__not-found-text"},t?(0,n.sprintf)(i.noResults,t):i.noItems)):(0,o.createElement)("ul",{className:"woocommerce-search-list__list"},(0,o.createElement)(N,{useExpandedPanelId:l,list:e,selected:m,renderItem:p,onSelect:r,instanceId:s,isSingle:u,search:t}))},T=e=>{const{className:t="",isCompact:r,isHierarchical:s,isLoading:a,isSingle:l,list:c,messages:d=g,onChange:u,onSearch:p,selected:b,type:h="text",debouncedSpeak:v}=e,[_,k]=(0,o.useState)(""),E=(0,o.useState)(-1),f=(0,y.useInstanceId)(T),R=(0,o.useMemo)((()=>({...g,...d})),[d]),C=(0,o.useMemo)((()=>((e,t,r)=>{if(!t)return r?w(e):e;const o=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),n=e.map((e=>!!o.test(e.name)&&e)).filter(Boolean);return r?w(n,e):n})(c,_,s)),[c,_,s]);(0,o.useEffect)((()=>{v&&v(R.updated)}),[v,R]),(0,o.useEffect)((()=>{"function"==typeof p&&p(_)}),[_,p]);const S=(0,o.useCallback)((e=>()=>{l&&u([]);const t=b.findIndex((({id:t})=>t===e));u([...b.slice(0,t),...b.slice(t+1)])}),[l,b,u]),N=(0,o.useCallback)((e=>()=>{Array.isArray(e)?u(e):-1===b.findIndex((({id:t})=>t===e.id))?u(l?[e]:[...b,e]):S(e.id)()}),[l,S,u,b]),O=(0,o.useCallback)((e=>{const[t]=b.filter((t=>!e.find((e=>t.id===e.id))));S(t.id)()}),[S,b]);return(0,o.createElement)("div",{className:m()("woocommerce-search-list",t,{"is-compact":r,"is-loading":a,"is-token":"token"===h})},"text"===h&&(0,o.createElement)(P,{...e,onRemove:S,messages:R}),(0,o.createElement)("div",{className:"woocommerce-search-list__search"},"text"===h?(0,o.createElement)(i.TextControl,{label:R.search,type:"search",value:_,onChange:e=>k(e)}):(0,o.createElement)(i.FormTokenField,{disabled:a,label:R.search,onChange:O,onInputChange:e=>k(e),suggestions:[],__experimentalValidateInput:()=>!1,value:a?[(0,n.__)("Loading…","woocommerce")]:b.map((e=>({...e,value:e.name}))),__experimentalShowHowTo:!1})),a?(0,o.createElement)("div",{className:"woocommerce-search-list__list"},(0,o.createElement)(i.Spinner,null)):(0,o.createElement)(I,{...e,search:_,filteredList:C,messages:R,onSelect:N,instanceId:f,useExpandedPanelId:E}))},O=((0,i.withSpokenMessages)(T),window.wp.url),L=window.wp.apiFetch;var x=r.n(L);const A=window.wc.wcSettings;var M;const j=(0,A.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),D=(j.pluginUrl,j.pluginUrl,j.buildPhase,null===(M=A.STORE_PAGES.shop)||void 0===M||M.permalink,A.STORE_PAGES.checkout.id,A.STORE_PAGES.checkout.permalink,A.STORE_PAGES.privacy.permalink,A.STORE_PAGES.privacy.title,A.STORE_PAGES.terms.permalink,A.STORE_PAGES.terms.title,A.STORE_PAGES.cart.id,A.STORE_PAGES.cart.permalink,A.STORE_PAGES.myaccount.permalink?A.STORE_PAGES.myaccount.permalink:(0,A.getSetting)("wpLoginUrl","/wp-login.php"),(0,A.getSetting)("localPickupEnabled",!1),(0,A.getSetting)("countries",{})),B=(0,A.getSetting)("countryData",{}),$=(Object.fromEntries(Object.keys(B).filter((e=>!0===B[e].allowBilling)).map((e=>[e,D[e]||""]))),Object.fromEntries(Object.keys(B).filter((e=>!0===B[e].allowBilling)).map((e=>[e,B[e].states||[]]))),Object.fromEntries(Object.keys(B).filter((e=>!0===B[e].allowShipping)).map((e=>[e,D[e]||""]))),Object.fromEntries(Object.keys(B).filter((e=>!0===B[e].allowShipping)).map((e=>[e,B[e].states||[]]))),Object.fromEntries(Object.keys(B).map((e=>[e,B[e].locale||[]]))),async e=>{if(!("json"in e))return{message:e.message,type:e.type||"general"};try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}}),Z=(0,y.createHigherOrderComponent)((e=>class extends o.Component{constructor(){super(...arguments),this.state={error:null,loading:!1,categories:[]},this.loadCategories=this.loadCategories.bind(this)}componentDidMount(){this.loadCategories()}loadCategories(){this.setState({loading:!0}),x()({path:(0,O.addQueryArgs)("wc/store/v1/products/categories",{per_page:0})}).then((e=>{this.setState({categories:e,loading:!1,error:null})})).catch((async e=>{const t=await $(e);this.setState({categories:[],loading:!1,error:t})}))}render(){const{error:t,loading:r,categories:n}=this.state;return(0,o.createElement)(e,{...this.props,error:t,isLoading:r,categories:n})}}),"withCategories"),F=window.wp.escapeHtml,H=({error:e})=>(0,o.createElement)("div",{className:"wc-block-error-message"},(({message:e,type:t})=>e?"general"===t?(0,o.createElement)("span",null,(0,n.__)("The following error was returned","woocommerce"),(0,o.createElement)("br",null),(0,o.createElement)("code",null,(0,F.escapeHTML)(e))):"api"===t?(0,o.createElement)("span",null,(0,n.__)("The following error was returned from the API","woocommerce"),(0,o.createElement)("br",null),(0,o.createElement)("code",null,(0,F.escapeHTML)(e))):e:(0,n.__)("An error has prevented the block from being updated.","woocommerce"))(e));r(3366);const G=({categories:e,error:t,isLoading:r,onChange:s,onOperatorChange:a,operator:l,selected:c,isCompact:d,isSingle:u,showReviewCount:p})=>{const g={clear:(0,n.__)("Clear all product categories","woocommerce"),list:(0,n.__)("Product Categories","woocommerce"),noItems:(0,n.__)("Your store doesn't have any product categories.","woocommerce"),search:(0,n.__)("Search for product categories","woocommerce"),selected:e=>(0,n.sprintf)(/* translators: %d is the count of selected categories. */
(0,n._n)("%d category selected","%d categories selected",e,"woocommerce"),e),updated:(0,n.__)("Category search results updated.","woocommerce")};return t?(0,o.createElement)(H,{error:t}):(0,o.createElement)(o.Fragment,null,(0,o.createElement)(T,{className:"woocommerce-product-categories",list:e,isLoading:r,selected:c.map((t=>e.find((e=>e.id===t)))).filter(Boolean),onChange:s,renderItem:e=>{const{item:t,search:r,depth:s=0}=e,a=t.breadcrumbs.length?`${t.breadcrumbs.join(", ")}, ${t.name}`:t.name,l=p?(0,n.sprintf)(/* translators: %1$s is the item name, %2$d is the count of reviews for the item. */
(0,n._n)("%1$s, has %2$d review","%1$s, has %2$d reviews",t.review_count,"woocommerce"),a,t.review_count):(0,n.sprintf)(/* translators: %1$s is the item name, %2$d is the count of products for the item. */
(0,n._n)("%1$s, has %2$d product","%1$s, has %2$d products",t.count,"woocommerce"),a,t.count),c=p?(0,n.sprintf)(/* translators: %d is the count of reviews. */
(0,n._n)("%d review","%d reviews",t.review_count,"woocommerce"),t.review_count):(0,n.sprintf)(/* translators: %d is the count of products. */
(0,n._n)("%d product","%d products",t.count,"woocommerce"),t.count);return(0,o.createElement)(_,{className:m()("woocommerce-product-categories__item","has-count",{"is-searching":r.length>0,"is-skip-level":0===s&&0!==t.parent}),...e,countLabel:c,"aria-label":l})},messages:g,isCompact:d,isHierarchical:!0,isSingle:u}),!!a&&(0,o.createElement)("div",{hidden:c.length<2},(0,o.createElement)(i.SelectControl,{className:"woocommerce-product-categories__operator",label:(0,n.__)("Display products matching","woocommerce"),help:(0,n.__)("Pick at least two categories to use this setting.","woocommerce"),value:l,onChange:a,options:[{label:(0,n.__)("Any selected categories","woocommerce"),value:"any"},{label:(0,n.__)("All selected categories","woocommerce"),value:"all"}]})))};G.defaultProps={operator:"any",isCompact:!1,isSingle:!1};const W=Z(G);var U=r(7329);r(2513);const J=({className:e,error:t,isLoading:r=!1,onRetry:s})=>(0,o.createElement)(i.Placeholder,{icon:(0,o.createElement)(a.Z,{icon:U.Z}),label:(0,n.__)("Sorry, an error occurred","woocommerce"),className:m()("wc-block-api-error",e)},(0,o.createElement)(H,{error:t}),s&&(0,o.createElement)(o.Fragment,null,r?(0,o.createElement)(i.Spinner,null):(0,o.createElement)(i.Button,{isSecondary:!0,onClick:s},(0,n.__)("Retry","woocommerce"))));r(7349);const z=({label:e,screenReaderLabel:t,wrapperElement:r,wrapperProps:n={}})=>{let s;const a=null!=e,l=null!=t;return!a&&l?(s=r||"span",n={...n,className:m()(n.className,"screen-reader-text")},(0,o.createElement)(s,{...n},t)):(s=r||o.Fragment,a&&l&&e!==t?(0,o.createElement)(s,{...n},(0,o.createElement)("span",{"aria-hidden":"true"},e),(0,o.createElement)("span",{className:"screen-reader-text"},t)):(0,o.createElement)(s,{...n},e))},V=({onClick:e,label:t=(0,n.__)("Load more","woocommerce"),screenReaderLabel:r=(0,n.__)("Load more","woocommerce")})=>(0,o.createElement)("div",{className:"wp-block-button wc-block-load-more wc-block-components-load-more"},(0,o.createElement)("button",{className:"wp-block-button__link",onClick:e},(0,o.createElement)(z,{label:t,screenReaderLabel:r})));r(9421);const q=(0,y.withInstanceId)((({className:e,instanceId:t,label:r="",onChange:n,options:s,screenReaderLabel:a,value:l=""})=>{const c=`wc-block-components-sort-select__select-${t}`;return(0,o.createElement)("div",{className:m()("wc-block-sort-select","wc-block-components-sort-select",e)},(0,o.createElement)(z,{label:r,screenReaderLabel:a,wrapperElement:"label",wrapperProps:{className:"wc-block-sort-select__label wc-block-components-sort-select__label",htmlFor:c}}),(0,o.createElement)("select",{id:c,className:"wc-block-sort-select__select wc-block-components-sort-select__select",onChange:n,value:l},s&&s.map((e=>(0,o.createElement)("option",{key:e.key,value:e.key},e.label)))))}));r(8543);const K=({onChange:e,readOnly:t,value:r})=>(0,o.createElement)(q,{className:"wc-block-review-sort-select wc-block-components-review-sort-select",label:(0,n.__)("Order by","woocommerce"),onChange:e,options:[{key:"most-recent",label:(0,n.__)("Most recent","woocommerce")},{key:"highest-rating",label:(0,n.__)("Highest rating","woocommerce")},{key:"lowest-rating",label:(0,n.__)("Lowest rating","woocommerce")}],readOnly:t,screenReaderLabel:(0,n.__)("Order reviews by","woocommerce"),value:r});var Q=r(4942);function Y(e){let t,r,o,n=[];for(let s=0;s<e.length;s++)t=e.substring(s),r=t.match(/^&[a-z0-9#]+;/),r?(o=r[0],n.push(o),s+=o.length-1):n.push(e[s]);return n}const X=(e,t,r="...")=>{const o=function(e,t){const r=(t=t||{}).limit||100,o=void 0===t.preserveTags||t.preserveTags,n=void 0!==t.wordBreak&&t.wordBreak,s=t.suffix||"...",a=t.moreLink||"",l=t.moreText||"»",c=t.preserveWhiteSpace||!1,i=e.replace(/</g,"\n<").replace(/>/g,">\n").replace(/\n\n/g,"\n").replace(/^\n/g,"").replace(/\n$/g,"").split("\n");let d,m,u,p,g,w,b=0,h=[],v=!1;for(let e=0;e<i.length;e++){if(d=i[e],p=c?d:d.replace(/[ ]+/g," "),!d.length)continue;const t=Y(p);if("<"!==d[0])if(b>=r)d="";else if(b+t.length>=r){if(m=r-b," "===t[m-1])for(;m&&(m-=1," "===t[m-1]););else u=t.slice(m).indexOf(" "),n||(-1!==u?m+=u:m=d.length);d=t.slice(0,m).join("")+s,a&&(d+='<a href="'+a+'" style="display:inline">'+l+"</a>"),b=r,v=!0}else b+=t.length;else if(o){if(b>=r)if(g=d.match(/[a-zA-Z]+/),w=g?g[0]:"",w)if("</"!==d.substring(0,2))h.push(w),d="";else{for(;h[h.length-1]!==w&&h.length;)h.pop();h.length&&(d=""),h.pop()}else d=""}else d="";i[e]=d}return{html:i.join("\n").replace(/\n/g,""),more:v}}(e,{suffix:r,limit:t});return o.html},ee=(e,t,r)=>(t<=r?e.start=e.middle+1:e.end=e.middle-1,e),te=(e,t,r,o)=>{const n=((e,t,r)=>{let o={start:0,middle:0,end:e.length};for(;o.start<=o.end;)o.middle=Math.floor((o.start+o.end)/2),t.innerHTML=X(e,o.middle),o=ee(o,t.clientHeight,r);return o.middle})(e,t,r);return X(e,n-o.length,o)},re={className:"read-more-content",ellipsis:"&hellip;",lessText:(0,n.__)("Read less","woocommerce"),maxLines:3,moreText:(0,n.__)("Read more","woocommerce")};class oe extends o.Component{constructor(e){super(e),(0,Q.Z)(this,"reviewSummary",void 0),(0,Q.Z)(this,"reviewContent",void 0),this.state={isExpanded:!1,clampEnabled:null,content:e.children,summary:"."},this.reviewContent=(0,o.createRef)(),this.reviewSummary=(0,o.createRef)(),this.getButton=this.getButton.bind(this),this.onClick=this.onClick.bind(this)}componentDidMount(){this.setSummary()}componentDidUpdate(e){e.maxLines===this.props.maxLines&&e.children===this.props.children||this.setState({clampEnabled:null,summary:"."},this.setSummary)}setSummary(){if(this.props.children){const{maxLines:e,ellipsis:t}=this.props;if(!this.reviewSummary.current||!this.reviewContent.current)return;const r=(this.reviewSummary.current.clientHeight+1)*e+1,o=this.reviewContent.current.clientHeight+1>r;this.setState({clampEnabled:o}),o&&this.setState({summary:te(this.reviewContent.current.innerHTML,this.reviewSummary.current,r,t)})}}getButton(){const{isExpanded:e}=this.state,{className:t,lessText:r,moreText:n}=this.props,s=e?r:n;if(s)return(0,o.createElement)("a",{href:"#more",className:t+"__read_more",onClick:this.onClick,"aria-expanded":!e,role:"button"},s)}onClick(e){e.preventDefault();const{isExpanded:t}=this.state;this.setState({isExpanded:!t})}render(){const{className:e}=this.props,{content:t,summary:r,clampEnabled:n,isExpanded:s}=this.state;return t?!1===n?(0,o.createElement)("div",{className:e},(0,o.createElement)("div",{ref:this.reviewContent},t)):(0,o.createElement)("div",{className:e},(!s||null===n)&&(0,o.createElement)("div",{ref:this.reviewSummary,"aria-hidden":s,dangerouslySetInnerHTML:{__html:r}}),(s||null===n)&&(0,o.createElement)("div",{ref:this.reviewContent,"aria-hidden":!s},t),this.getButton()):null}}(0,Q.Z)(oe,"defaultProps",re);const ne=oe;r(8204);const se=({attributes:e,review:t={}})=>{const{imageType:r,showReviewDate:s,showReviewerName:a,showReviewImage:l,showReviewRating:c,showReviewContent:i,showProductName:d}=e,{rating:u}=t,p=!(Object.keys(t).length>0),g=Number.isFinite(u)&&c;return(0,o.createElement)("li",{className:m()("wc-block-review-list-item__item","wc-block-components-review-list-item__item",{"is-loading":p,"wc-block-components-review-list-item__item--has-image":l}),"aria-hidden":p},(d||s||a||l||g)&&(0,o.createElement)("div",{className:"wc-block-review-list-item__info wc-block-components-review-list-item__info"},l&&function(e,t,r){var s,a;return r||!e?(0,o.createElement)("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image"}):(0,o.createElement)("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image"},"product"===t?(0,o.createElement)("img",{"aria-hidden":"true",alt:(null===(s=e.product_image)||void 0===s?void 0:s.alt)||"",src:(null===(a=e.product_image)||void 0===a?void 0:a.thumbnail)||""}):(0,o.createElement)("img",{"aria-hidden":"true",alt:"",src:e.reviewer_avatar_urls[96]||""}),e.verified&&(0,o.createElement)("div",{className:"wc-block-review-list-item__verified wc-block-components-review-list-item__verified",title:(0,n.__)("Verified buyer","woocommerce")},(0,n.__)("Verified buyer","woocommerce")))}(t,r,p),(d||a||g||s)&&(0,o.createElement)("div",{className:"wc-block-review-list-item__meta wc-block-components-review-list-item__meta"},g&&function(e){const{rating:t}=e,r={width:t/5*100+"%"},s=(0,n.sprintf)(/* translators: %f is referring to the average rating value */
(0,n.__)("Rated %f out of 5","woocommerce"),t),a={__html:(0,n.sprintf)(/* translators: %s is referring to the average rating value */
(0,n.__)("Rated %s out of 5","woocommerce"),(0,n.sprintf)('<strong class="rating">%f</strong>',t))};return(0,o.createElement)("div",{className:"wc-block-review-list-item__rating wc-block-components-review-list-item__rating"},(0,o.createElement)("div",{className:"wc-block-review-list-item__rating__stars wc-block-components-review-list-item__rating__stars",role:"img","aria-label":s},(0,o.createElement)("span",{style:r,dangerouslySetInnerHTML:a})))}(t),d&&function(e){return(0,o.createElement)("div",{className:"wc-block-review-list-item__product wc-block-components-review-list-item__product"},(0,o.createElement)("a",{href:e.product_permalink,dangerouslySetInnerHTML:{__html:e.product_name}}))}(t),a&&function(e){const{reviewer:t=""}=e;return(0,o.createElement)("div",{className:"wc-block-review-list-item__author wc-block-components-review-list-item__author"},t)}(t),s&&function(e){const{date_created:t,formatted_date_created:r}=e;return(0,o.createElement)("time",{className:"wc-block-review-list-item__published-date wc-block-components-review-list-item__published-date",dateTime:t},r)}(t))),i&&function(e){return(0,o.createElement)(ne,{maxLines:10,moreText:(0,n.__)("Read full review","woocommerce"),lessText:(0,n.__)("Hide full review","woocommerce"),className:"wc-block-review-list-item__text wc-block-components-review-list-item__text"},(0,o.createElement)("div",{dangerouslySetInnerHTML:{__html:e.review||""}}))}(t))};r(4093);const ae=({attributes:e,reviews:t})=>{const r=(0,A.getSetting)("showAvatars",!0),n=(0,A.getSetting)("reviewRatingsEnabled",!0),s=(r||"product"===e.imageType)&&e.showReviewImage,a=n&&e.showReviewRating,l={...e,showReviewImage:s,showReviewRating:a};return(0,o.createElement)("ul",{className:"wc-block-review-list wc-block-components-review-list"},0===t.length?(0,o.createElement)(se,{attributes:l}):t.map(((e,t)=>(0,o.createElement)(se,{key:e.id||t,attributes:l,review:e}))))};var le=r(9127),ce=r.n(le);const ie=e=>{const{className:t,categoryIds:r,productId:o,showReviewDate:n,showReviewerName:s,showReviewContent:a,showProductName:l,showReviewImage:c,showReviewRating:i}=e;let d="wc-block-all-reviews";return o&&(d="wc-block-reviews-by-product"),Array.isArray(r)&&(d="wc-block-reviews-by-category"),m()(d,t,{"has-image":c,"has-name":s,"has-date":n,"has-rating":i,"has-content":a,"has-product-name":l})},de=e=>{const{categoryIds:t,imageType:r,orderby:o,productId:n,reviewsOnPageLoad:s,reviewsOnLoadMore:a,showLoadMore:l,showOrderby:c}=e,i={"data-image-type":r,"data-orderby":o,"data-reviews-on-page-load":s,"data-reviews-on-load-more":a,"data-show-load-more":l,"data-show-orderby":c};return n&&(i["data-product-id"]=n),Array.isArray(t)&&(i["data-category-ids"]=t.join(",")),i};class me extends o.Component{render(){const{attributes:e,error:t,isLoading:r,noReviewsPlaceholder:s,reviews:a,totalReviews:l}=this.props;if(t)return(0,o.createElement)(J,{className:"wc-block-featured-product-error",error:t,isLoading:r});if(0===a.length&&!r)return(0,o.createElement)(s,{attributes:e});const c=(0,A.getSetting)("reviewRatingsEnabled",!0);return(0,o.createElement)(i.Disabled,null,e.showOrderby&&c&&(0,o.createElement)(K,{readOnly:!0,value:e.orderby,onChange:()=>null}),(0,o.createElement)(ae,{attributes:e,reviews:a}),e.showLoadMore&&l>a.length&&(0,o.createElement)(V,{screenReaderLabel:(0,n.__)("Load more reviews","woocommerce")}))}}const ue=(e=>{class t extends o.Component{constructor(...e){super(...e),(0,Q.Z)(this,"isPreview",!!this.props.attributes.previewReviews),(0,Q.Z)(this,"delayedAppendReviews",this.props.delayFunction(this.appendReviews)),(0,Q.Z)(this,"isMounted",!1),(0,Q.Z)(this,"state",{error:null,loading:!0,reviews:this.isPreview?this.props.attributes.previewReviews:[],totalReviews:this.isPreview?this.props.attributes.previewReviews.length:0}),(0,Q.Z)(this,"setError",(async e=>{if(!this.isMounted)return;const{onReviewsLoadError:t}=this.props,r=await $(e);this.setState({reviews:[],loading:!1,error:r}),t(r)}))}componentDidMount(){this.isMounted=!0,this.replaceReviews()}componentDidUpdate(e){e.reviewsToDisplay<this.props.reviewsToDisplay?this.delayedAppendReviews():this.shouldReplaceReviews(e,this.props)&&this.replaceReviews()}shouldReplaceReviews(e,t){return e.orderby!==t.orderby||e.order!==t.order||e.productId!==t.productId||!ce()(e.categoryIds,t.categoryIds)}componentWillUnmount(){this.isMounted=!1,this.delayedAppendReviews.cancel&&this.delayedAppendReviews.cancel()}getArgs(e){const{categoryIds:t,order:r,orderby:o,productId:n,reviewsToDisplay:s}=this.props,a={order:r,orderby:o,per_page:s-e,offset:e};if(t){const e=Array.isArray(t)?t:JSON.parse(t);a.category_id=Array.isArray(e)?e.join(","):e}return n&&(a.product_id=n),a}replaceReviews(){if(this.isPreview)return;const{onReviewsReplaced:e}=this.props;this.updateListOfReviews().then(e)}appendReviews(){if(this.isPreview)return;const{onReviewsAppended:e,reviewsToDisplay:t}=this.props,{reviews:r}=this.state;t<=r.length||this.updateListOfReviews(r).then(e)}updateListOfReviews(e=[]){const{reviewsToDisplay:t}=this.props,{totalReviews:r}=this.state,o=Math.min(r,t)-e.length;return this.setState({loading:!0,reviews:e.concat(Array(o).fill({}))}),(n=this.getArgs(e.length),x()({path:"/wc/store/v1/products/reviews?"+Object.entries(n).map((e=>e.join("="))).join("&"),parse:!1}).then((e=>e.json().then((t=>({reviews:t,totalReviews:parseInt(e.headers.get("x-wp-total"),10)})))))).then((({reviews:t,totalReviews:r})=>(this.isMounted&&this.setState({reviews:e.filter((e=>Object.keys(e).length)).concat(t),totalReviews:r,loading:!1,error:null}),{newReviews:t}))).catch(this.setError);var n}render(){const{reviewsToDisplay:t}=this.props,{error:r,loading:n,reviews:s,totalReviews:a}=this.state;return(0,o.createElement)(e,{...this.props,error:r,isLoading:n,reviews:s.slice(0,t),totalReviews:a})}}(0,Q.Z)(t,"defaultProps",{delayFunction:e=>e,onReviewsAppended:()=>{},onReviewsLoadError:()=>{},onReviewsReplaced:()=>{}});const{displayName:r=e.name||"Component"}=e;return t.displayName=`WithReviews( ${r} )`,t})(me),pe=({attributes:e,icon:t,name:r,noReviewsPlaceholder:s})=>{const{categoryIds:a,productId:l,reviewsOnPageLoad:d,showProductName:m,showReviewDate:u,showReviewerName:p,showReviewContent:g,showReviewImage:w,showReviewRating:b}=e,{order:h,orderby:v}=(e=>{if((0,A.getSetting)("reviewRatingsEnabled",!0)){if("lowest-rating"===e)return{order:"asc",orderby:"rating"};if("highest-rating"===e)return{order:"desc",orderby:"rating"}}return{order:"desc",orderby:"date_gmt"}})(e.orderby),_=!(g||b||u||p||w||m),k=(0,c.useBlockProps)({className:ie(e)});return _?(0,o.createElement)(i.Placeholder,{icon:t,label:r},(0,n.__)("The content for this block is hidden due to block settings.","woocommerce")):(0,o.createElement)("div",{...k},(0,o.createElement)(ue,{attributes:e,categoryIds:a,delayFunction:e=>((e,t,r)=>{let o,n=null;const s=(...t)=>{n=t,o&&clearTimeout(o),o=setTimeout((()=>{o=null,n&&e(...n)}),400)};return s.flush=()=>{o&&n&&(e(...n),clearTimeout(o),o=null)},s})(e),noReviewsPlaceholder:s,orderby:v,order:h,productId:l,reviewsToDisplay:d}))},ge=()=>(0,o.createElement)(i.Placeholder,{className:"wc-block-reviews-by-category",icon:(0,o.createElement)(a.Z,{icon:l.Z,className:"block-editor-block-icon"}),label:(0,n.__)("Reviews by Category","woocommerce")},(0,n.__)("This block lists reviews for products from selected categories. The selected categories do not have any reviews yet, but they will show up here when they do.","woocommerce")),we=(0,i.withSpokenMessages)((({attributes:e,debouncedSpeak:t,setAttributes:r})=>{const{editMode:s,categoryIds:d}=e;if(!d||s)return(0,o.createElement)(i.Placeholder,{icon:(0,o.createElement)(a.Z,{icon:l.Z,className:"block-editor-block-icon"}),label:(0,n.__)("Reviews by Category","woocommerce"),className:"wc-block-reviews-by-category"},(0,n.__)("Show product reviews from specific categories.","woocommerce"),(0,o.createElement)("div",{className:"wc-block-reviews__selection"},(0,o.createElement)(W,{selected:e.categoryIds,onChange:(e=[])=>{const t=e.map((({id:e})=>e));r({categoryIds:t})},showReviewCount:!0}),(0,o.createElement)(i.Button,{isPrimary:!0,onClick:()=>{r({editMode:!1}),t((0,n.__)("Now displaying a preview of the reviews for the products in the selected categories.","woocommerce"))}},(0,n.__)("Done","woocommerce"))));const m=(0,n.__)("Edit selected categories","woocommerce");return(0,o.createElement)(o.Fragment,null,((e,t,r)=>(0,o.createElement)(c.BlockControls,null,(0,o.createElement)(i.ToolbarGroup,{controls:[{icon:"edit",title:r,onClick:()=>t({editMode:!e}),isActive:e}]})))(s,r,m),(0,o.createElement)(c.InspectorControls,{key:"inspector"},(0,o.createElement)(i.PanelBody,{title:(0,n.__)("Category","woocommerce"),initialOpen:!1},(0,o.createElement)(W,{selected:e.categoryIds,onChange:(e=[])=>{const t=e.map((({id:e})=>e));r({categoryIds:t})},isCompact:!0,showReviewCount:!0})),(0,o.createElement)(i.PanelBody,{title:(0,n.__)("Content","woocommerce")},(0,o.createElement)(i.ToggleControl,{label:(0,n.__)("Product name","woocommerce"),checked:e.showProductName,onChange:()=>r({showProductName:!e.showProductName})}),((e,t)=>{const r=(0,A.getSetting)("showAvatars",!0),s=(0,A.getSetting)("reviewRatingsEnabled",!0);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(i.ToggleControl,{label:(0,n.__)("Product rating","woocommerce"),checked:e.showReviewRating,onChange:()=>t({showReviewRating:!e.showReviewRating})}),e.showReviewRating&&!s&&(0,o.createElement)(i.Notice,{className:"wc-block-base-control-notice",isDismissible:!1},(0,o.createInterpolateElement)((0,n.__)("Product rating is disabled in your <a>store settings</a>.","woocommerce"),{a:(0,o.createElement)("a",{href:(0,A.getAdminLink)("admin.php?page=wc-settings&tab=products"),target:"_blank",rel:"noopener noreferrer"})})),(0,o.createElement)(i.ToggleControl,{label:(0,n.__)("Reviewer name","woocommerce"),checked:e.showReviewerName,onChange:()=>t({showReviewerName:!e.showReviewerName})}),(0,o.createElement)(i.ToggleControl,{label:(0,n.__)("Image","woocommerce"),checked:e.showReviewImage,onChange:()=>t({showReviewImage:!e.showReviewImage})}),(0,o.createElement)(i.ToggleControl,{label:(0,n.__)("Review date","woocommerce"),checked:e.showReviewDate,onChange:()=>t({showReviewDate:!e.showReviewDate})}),(0,o.createElement)(i.ToggleControl,{label:(0,n.__)("Review content","woocommerce"),checked:e.showReviewContent,onChange:()=>t({showReviewContent:!e.showReviewContent})}),e.showReviewImage&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(i.__experimentalToggleGroupControl,{label:(0,n.__)("Review image","woocommerce"),value:e.imageType,onChange:e=>t({imageType:e})},(0,o.createElement)(i.__experimentalToggleGroupControlOption,{value:"reviewer",label:(0,n.__)("Reviewer photo","woocommerce")}),(0,o.createElement)(i.__experimentalToggleGroupControlOption,{value:"product",label:(0,n.__)("Product","woocommerce")})),"reviewer"===e.imageType&&!r&&(0,o.createElement)(i.Notice,{className:"wc-block-base-control-notice",isDismissible:!1},(0,o.createInterpolateElement)((0,n.__)("Reviewer photo is disabled in your <a>site settings</a>.","woocommerce"),{a:(0,o.createElement)("a",{href:(0,A.getAdminLink)("options-discussion.php"),target:"_blank",rel:"noopener noreferrer"})}))))})(e,r)),(0,o.createElement)(i.PanelBody,{title:(0,n.__)("List Settings","woocommerce")},((e,t)=>(0,o.createElement)(o.Fragment,null,(0,o.createElement)(i.ToggleControl,{label:(0,n.__)("Order by","woocommerce"),checked:e.showOrderby,onChange:()=>t({showOrderby:!e.showOrderby})}),(0,o.createElement)(i.SelectControl,{label:(0,n.__)("Order Product Reviews by","woocommerce"),value:e.orderby,options:[{label:"Most recent",value:"most-recent"},{label:"Highest Rating",value:"highest-rating"},{label:"Lowest Rating",value:"lowest-rating"}],onChange:e=>t({orderby:e})}),(0,o.createElement)(i.RangeControl,{label:(0,n.__)("Starting Number of Reviews","woocommerce"),value:e.reviewsOnPageLoad,onChange:e=>t({reviewsOnPageLoad:e}),max:20,min:1}),(0,o.createElement)(i.ToggleControl,{label:(0,n.__)("Load more","woocommerce"),checked:e.showLoadMore,onChange:()=>t({showLoadMore:!e.showLoadMore})}),e.showLoadMore&&(0,o.createElement)(i.RangeControl,{label:(0,n.__)("Load More Reviews","woocommerce"),value:e.reviewsOnLoadMore,onChange:e=>t({reviewsOnLoadMore:e}),max:20,min:1})))(e,r))),(0,o.createElement)(pe,{attributes:e,icon:(0,o.createElement)(a.Z,{icon:l.Z,className:"block-editor-block-icon"}),name:(0,n.__)("Reviews by Category","woocommerce"),noReviewsPlaceholder:ge}))}));r(6990);const be={attributes:{editMode:!1,imageType:"reviewer",orderby:"most-recent",reviewsOnLoadMore:10,reviewsOnPageLoad:10,showLoadMore:!0,showOrderby:!0,showReviewDate:!0,showReviewerName:!0,showReviewImage:!0,showReviewRating:!0,showReviewContent:!0,previewReviews:[{id:1,date_created:"2019-07-15T17:05:04",formatted_date_created:(0,n.__)("July 15, 2019","woocommerce"),date_created_gmt:"2019-07-15T15:05:04",product_id:0,product_name:(0,n.__)("WordPress Pennant","woocommerce"),product_permalink:"#",
/* translators: An example person name used for the block previews. */
reviewer:(0,n.__)("Alice","woocommerce"),review:`<p>${(0,n.__)("I bought this product last week and I'm very happy with it.","woocommerce")}</p>\n`,reviewer_avatar_urls:{48:j.defaultAvatar,96:j.defaultAvatar},rating:5,verified:!0},{id:2,date_created:"2019-07-12T12:39:39",formatted_date_created:(0,n.__)("July 12, 2019","woocommerce"),date_created_gmt:"2019-07-12T10:39:39",product_id:0,product_name:(0,n.__)("WordPress Pennant","woocommerce"),product_permalink:"#",
/* translators: An example person name used for the block previews. */
reviewer:(0,n.__)("Bob","woocommerce"),review:`<p>${(0,n.__)("This product is awesome, I love it!","woocommerce")}</p>\n`,reviewer_avatar_urls:{48:j.defaultAvatar,96:j.defaultAvatar},rating:null,verified:!1}]}};(0,s.registerBlockType)("woocommerce/reviews-by-category",{apiVersion:2,title:(0,n.__)("Reviews by Category","woocommerce"),icon:{src:(0,o.createElement)(a.Z,{icon:l.Z,className:"wc-block-editor-components-block-icon"})},category:"woocommerce",keywords:[(0,n.__)("WooCommerce","woocommerce")],description:(0,n.__)("Show product reviews from specific categories.","woocommerce"),supports:{html:!1,color:{background:!1},typography:{fontSize:!0}},example:{...be,attributes:{...be.attributes,categoryIds:[1],showProductName:!0}},attributes:{editMode:{type:"boolean",default:!0},imageType:{type:"string",default:"reviewer"},orderby:{type:"string",default:"most-recent"},reviewsOnLoadMore:{type:"number",default:10},reviewsOnPageLoad:{type:"number",default:10},showLoadMore:{type:"boolean",default:!0},showOrderby:{type:"boolean",default:!0},showReviewDate:{type:"boolean",default:!0},showReviewerName:{type:"boolean",default:!0},showReviewImage:{type:"boolean",default:!0},showReviewRating:{type:"boolean",default:!0},showReviewContent:{type:"boolean",default:!0},previewReviews:{type:"array",default:null},categoryIds:{type:"array",default:[]},showProductName:{type:"boolean",default:!0}},edit:e=>{const t=(0,c.useBlockProps)();return(0,o.createElement)("div",{...t},(0,o.createElement)(we,{...e}))},save:({attributes:e})=>(0,o.createElement)("div",{...c.useBlockProps.save({className:ie(e)}),...de(e)})})},7349:()=>{},8204:()=>{},4093:()=>{},8543:()=>{},9421:()=>{},6990:()=>{},2513:()=>{},3366:()=>{},8462:()=>{},5932:()=>{},4333:e=>{"use strict";e.exports=window.wp.compose},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n},9127:e=>{"use strict";e.exports=window.wp.isShallowEqual},444:e=>{"use strict";e.exports=window.wp.primitives}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var s=r[e]={exports:{}};return t[e].call(s.exports,s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,r,n,s)=>{if(!r){var a=1/0;for(d=0;d<e.length;d++){for(var[r,n,s]=e[d],l=!0,c=0;c<r.length;c++)(!1&s||a>=s)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(l=!1,s<a&&(a=s));if(l){e.splice(d--,1);var i=n();void 0!==i&&(t=i)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,n,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j=5280,(()=>{var e={5280:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,s,[a,l,c]=r,i=0;if(a.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(c)var d=c(o)}for(t&&t(r);i<a.length;i++)s=a[i],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},r=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[2869],(()=>o(1831)));n=o.O(n),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["reviews-by-category"]=n})();