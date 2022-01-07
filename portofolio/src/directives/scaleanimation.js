const animatedScaleObserver = new IntersectionObserver(
    (entries, animatedScaleObserver )=>{
        entries.forEach((entry) =>{
            if(entry.isIntersecting){
                entry.target.classList.add('enters');
                animatedScaleObserver.unobserve(entry.target);

            }
        });

    }

);




export default{
    bind(el){
        el.classList.add('before-enters');
        animatedScaleObserver.observe(el);
    }
 
}
