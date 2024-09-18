let count = 0;
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
btns.forEach((btn) => {
    console.log(btn)
    btn.addEventListener('click', (e) => {
        console.log(e.currentTarget)
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--
        }
        else if(styles.contains('increase')){
            count++
        }
        else if(styles.contains('decrease5')){
            count-=5
        }    
        else if(styles.contains('increase5')){
            count+=5
        }  
        else if(styles.contains('random')){
            count = Math.floor(Math.random() * 60 ) -30
        }  
        else{count=0}
        if (count > 0){
            value.style.color="green"
        }
        if(count < 0){
            value.style.color="red"
        }
        if(count == 0){
            value.style.color="black"
        }
        
        value.textContent= count
    })
})