import{r as t,c as s,h as i,H as h,g as e}from"./p-17c4ed33.js";import{h as a,c as o,j as r,a as l,f as n,b as c,e as u,k as d,l as m,u as p}from"./p-f1ae637c.js";import{g,s as b}from"./p-0ff2a75e.js";const f=class{constructor(i){t(this,i),this.value="",this.name="",this.label="",this.hint="",this.options="",this.required=!1,this.requiredMessage="This field is required",this.disabled=!1,this.size="3",this._dotTouched=!1,this._dotPristine=!0,this.dotValueChange=s(this,"dotValueChange",7),this.dotStatusChange=s(this,"dotStatusChange",7)}componentWillLoad(){this.validateProps(),this.emitInitialValue(),this.status=a(this.isValid()),this.emitStatusChange()}componentDidLoad(){const t=this.el.querySelector("select");setTimeout(()=>{const s=g(Array.from(this.el.attributes),[]);b(t,s)},0)}optionsWatch(){const t=o(this,"options");this._options=r(t)}async reset(){this.value="",this.status=a(this.isValid()),this.emitInitialValue(),this.emitStatusChange()}render(){const t=l(this.status,this.isValid(),this.required);return i(h,{class:Object.assign({},t)},i("dot-label",{label:this.label,required:this.required,name:this.name},i("select",{multiple:!0,"aria-describedby":u(this.hint),size:+this.size,class:d(this.status.dotValid),id:m(this.name),disabled:this.shouldBeDisabled(),onChange:()=>this.setValue()},this._options.map(t=>i("option",{selected:this.value===t.value||null,value:t.value},t.label)))),c(this.hint),n(!this.isValid(),this.requiredMessage))}validateProps(){this.optionsWatch()}shouldBeDisabled(){return!!this.disabled||null}setValue(){this.value=this.getValueFromMultiSelect(),this.status=p(this.status,{dotTouched:!0,dotPristine:!1,dotValid:this.isValid()}),this.emitValueChange(),this.emitStatusChange()}getValueFromMultiSelect(){const t=this.el.querySelectorAll("option:checked"),s=Array.from(t).map(t=>t.value);return Array.from(s).join(",")}emitInitialValue(){this.value||(this.value=this._options.length?this._options[0].value:"",this.emitValueChange())}emitStatusChange(){this.dotStatusChange.emit({name:this.name,status:this.status})}isValid(){return!this.required||!!this.value}emitValueChange(){this.dotValueChange.emit({name:this.name,value:this.value})}get el(){return e(this)}static get watchers(){return{options:["optionsWatch"]}}static get style(){return""}};export{f as dot_multi_select};