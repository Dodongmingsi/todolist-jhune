const myTodolist=[//this should be an array of objects, we can contain objects in each index of the array
        //name: 'hello',
        //dueDate: '2002-12-22'
       ];

       function render(){
            let i=0;
            let todoHTML='';
            while(i<myTodolist.length)
            {
                const todoObject =myTodolist[i];//we are storing object in each index i of the array so name it todoObject to avoid confusion
                const name = todoObject.name ; //store the values in a new variable with same name to avoid confusion
                const dueDate = todoObject.dueDate ;

                         // we can add a javascript code inside the onclick while inside the variable
                let html=`<div class="todo-name">${name}</div>
                        <div class="todo-duedate">${dueDate}</div>
                    <button onclick="myTodolist.splice(${i},1); render();" class="delete-todo-button">Delete</button> 
                 `;               //add the newlist added list to the html file using that value
                todoHTML +=html; // combine all html generated elements <p> content </p> and place it in a todoHTML variable to render using dom
                i++;
                
            }
            document.querySelector('.todo-list').innerHTML=todoHTML;
            console.log(todoHTML);
    }
        function addlist(){
                
               const Todo_name= document.querySelector('.todo-input').value;
              
               const date_input = document.querySelector('.js-due-date-input').value;
               
               myTodolist.push(
                {name:Todo_name,
                dueDate:date_input
                //name,dueDate
                }
                ); //insert the inputted user input value to the array naamed mytodolist
                
               document.querySelector('.todo-input').value='';
               render();//after adding new inputs call this function to display in the html
        }