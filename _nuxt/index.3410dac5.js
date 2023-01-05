import{a as u,o as t,b as i,e as s,t as c,c as m,f as n,w as d,v as _,h as g,i as y}from"./entry.bcb9b119.js";const b={props:{message:{type:String,default(){return""}}}},x={class:"row mb-2 justify-content-center"},C={class:"col-12 col-lg-8"},w={class:"alert alert-danger"};function k(o,l,p,f,e,v){return t(),i("div",x,[s("div",C,[s("div",w,[s("strong",null,c(p.message),1)])])])}const F=u(b,[["render",k]]),h=""+new URL("icon-ok.f687c469.svg",import.meta.url).href;const A={name:"IndexPage",data(){return{name:{name:"name",label:"Nome",value:"",regex:/^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ ]+$/,isCorrect:!0,errorMessage:"O nome deve conter apenas letras!",place:"Jo\xE3o da Silva"},email:{name:"email",label:"Email",value:"",regex:/^\w+[@]\w+[.]\w+([.]\w+)?$/,isCorrect:!0,errorMessage:"Insira um email v\xE1lido!",place:"joao@silva.com.br"},phone:{name:"phone",label:"Telefone",value:"",regex:/^\d{2}[-]?\d{4,5}[-]?\d{4}$/,isCorrect:!0,errorMessage:"Insira um n\xFAmero de telefone v\xE1lido!",place:"11-22222-3333"},cpf:{name:"cpf",label:"CPF",value:"",regex:/^\d{3}[.]?\d{3}[.]?\d{3}[-]?\d{2}$/,isCorrect:!0,errorMessage:"Insira um CPF v\xE1lido!",place:"111.222.333-44"},isAllowSend:!1}},watch:{name:{handler(o){this.name.isCorrect=this.verifyField(this.name.regex,o.value),console.log("newname: ",o.value),this.verifyAllFields()},deep:!0},email:{handler(o){this.email.isCorrect=this.verifyField(this.email.regex,o.value),this.verifyAllFields()},deep:!0},phone:{handler(o){this.phone.isCorrect=this.verifyField(this.phone.regex,o.value),this.verifyAllFields()},deep:!0},cpf:{handler(o){this.cpf.isCorrect=this.verifyField(this.cpf.regex,o.value),this.verifyAllFields()},deep:!0}},methods:{verifyField(o,l){return o.test(l)},verifyAllFields(){this.name.isCorrect&&this.email.isCorrect&&this.phone.isCorrect&&this.cpf.isCorrect?this.isAllowSend=!0:this.isAllowSend=!1}}},j={id:"app",class:"container mt-5 justify-content-center align-items-center"},M={action:"/confirmation",method:"post",class:"justify-content-center m-3 align-items-center"},S={class:"row mb-2 justify-content-center"},V={class:"col-12 col-lg-1"},B=["for"],U={class:"col-10 col-lg-6"},E=["name","placeholder"],I={class:"col-2 col-lg-1"},N={key:0,class:"img-fluid",src:h,width:"35",alt:""},P={class:"row mb-2 justify-content-center"},T={class:"col-12 col-lg-1"},q=["for"],z={class:"col-10 col-lg-6"},D=["name","placeholder"],L={class:"col-2 col-lg-1"},O={key:0,class:"img-fluid",src:h,width:"35",alt:""},J={class:"row mb-2 justify-content-center"},R={class:"col-12 col-lg-1"},Z=["for"],G={class:"col-10 col-lg-6"},H=["name","placeholder"],K={class:"col-2 col-lg-1"},Q={key:0,class:"img-fluid",src:h,width:"35",alt:""},W={class:"row mb-2 justify-content-center"},X={class:"col-12 col-lg-1"},Y=["for"],$={class:"col-10 col-lg-6"},ee=["name","placeholder"],se={class:"col-2 col-lg-1"},oe={key:0,class:"img-fluid",src:h,width:"35",alt:""},le={class:"row mb-5 d-flex justify-content-center"},te={class:"col-10 col-lg-3"},ne=s("button",{type:"reset",class:"btn btn-secondary mx-2"},"Limpar",-1),re=s("p",{class:"text-center"},[s("strong",null,"Observa\xE7\xE3o:"),y(" Este formu\xE1rio \xE9 usado s\xF3 para demonstra\xE7\xE3o de testes e n\xE3o envia dados para qualquer lugar. ")],-1);function ie(o,l,p,f,e,v){const a=F;return t(),i("div",j,[s("form",M,[e.name.isCorrect?n("",!0):(t(),m(a,{key:0,message:e.name.errorMessage},null,8,["message"])),s("div",S,[s("div",V,[s("label",{for:e.name.name,class:"form-label"},c(e.name.label),9,B)]),s("div",U,[d(s("input",{name:e.name.name,type:"text",class:"form-control","onUpdate:modelValue":l[0]||(l[0]=r=>e.name.value=r),placeholder:e.name.place},null,8,E),[[_,e.name.value]])]),s("div",I,[e.name.isCorrect?(t(),i("img",N)):n("",!0)])]),e.email.isCorrect?n("",!0):(t(),m(a,{key:1,message:e.email.errorMessage},null,8,["message"])),s("div",P,[s("div",T,[s("label",{for:e.email.name,class:"form-label"},c(e.email.label),9,q)]),s("div",z,[d(s("input",{name:e.email.name,type:"text",class:"form-control","onUpdate:modelValue":l[1]||(l[1]=r=>e.email.value=r),placeholder:e.email.place},null,8,D),[[_,e.email.value]])]),s("div",L,[e.email.isCorrect?(t(),i("img",O)):n("",!0)])]),e.phone.isCorrect?n("",!0):(t(),m(a,{key:2,message:e.phone.errorMessage},null,8,["message"])),s("div",J,[s("div",R,[s("label",{for:e.phone.name,class:"form-label"},c(e.phone.label),9,Z)]),s("div",G,[d(s("input",{name:e.phone.name,type:"text",class:"form-control","onUpdate:modelValue":l[2]||(l[2]=r=>e.phone.value=r),placeholder:e.phone.place},null,8,H),[[_,e.phone.value]])]),s("div",K,[e.phone.isCorrect?(t(),i("img",Q)):n("",!0)])]),e.cpf.isCorrect?n("",!0):(t(),m(a,{key:3,message:e.cpf.errorMessage},null,8,["message"])),s("div",W,[s("div",X,[s("label",{for:e.cpf.name,class:"form-label"},c(e.cpf.label),9,Y)]),s("div",$,[d(s("input",{name:e.cpf.name,type:"text",class:"form-control","onUpdate:modelValue":l[3]||(l[3]=r=>e.cpf.value=r),placeholder:e.cpf.place},null,8,ee),[[_,e.cpf.value]])]),s("div",se,[e.cpf.isCorrect?(t(),i("img",oe)):n("",!0)])]),s("div",le,[s("div",te,[ne,s("button",{class:g(["btn btn-success",{disabled:!e.isAllowSend}])}," Enviar ",2)])])]),re])}const ae=u(A,[["render",ie]]);export{ae as default};
