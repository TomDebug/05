(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{222:function(t,e,r){"use strict";r.r(e);r(35);var n=r(7),o={data:function(){return{form:{title:"",text:""},validError:""}},methods:{submitForm:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.form.title.length>=4&&t.form.text.length>=4)){e.next=14;break}if(!t.isUpdate){e.next=7;break}return e.next=4,t.$axios.put("/api/articles/update",t.form);case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,t.$axios.post("/api/articles/new",t.form);case 9:e.t0=e.sent;case 10:201==(r=e.t0).status||200==r.status?t.$router.push("/articles/".concat(r.data._id)):t.validError=r.data,e.next=15;break;case 14:t.validError="Validation error";case 15:case"end":return e.stop()}}),e)})))()}},props:{isUpdate:{type:Boolean,default:!1}},created:function(){var t=this;this.isUpdate&&this.$axios.get("/api/articles/".concat(this.$route.params.id)).then((function(e){200==e.status?t.form=e.data:t.$router.push("/?status=notfound")})).catch((function(){t.$router.push("/?status=notfound")}))}},l=r(29),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",[r("h1",{staticClass:"mb-5 text-center"},[t._v(t._s(t.isUpdate?"UPDATE":"CREATE")+" ARTICLE FORM")]),t.validError?r("div",{staticClass:"alert alert-danger text-center"},[t._v(t._s(t.validError))]):t._e(),r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label"},[t._v("Article title")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}})]),r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label"},[t._v("Article text")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.text,expression:"form.text"}],staticClass:"form-control",attrs:{rows:"5"},domProps:{value:t.form.text},on:{input:function(e){e.target.composing||t.$set(t.form,"text",e.target.value)}}})]),r("button",{staticClass:"btn",class:{"btn-primary":t.isUpdate,"btn-success":!t.isUpdate},on:{click:function(e){return e.preventDefault(),t.submitForm(e)}}},[t._v(t._s(t.isUpdate?"UPDATE":"CREATE")+" ARTICLE")])])}),[],!1,null,null,null);e.default=component.exports},227:function(t,e,r){"use strict";r.r(e);var n=r(29),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container mt-5 mb-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 mx-auto"},[e("ArticleForm")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticleForm:r(222).default})}}]);