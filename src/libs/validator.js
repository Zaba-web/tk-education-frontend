class Validator {
    constructor(){
        this.targetForm = null
        this.inputList = null
        this.isFormValid = false
        this.autoSendToServer = false
        this.inputValidationStatus = {}
    
        this.validators = {
            "minlength": item => {
                let result = item.value.length >= item.dataset.minlength ? true : false
                let correctCount = 'символ'
    
                if(item.dataset.minlength.toString()[item.dataset.minlength.toString().length - 1] > 1 && item.dataset.minlength.toString()[item.dataset.minlength.toString().length - 1] < 5) 
                    correctCount = 'символи'
                if(item.dataset.minlength.toString()[item.dataset.minlength.toString().length - 1] > 5 && item.dataset.minlength.toString()[item.dataset.minlength.toString().length - 1] <= 9) 
                    correctCount = 'символів'
    
                if(!result)
                    item.dataset.errorMessage = `Введіть принаймні ${item.dataset.minlength} ${correctCount}`
    
                return result
            },
            "email": item => {
                let result = item.value.indexOf("@") >= 1 ? true : false
            
                if(!result)
                    item.dataset.errorMessage = `Введіть коректну адресу`
    
                return result
            },
            "sameas": item => {
                const inputToCompare = document.getElementById(item.dataset.sameas)
    
                let result = item.value == inputToCompare.value ? true : false
    
                if(!result)
                    item.dataset.errorMessage = `Поля не співпадають`
    
                return result
            }
        }
    }
    setTargetForm(el, sentToServer = false){
        this.targetForm = el
        this.autoSendToServer = sentToServer

        if(this.autoSendToServer) this.setCustomSubmit()
    }
    setCustomSubmit(){
        this.targetForm.onsubmit = event => {
            event.preventDefault()
        }
    }
    deleteErrorElement(item){
        if(document.querySelector(`[data-parent = '${item.id}']`)) 
            document.querySelector(`[data-parent = '${item.id}']`).remove()
    }
    setInputAsValid(item){
        item.classList.remove("invalid-input")
        this.inputValidationStatus[item.id] = true

        this.deleteErrorElement(item)
    }
    setInputAsInvalid(item){
        item.classList.add("invalid-input")
        this.inputValidationStatus[item.id] = false

        if(document.querySelector(`[data-parent = '${item.id}']`)) return ;

        const errorElementWrapper = document.createElement("div")
        const errorElement = document.createElement("span")

        errorElementWrapper.classList.add("input-error-message-wrapper")
        errorElementWrapper.dataset.parent = item.id

        errorElement.innerText = item.dataset.errorMessage
        
        errorElementWrapper.append(errorElement)

        item.after(errorElementWrapper)
    }
    validateInput(item){
        for(let dataElement in item.dataset) {
            if(this.validators[dataElement] == undefined) continue

            let isInputValid = this.validators[dataElement](item)

            if(isInputValid) 
                this.setInputAsValid(item)
            else 
                this.setInputAsInvalid(item)
        }
    }
    setValidationObserver(){
        this.inputList = this.targetForm.querySelectorAll("input")
        Array.prototype.map.call(this.inputList, item => {
            item.onblur = ()=>{this.validateInput(item)}
            this.inputValidationStatus[item.id] = false
        })
    }
    forceValidation(){
        Array.prototype.map.call(this.inputList, item => {
            this.validateInput(item)
        })
    }
    getResult(){
        let result = true

        for(let input in this.inputValidationStatus)
            if(!this.inputValidationStatus[input]) result = false

        return result
    }
}

export default Validator