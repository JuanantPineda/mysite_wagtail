(()=>{class e extends window.wagtailStreamField.blocks.StructBlockDefinition{render(e,t,d,i){const n=super.render(e,t,d,i),r=document.getElementById(`${t}-alt_text`),a=document.getElementById(`${t}-decorative`),l=()=>{a.checked?r.setAttribute("disabled",!0):r.removeAttribute("disabled")};return l(),a.addEventListener("change",l),n}}window.telepath.register("wagtail.images.blocks.ImageBlock",e)})();