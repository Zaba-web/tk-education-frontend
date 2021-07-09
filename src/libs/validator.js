import API from '@/libs/api'

class Validator {
    constructor(){
        this.targetForm = null
        this.inputList = null
        this.autoSendToServer = false
        this.inputValidationStatus = {}
    
        this.validators = {
            minlength: item => {
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
            email: item => {
                let result = item.value.indexOf("@") >= 1 ? true : false
            
                if(!result)
                    item.dataset.errorMessage = `Введіть коректну адресу`
    
                return result
            },
            sameas: item => {
                const inputToCompare = document.getElementById(item.dataset.sameas)
    
                let result = item.value == inputToCompare.value ? true : false
    
                if(!result)
                    item.dataset.errorMessage = `Поля не співпадають`
    
                return result
            }
        }
    }

    setCustomSubmit(method, path, filfilled, rejected){
        this.targetForm.onsubmit = event => {
            event.preventDefault()

            this.forceValidation()

            if(!this.getResult()) return ;

            const formData = {}
            
            Array.prototype.map.call(this.inputList, input => {
                formData[input.getAttribute('name')] = input.value
            })

            const api = new API()
            api.authorize()
            // if specified method exists
            if(api[method]) {
                return api[method](path, formData).then(response => {
                    filfilled(response)
                }).catch(error => {
                    rejected(error)
                })
            }
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

    forceValidation(){
        Array.prototype.map.call(this.inputList, item => {
            this.validateInput(item)
        })
    }

    // public methods

    setTargetForm(el, sentToServer = false, method, path, filfilled, rejected){
        this.targetForm = el
        this.autoSendToServer = sentToServer

        if(this.autoSendToServer) 
            this.setCustomSubmit(method, path, filfilled, rejected)
    
    }

    setValidationObserver(){
        this.inputList = this.targetForm.querySelectorAll("input")
        Array.prototype.map.call(this.inputList, item => {
            item.onblur = ()=>{this.validateInput(item)}
            this.inputValidationStatus[item.id] = false
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