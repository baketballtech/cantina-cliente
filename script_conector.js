const baseUrl=window.location.hostname==='https://cantina-cliente.vercel.app';document.addEventListener("DOMContentLoaded",async function(){var e=await fetch(`${baseUrl}/cantina_dados`),o=await e.json(),t=JSON.parse(o);console.log(t[0].nome_produto);for(var n=t.length-1,d=document.getElementById("produtos_f"),a=document.getElementById("produtos_b"),r=document.getElementById("produtos_r"),i=document.getElementById("produtos_s");n+1>0;){var s=t[n],l=s.nome_produto,p=s.imagem_nome,c=s.preco,m=s.tipo,u=s.quantidade,g=s.disponivel,v=document.createElement("div");v.id="div_nome_p",v.className="divs_pro",v.innerText=l,"nao"!=String(g).toLowerCase()&&"não"!=String(g).toLowerCase()||(v.innerHTML=`(<del>${l}</del>)`);var C=document.createElement("div");C.id="div_preco",C.className="divs_pro",C.innerHTML=`${c}$$`;var _=document.createElement("div");_.id="div_qua",_.className="divs_pro",_.innerText=u;var f=document.createElement("div");function h(e,o,t){var n=document.createElement("img");n.src=e,n.alt=t,n.onerror=(()=>{n.src=`${t}.png`}),console.log(t),n.className="img_teste",1==o&&(n.id="refe"),f.appendChild(n),f.appendChild(v),f.appendChild(C),f.appendChild(_)}f.id="valor",f.style.display="inline-block",f.style.minWidth="10%",f.style.marginRight="50px";var L="",w="";console.log(p),"fastfood"==String(m).toLowerCase()?(L="fastfood",w=`produtos/${p}`,h(w,0,L),d.appendChild(f)):"bebida"==String(m).toLowerCase()?(L="bebidas",w=`produtos/${p}`,h(w,0,L),a.appendChild(f)):"refeição"==String(m).toLowerCase()||"refeiçao"==String(m).toLowerCase()||"refeicão"==String(m).toLowerCase()?(L="refeicao",w=`produtos/${p}`,h(w,1,L),r.appendChild(f)):"sobremesa"==String(m).toLowerCase()&&(L="sobremesa",w=`produtos/${p}`,h(w,0,L),i.appendChild(f)),console.log(g),n-=1}});
