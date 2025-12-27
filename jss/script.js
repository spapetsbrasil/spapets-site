document.addEventListener("scroll",()=>{
 document.querySelectorAll(".card").forEach(c=>{
  const t=c.getBoundingClientRect().top;
  if(t<window.innerHeight-80){
   c.style.opacity=1;
   c.style.transform="translateY(0)";
  }
 });
});
