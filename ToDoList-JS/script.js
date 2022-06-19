const input = document.querySelector('[data-input]');
const addBtn = document.querySelector('[data-btn]');
const info = document.querySelector('.info');
const toDoList = document.querySelector('.taskToDoList');



const numberArr = [1,2,3,4,5,6,7,8,9,10];

const addTask = ()=>{
    if(numberArr[0]){

        if(input.value.length > 2){
            const liElement = document.createElement('li');
            liElement.textContent = input.value;
            liElement.setAttribute('data-key', `${numberArr[0]}`)
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('deleteBtn');
            deleteBtn.textContent = "usuń z listy";
            deleteBtn.setAttribute('data-key', `${numberArr[0]}`);
            
            liElement.appendChild(deleteBtn);
            toDoList.appendChild(liElement);
        
            input.value = '';
            numberArr.splice(0,1);
        
            document.querySelectorAll('.deleteBtn').forEach(item => item.addEventListener('click', removeTask
            ));

            info.textContent = "";
        }else{
            info.style.color = "darkred";
            info.style.fontSize = "30px";
            info.textContent = 'zadanie musi mieć więcej znaków niż 2';
        }
   

    }else{
        console.log(info);
        info.style.color = "red";
        info.style.fontSize = "30px";
        info.textContent = 'Nie możesz dodać więcej niż 10 pozycji do wykonania, może wykonaj jakieś zadanie zanim dodasz kolejne?'
    }

    
 
}

const removeTask = (e)=>{
    
    const index = e.target.dataset.key;
    
    
    
    document.querySelector(`li[data-key="${index}"]`).remove();

    numberArr.push(Number(index));

    if(numberArr[0]){
        info.textContent ="";
    }
   
}


addBtn.addEventListener('click', addTask);


