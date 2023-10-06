window.addEventListener("mousemove", function(details){
 
    let rect=document.querySelector("#rect");

    let xval=gsap.utils.mapRange(0, window.innerWidth,100 + rect.getBoundingClientRect().width/2 ,window.innerWidth- (100+rect.getBoundingClientRect().width/2),details.clientX)

    let yval=gsap.utils.mapRange(0, window.innerWidth,100 + rect.getBoundingClientRect().width/2 ,window.innerWidth- (100+rect.getBoundingClientRect().width/2),details.clientY)
    gsap.to("#rect", {
        left: xval +"px",
        top: yval +"px",
        ease: Power3
    })
})
