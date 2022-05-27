let calculator = document.querySelector('.calculator') 
let keys = document.querySelector('.calcKeys') 

keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        let key = e.target 
        let action = key.dataset.action 

        if(!action) {
            console.log('number key!')
        } 
        if (
            action == 'add' || 
            action == 'subtract' || 
            action == 'multiply' || 
            action == 'divide') {
                console.log('operator key')
        } 
        if(action === 'decimal'){
            console.log('decimal key')
        } 
        if(action === 'clear'){
            console.log('clear key')
        } 
        if(action === 'decimal'){
            console.log('equal key')
        }
        
    }
})