function add() {
    let task = document.getElementById('taskwritter').value;
    if (task !== "") {
        
        const li = document.createElement('li');
        li.className = "list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent";
        li.style.boxShadow = '0.5px 0.5px grey';
        
        const p = document.createElement('p');
        p.className = "lead fw-normal mb-0 bg-body-tertiary w-100 ms-n2 ps-2 py-1 rounded";
        p.textContent = task;
         
        const completeButton = document.createElement('button');
        completeButton.className = "btn btn-success btn-sm ml-3";
        completeButton.textContent = "✓";
        
        const deleteButton = document.createElement('button');
        deleteButton.className = "btn btn-danger btn-sm ml-3";
        deleteButton.textContent = "X";
        
        li.appendChild(p);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        
        storeLocally(task);
        
        deleteButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.parentElement.remove();
            deleteStoredLocally(task);
        }   
    );
    completeButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (p.style.textDecoration === 'line-through') {
            p.style.textDecoration = 'none'; 
        }
         else
        {
            p.style.textDecoration = 'line-through'; 
        }
        completedTaskonls(task);
        completeButton.disabled = true;
        }  
    );
     document.getElementById('todos').appendChild(li);
     document.getElementById('taskwritter').value = "";
    

    }


}

function checkStorage() {
    let arr = JSON.parse(localStorage.getItem("todos"));
    let comp = JSON.parse(localStorage.getItem("comp"));
    if (arr != null) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            //created the list where we will add paras:
            const li = document.createElement('li');
            li.className = "list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent";

            //created the list where we will add tasks:
            const p = document.createElement('p');
            p.className = "lead fw-normal mb-0 bg-body-tertiary w-100 ms-n2 ps-2 py-1 rounded";
            p.textContent = arr[i];

            if (comp && comp.includes(arr[i])) {
                p.style.textDecoration = 'line-through';  // Mark as completed
            }
            const completeButton = document.createElement('button');
            completeButton.className = "btn btn-success btn-sm ml-3";
           
            completeButton.textContent = "✓";

            completeButton.addEventListener('click', (e) => {
                e.preventDefault();
                const content = p.innerText;
                console.log(content);
                completedTaskonls(content);
                
                p.style.textDecoration = 'line-through';
                completeButton.disabled = true;
            }
            
            
        );
        
        const deleteButton = document.createElement('button');
        deleteButton.className = "btn btn-danger btn-sm ml-3";
        deleteButton.textContent = "X";
        
        li.appendChild(p);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        
        deleteButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.parentElement.remove();
            const taskToDelete = p.textContent; 
            deleteStoredLocally(taskToDelete);
        }
    );
    document.getElementById('todos').appendChild(li);
    
}
}
}

function storeLocally(task) {
    
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(task);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteStoredLocally(task){
    
    let todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
        todos = todos.filter(t => t !== task); 
        localStorage.setItem("todos", JSON.stringify(todos)); 
    }
    
}


function completedTaskonls(content){
let comp = JSON.parse(localStorage.getItem("comp")) || [];
comp.push(content);
localStorage.setItem("comp", JSON.stringify(comp))
}



window.onload = function () {
    checkStorage();
};



function completedTasks() {
    let comp = JSON.parse(localStorage.getItem("comp"));
    
    if (comp != null) {
        for (let i = 0; i < comp.length; i++) {
            console.log(comp[i]);
          //created the list where we will add paras:
            const li = document.createElement('li');
            li.className = "list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent";

            //created the list where we will add tasks:
            const p = document.createElement('p');
            p.className = "lead fw-normal mb-0 bg-body-tertiary w-100 ms-n2 ps-2 py-1 rounded";
            p.textContent = comp[i];
            p.style.textDecoration = 'line-through';

            const completeButton = document.createElement('button');
            completeButton.className = "btn btn-success btn-sm ml-3";
           
            completeButton.textContent = "✓";

             const deleteButton = document.createElement('button');
                deleteButton.className = "btn btn-danger btn-sm ml-3";
                deleteButton.textContent = "X";
                
                li.appendChild(p);
                li.appendChild(completeButton);
                li.appendChild(deleteButton);
                
                deleteButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.target.parentElement.remove();
                    const taskToDelete = p.textContent; 
                    deleteStoredLocally(taskToDelete);
                }
            );
            document.getElementById('comp').appendChild(li);
            
        }
    }
}


var modal = document.getElementById("myModal");
var btn = document.getElementsById("AddEvent")[0];
btn.onclick = function(event) {
	  event.preventDefault(); 
	  modal.style.display = "block";
}
span.onclick = function() {
	modal.style.display = "none";
	}

	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}
