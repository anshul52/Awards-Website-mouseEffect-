var circle = document.querySelector("#circle")

var frames = document.querySelectorAll(".frame")
 

const lerp = (x, y, a) => x * (1 - a) + y * a;

frames.forEach(frame => {

    frame.addEventListener("mousemove",function(dets){

        var dimensions = frame.getBoundingClientRect();
        
        var xstart = dimensions.x;
        var xend = dimensions.x + dimensions.width;
    
        var zeroone =  gsap.utils.mapRange(xstart,xend, 0,1,dets.clientX);  
    
        gsap.to(circle,{
            scale:8,
        })
        gsap.to(frame.children,{
            color:"#fff",
            y:"-5vw"
        })
        gsap.to(frame.children,{
            x:lerp(-50,50,zeroone),
            duration:.3
        })
    })
    frame.addEventListener("mouseleave",function(dets){
        gsap.to(circle,{
            scale:1
        })
        gsap.to(frame.children,{
            color:"black",
            y:0
        })
        
        gsap.to(frame.children,{
            x:0,
            duration:.3
        })
    })
});

window.addEventListener("mousemove",function(dets){
    gsap.to(circle,{
        x: dets.clientX,
        y: dets.clientY,
        duration: .2,

    })
    
    
    // console.log(dets.clientX,dets.clientY);
})