(()=>{"use strict";var e={4896:(e,t,a)=>{a.d(t,{Z:()=>d});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"recipe-preview"},[a("div",{staticClass:"recipe-image",style:{backgroundImage:"url("+e.recipe.image+")"},on:{mouseover:function(t){e.showImageTooltip=!0},mouseout:function(t){e.showImageTooltip=!1},click:e.addWatched}},[a("router-link",{staticClass:"image-link",attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}}}),a("div",{staticClass:"overlay"},[e.showImageTooltip?a("span",{staticClass:"tooltip"},[e._v("Click image to show recipe")]):e._e()]),a("div",{staticClass:"actions"},[e.isWatched?a("span",{staticClass:"icon-background"}):e._e(),e.isWatched?a("button",{staticClass:"watched-icon",on:{mouseover:[function(t){e.showWatchedTooltip=!0},function(e){e.stopPropagation()}],mouseout:function(t){e.showWatchedTooltip=!1}}},[a("i",{class:e.watchedIconClass}),e.showWatchedTooltip?a("span",{staticClass:"tooltip"},[e._v("Has been watched")]):e._e()]):e._e(),a("button",{staticClass:"favorite-icon",class:{active:e.isFavorite},on:{click:function(t){return t.stopPropagation(),e.toggleFavorite(t)},mouseover:[function(t){e.showFavoriteTooltip=!0},function(e){e.stopPropagation()}],mouseout:function(t){e.showFavoriteTooltip=!1}}},[a("i",{staticClass:"fas fa-heart"}),e.showFavoriteTooltip&&!e.isFavorited?a("span",{staticClass:"tooltip"},[e._v("Favorite")]):e._e()])])],1),a("div",{staticClass:"recipe-details"},[a("h3",{staticClass:"recipe-title"},[e._v(e._s(e.recipe.title))]),a("p",{staticClass:"recipe-time"},[e._v("Time: "+e._s(e.recipe.readyInMinutes)+" minutes")]),a("div",{staticClass:"recipe-icons"},[a("div",{staticClass:"recipe-icon"},[a("i",{staticClass:"fas fa-fire"}),a("span",{staticClass:"icon-label"},[e._v(e._s(e.recipe.popularity))])]),a("div",{staticClass:"recipe-icon"},[a("i",{staticClass:"fas fa-carrot"}),a("span",{staticClass:"icon-label",class:{active:e.recipe.vegan}},[e._v("Vegan")])]),a("div",{staticClass:"recipe-icon"},[a("i",{staticClass:"fas fa-leaf"}),a("span",{staticClass:"icon-label",class:{active:e.recipe.vegetarian}},[e._v("Vegetarian")])]),a("div",{staticClass:"recipe-icon"},[a("i",{staticClass:"fas fa-leaf"}),a("span",{staticClass:"icon-label",class:{active:e.recipe.glutenFree}},[e._v("Gluten Free")])])])])])},n=[],i=a(6835),s=a(8534);a(7941),a(6699),a(2023),a(5212),a(1539),a(7658),a(8862);const o={data:function(){return{showFavoriteTooltip:!1,showImageTooltip:!1,showWatchedTooltip:!1,favoriteRecipes:[],isFavorited:!1}},mounted:function(){console.log("in mounted recipeid="+this.recipe.id),this.fetchPersonalRecipes()},computed:{isWatched:function(){var e=JSON.parse(localStorage.getItem("clickedRecipes"))||[];return e.includes(this.recipe.id)},watchedIconClass:function(){return this.isWatched?"fas fa-eye":"far fa-eye"}},methods:{fetchPersonalRecipes:function(){var e=this;return(0,s.Z)((0,i.Z)().mark((function t(){var a;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/users/favorites");case 3:a=t.sent,e.favoriteRecipes=a.data,e.updateIsFavoritedValue(),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log("error in fetchPersonalRecipes="+t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},updateIsFavoritedValue:function(){var e=this;console.log("in updateIsFavorited before:"+this.isFavorited),this.isFavorited=this.favoriteRecipes.some((function(t){return t.id===e.recipe.id})),console.log("in updateIsFavorited, updated to="+this.isFavorited)},addWatched:function(){var e=this;return(0,s.Z)((0,i.Z)().mark((function t(){var a,r;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.post(e.$root.store.server_domain+"/users/last_seen",{recipeId:e.recipe.id});case 3:a=t.sent,console.log(a.data),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:r=JSON.parse(localStorage.getItem("clickedRecipes"))||[],r.includes(e.recipe.id)||(r.push(e.recipe.id),localStorage.setItem("clickedRecipes",JSON.stringify(r)));case 12:case"end":return t.stop()}}),t,null,[[0,7]])})))()},toggleFavorite:function(){var e=this;return(0,s.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isFavorite){t.next=4;break}return t.next=3,e.axios.post(e.$root.store.server_domain+"/user/favorites",{recipeId:e.recipe.id}).then((function(t){e.isFavorite=!0}))["catch"]((function(e){console.error("Failed to mark recipe as favorite:",e)}));case 3:t.sent;case 4:case"end":return t.stop()}}),t)})))()}},props:{recipe:{type:Object,required:!0}}},c=o;var l=a(1001),u=(0,l.Z)(c,r,n,!1,null,"4c29183c",null);const d=u.exports},4465:(e,t,a)=>{a.d(t,{Z:()=>u});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),a("div",e._l(e.recipes,(function(e){return a("div",{key:e.id},[a("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),0)])},n=[],i=a(4896);const s={name:"RecipePreviewList",components:{RecipePreview:i.Z},props:{title:{type:String,required:!0},recipes:{type:Array,default:function(){return[]}}},data:function(){return{}}},o=s;var c=a(1001),l=(0,c.Z)(o,r,n,!1,null,"42e4c37c",null);const u=l.exports},4924:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[e._v("Login")]),a("b-form",{on:{submit:function(t){return t.preventDefault(),e.onLogin(t)}}},[a("b-form-group",{attrs:{id:"input-group-Username","label-cols-sm":"3",label:"Username:","label-for":"Username"}},[a("b-form-input",{attrs:{id:"Username",type:"text",state:e.validateState("username")},model:{value:e.$v.form.username.$model,callback:function(t){e.$set(e.$v.form.username,"$model",t)},expression:"$v.form.username.$model"}}),a("b-form-invalid-feedback",[e._v(" Username is required ")])],1),a("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"Password"}},[a("b-form-input",{attrs:{id:"Password",type:"password",state:e.validateState("password")},model:{value:e.$v.form.password.$model,callback:function(t){e.$set(e.$v.form.password,"$model",t)},expression:"$v.form.password.$model"}}),a("b-form-invalid-feedback",[e._v(" Password is required ")])],1),a("b-button",{staticClass:"mx-auto w-100",staticStyle:{width:"100px",display:"block"},attrs:{type:"submit",variant:"primary"}},[e._v("Login")]),a("div",{staticClass:"mt-2"},[e._v(" Do not have an account yet? "),a("router-link",{attrs:{to:"register"}},[e._v(" Register in here")])],1)],1),e.form.submitError?a("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" Login failed: "+e._s(e.form.submitError)+" ")]):e._e()],1)},n=[],i=a(6835),s=a(8534),o=(a(7658),a(379));const c={name:"Login",data:function(){return{form:{username:"",password:"",submitError:void 0}}},validations:{form:{username:{required:o.C1},password:{required:o.C1}}},methods:{validateState:function(e){var t=this.$v.form[e],a=t.$dirty,r=t.$error;return a?!r:null},Login:function(){var e=this;return(0,s.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log(e.$root.store.server_domain+"/Login"),t.next=4,e.axios.post(e.$root.store.server_domain+"/Login",{username:e.form.username,password:e.form.password});case 4:t.sent,e.$root.store.login(e.form.username),e.$router.push("/"),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()},onLogin:function(){this.form.submitError=void 0,this.$v.form.$touch(),this.$v.form.$anyError||this.Login()}}},l=c;var u=a(1001),d=(0,u.Z)(l,r,n,!1,null,"97c25488",null);const p=d.exports},4578:(e,t,a)=>{a(6992),a(8674),a(9601),a(7727),a(9554),a(1539),a(4747);var r=a(144),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"main"}}},[e._v("Main Page")]),e._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"search"}}},[e._v("Search")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"about"}}},[e._v("About")])],1),e.$root.store.username?e._e():a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"favorites"}}},[e._v("Favorites")])],1),e.$root.store.username?e._e():a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"register"}}},[e._v("Register")])],1),e.$root.store.username?a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},on:{click:e.toggleDropdown}},[e._v(" Personal ")]),a("div",{staticClass:"dropdown-menu",class:{show:e.dropdownOpen},attrs:{"aria-labelledby":"navbarDropdown"}},[a("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"favorites"}}},[e._v("My Favorites")]),a("div",{staticClass:"dropdown-divider"}),a("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"myrecipes"}}},[e._v("My Recipes")]),a("div",{staticClass:"dropdown-divider"}),a("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"family"}}},[e._v("My Family Recipes")]),a("div",{staticClass:"dropdown-divider"}),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-prevent-closing",modifiers:{"modal-prevent-closing":!0}}],staticClass:"dropdown-item"},[e._v("Create Recipe")])],1)]):a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"login"}}},[e._v("Login")])],1),e.$root.store.username?a("li",{staticClass:"nav-item user-info"},[a("span",{staticClass:"navbar-text"},[e._v("Logged in as: "+e._s(e.$root.store.username))]),a("button",{staticClass:"btn btn-primary ml-2",on:{click:e.logout}},[e._v("Logout")])]):e._e()])]),a("RecipeModal")],1)]),a("div",{staticClass:"container py-4"},[a("router-view")],1)])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing",title:"Create a new Recipe"},on:{show:e.resetModal,hidden:e.resetModal,ok:e.handleOk}},[a("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[a("b-form-group",{attrs:{label:"Name:","label-for":"name-input","invalid-feedback":"Name is required",state:e.nameState}},[a("b-form-input",{attrs:{id:"name-input",state:e.nameState,required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("b-form-group",{attrs:{label:"Image Link:","label-for":"image-input","invalid-feedback":"Image is required",state:e.imageState}},[a("b-form-input",{attrs:{id:"image-input",state:e.imageState,required:""},model:{value:e.image,callback:function(t){e.image=t},expression:"image"}})],1),a("b-form-group",{attrs:{label:"Time to make(minutes):","label-for":"ttm-input"}},[a("b-form-select",{attrs:{id:"ttm-input",options:e.ttmOptions,state:e.ttmState,required:""},model:{value:e.timeToMake,callback:function(t){e.timeToMake=t},expression:"timeToMake"}})],1),a("b-form-group",{attrs:{label:"Servings:","label-for":"servings-input"}},[a("b-form-select",{attrs:{id:"servings-input",options:e.servingsOptions,state:e.servingState,required:""},model:{value:e.servings,callback:function(t){e.servings=t},expression:"servings"}})],1),a("div",{staticClass:"checkbox-row"},[a("b-form-group",{attrs:{label:"","label-for":"is-vegan-input"}},[a("b-form-checkbox",{attrs:{id:"is-vegan-input",state:e.isVeganState},model:{value:e.isVegan,callback:function(t){e.isVegan=t},expression:"isVegan"}},[e._v(" Vegan | ")])],1),a("b-form-group",{attrs:{label:"","label-for":"is-vegetarian-input"}},[a("b-form-checkbox",{attrs:{id:"is-vegetarian-input",state:e.isVegetarianState},model:{value:e.isVegetarian,callback:function(t){e.isVegetarian=t},expression:"isVegetarian"}},[e._v(" Vegetarian | ")])],1),a("b-form-group",{attrs:{label:"","label-for":"is-gluten-free-input"}},[a("b-form-checkbox",{attrs:{id:"is-gluten-free-input",state:e.isGlutenFreeState},model:{value:e.isGlutenFree,callback:function(t){e.isGlutenFree=t},expression:"isGlutenFree"}},[e._v(" Gluten Free ")])],1)],1),a("h5",[e._v("Ingredients")]),e._l(e.ingredients,(function(t,r){return a("div",{key:"ingredient-"+r},[a("b-form-group",{attrs:{label:"Ingredient "+(r+1),"label-for":"ingredient-input-"+r,"invalid-feedback":"Ingredient "+(r+1)+" is required",state:e.ingredientStates[r]}},[a("b-form-input",{attrs:{id:"ingredient-input-"+r,state:e.ingredientStates[r],required:""},model:{value:t.ingredient,callback:function(a){e.$set(t,"ingredient",a)},expression:"ingredient.ingredient"}})],1)],1)})),a("b-button",{on:{click:e.addIngredient}},[e._v("Add Ingredient")]),a("h5",[e._v("Instructions")]),e._l(e.instructions,(function(t,r){return a("div",{key:"instruction-"+r},[a("b-form-group",{attrs:{label:"Instruction "+(r+1),"label-for":"instruction-input-"+r,"invalid-feedback":"Instruction "+(r+1)+" is required",state:e.instructionStates[r]}},[a("b-form-input",{attrs:{id:"instruction-input-"+r,state:e.instructionStates[r],required:""},model:{value:t.instruction,callback:function(a){e.$set(t,"instruction",a)},expression:"instruction.instruction"}})],1)],1)})),a("b-button",{on:{click:e.addInstruction}},[e._v("Add Instruction")])],2)])],1)},o=[],c=a(6835),l=a(8534);a(7658),a(8309),a(1249);const u={name:"RecipeModal",data:function(){return{name:"",nameState:null,image:"",imageState:null,title:"",ingredients:[{ingredient:""}],instructions:[{instruction:""}],ingredientStates:[],instructionStates:[],isVegan:!1,isVegetarian:!1,isGlutenFree:!1,isGlutenFreeState:!1,isVeganState:!1,isVegetarianState:!1,servings:1,servingsOptions:[1,2,3,4,5,6,7,8,9,10],servingState:null,timeToMake:10,ttmOptions:[10,15,30,45,60,90,120,150,180,210],ttmState:null}},methods:{addIngredient:function(){this.ingredients.push({ingredient:""}),this.ingredientStates.push(null)},addInstruction:function(){this.instructions.push({instruction:""}),this.instructionStates.push(null)},checkFormValidity:function(){var e=this.$refs.form.checkValidity();return this.nameState=e,this.imageState=e,e},resetModal:function(){this.name="",this.nameState=null,this.image="",this.imageState=null,this.ingredients=[{ingredient:""}],this.instructions=[{instruction:""}],this.ingredientStates=[],this.instructionStates=[],this.isVegan=!1,this.isVegetarian=!1,this.isGlutenFree=!1,this.servings=1,this.timeToMake=10},handleOk:function(e){e.preventDefault(),this.handleSubmit()},handleSubmit:function(){var e=this;return(0,l.Z)((0,c.Z)().mark((function t(){var a,r;return(0,c.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.checkFormValidity()){t.next=2;break}return t.abrupt("return");case 2:return a={title:e.name,readyInMinutes:e.timeToMake,image:e.image,popularity:0,vegan:e.isVegan,vegetarian:e.isVegetarian,glutenFree:e.isGlutenFree,instruction:e.instructions.map((function(e){return e.instruction})),ingredients:e.ingredients.map((function(e){return e.ingredient})),servings:e.servings},console.log(a),t.prev=4,t.next=7,e.axios.post(e.$root.store.server_domain+"/users/recipes_created",a);case 7:r=t.sent,console.log(r.data),e.resetModal(),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](4),console.error("Error submitting the form:",t.t0);case 15:e.$nextTick((function(){e.$bvModal.hide("modal-prevent-closing")}));case 16:case"end":return t.stop()}}),t,null,[[4,12]])})))()}}},d=u;var p=a(1001),m=(0,p.Z)(d,s,o,!1,null,"3315b5f9",null);const v=m.exports,f={name:"App",components:{RecipeModal:v},data:function(){return{dropdownOpen:!1}},methods:{toggleDropdown:function(){this.dropdownOpen=!this.dropdownOpen},logout:function(){}}},g=f;var h=(0,p.Z)(g,n,i,!1,null,"c9aff790",null);const b=h.exports;var w=a(1939),k=a.n(w),_=a(6154),C=(a(8783),a(3948),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("b-container",{attrs:{fluid:""}},[a("b-row",[a("b-col",[a("RecipePreviewList",{attrs:{title:"Random Recipes",recipes:e.randomRecipes}})],1),e.$root.store.username?a("b-col",[a("RecipePreviewList",{class:{RandomRecipes:!0,blur:e.$root.store.username,center:!0},attrs:{title:"Last Viewed Recipes",disabled:""}})],1):a("b-col",[a("LoginPage")],1)],1)],1)],1)}),y=[],x=a(4465),S=a(4924);const $={name:"MainPage",components:{RecipePreviewList:x.Z,LoginPage:S["default"]},data:function(){return{randomRecipes:[],lastWatchedRecipes:[],loading:!1}},mounted:function(){var e=this;return(0,l.Z)((0,c.Z)().mark((function t(){return(0,c.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.updateRecipes();case 1:case"end":return t.stop()}}),t)})))()},methods:{updateRecipes:function(){var e=this;return(0,l.Z)((0,c.Z)().mark((function t(){var a,r,n,i;return(0,c.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,e.axios.get(e.$root.store.server_domain+"/recipes/random");case 4:if(a=t.sent,r=a.data,e.randomRecipes=r,!e.$root.store.username){t.next=13;break}return t.next=10,e.axios.get(e.$root.store.server_domain+"/users/last_seen");case 10:n=t.sent,i=n.data,e.lastWatchedRecipes=i;case 13:t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](0),console.log(t.t0);case 18:e.loading=!1;case 19:case"end":return t.stop()}}),t,null,[[0,15]])})))()}}},F=$;var Z=(0,p.Z)(F,C,y,!1,null,"7710b0ac",null);const I=Z.exports;var P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v("Four Oh Four you didn't")]),a("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},R=[],T={},O=(0,p.Z)(T,P,R,!1,null,null,null);const E=O.exports;var L=[{path:"/",name:"main",component:I},{path:"/register",name:"register",component:function(){return a.e(241).then(a.bind(a,241))}},{path:"/login",name:"login",component:function(){return Promise.resolve().then(a.bind(a,4924))}},{path:"/search",name:"search",component:function(){return a.e(477).then(a.bind(a,8477))}},{path:"/recipe/:recipeId",name:"recipe",component:function(){return a.e(253).then(a.bind(a,253))}},{path:"/about",name:"about",component:function(){return a.e(259).then(a.bind(a,2259))}},{path:"/favorites",name:"favorites",component:function(){return a.e(114).then(a.bind(a,114))}},{path:"/myrecipes",name:"myrecipes",component:function(){return a.e(201).then(a.bind(a,1201))}},{path:"/family",name:"family",component:function(){return a.e(367).then(a.bind(a,6367))}},{path:"*",name:"notFound",component:E}];const V=L;var M=a(8345),q=a(8620),N=a(5002),j=(a(7024),a(508)),A=a(7563),W=a(7419),G=a(1869),D=a(295),U=a(3090),B=a(794),H=a(4063),J=a(8793),K=a(7772);r["default"].use(M.Z);var Y=new M.Z({routes:V});[j.E,A.w6,W.g,G.SY,D.xL,U.u3,B.v5,H.F,J.m$,K.A6].forEach((function(e){return r["default"].use(e)})),r["default"].use(N.ZPm),r["default"].use(q.ZP),_.Z.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),_.Z.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),r["default"].use(k(),_.Z),r["default"].config.productionTip=!1;var z={server_domain:"https://ronidanrecipes.cs.bgu.ac.il",username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(z),new r["default"]({router:Y,data:function(){return{store:z}},methods:{toast:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:a,solid:!0,appendToast:r,autoHideDelay:3e3})}},render:function(e){return e(b)}}).$mount("#app")}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,a),i.exports}a.m=e,(()=>{var e=[];a.O=(t,r,n,i)=>{if(!r){var s=1/0;for(u=0;u<e.length;u++){for(var[r,n,i]=e[u],o=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(a.O).every((e=>a.O[e](r[c])))?r.splice(c--,1):(o=!1,i<s&&(s=i));if(o){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,n,i]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{114:"ad6fd907",201:"d2666c10",241:"2af49f1b",253:"1627fea3",259:"3a3e7040",367:"3a80479f",477:"b676b9b3"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+e+"."+{241:"665ddb38",253:"8dc6f55c",259:"7d19213e",477:"8ab21d17"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="assignment-3-3:";a.l=(r,n,i,s)=>{if(e[r])e[r].push(n);else{var o,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){o=d;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+i),o.src=r),e[r]=[n];var p=(t,a)=>{o.onerror=o.onload=null,clearTimeout(m);var n=e[r];if(delete e[r],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(a))),t)return t(a)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),c&&document.head.appendChild(o)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,a,r,n)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var s=a=>{if(i.onerror=i.onload=null,"load"===a.type)r();else{var s=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=o,i.parentNode&&i.parentNode.removeChild(i),n(c)}};return i.onerror=i.onload=s,i.href=t,a?a.parentNode.insertBefore(i,a.nextSibling):document.head.appendChild(i),i},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var n=a[r],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===e||i===t))return n}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){n=s[r],i=n.getAttribute("data-href");if(i===e||i===t)return n}},r=r=>new Promise(((n,i)=>{var s=a.miniCssF(r),o=a.p+s;if(t(s,o))return n();e(r,o,null,n,i)})),n={143:0};a.f.miniCss=(e,t)=>{var a={241:1,253:1,259:1,477:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=r(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}}})(),(()=>{var e={143:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((a,r)=>n=e[t]=[a,r]));r.push(n[2]=i);var s=a.p+a.u(t),o=new Error,c=r=>{if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",o.name="ChunkLoadError",o.type=i,o.request=s,n[1](o)}};a.l(s,c,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[s,o,c]=r,l=0;if(s.some((t=>0!==e[t]))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(c)var u=c(a)}for(t&&t(r);l<s.length;l++)i=s[l],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},r=self["webpackChunkassignment_3_3"]=self["webpackChunkassignment_3_3"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=a.O(void 0,[998],(()=>a(4578)));r=a.O(r)})();
//# sourceMappingURL=app.c85783c7.js.map