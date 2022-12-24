        document.querySelector('#push').onclick = 
        function(){
            if(document.querySelector('#newtask input').value.length == 0)
            {
                alert("Lütfen Yazı giriniz..."); 
            }
            else{
                document.querySelector('#tasks').innerHTML
                 += `<div class="task"><span id="taskname">${document.querySelector('#newtask input').value}</span><button class="delete">X</button></div>`;
                var current_tasks = document.querySelectorAll('.delete');
                for (var i = 0; i < current_tasks.length; i++) {
                    current_tasks[i].onclick = function (){
                        this.parentNode.remove();
                    }
                }

                var tasks = document.querySelectorAll('#taskname');
                for (var i = 0; i < current_tasks.length; i++) {
                    tasks[i].onclick = function (){
                    this.classList.toggle('completed');
                    }
                }

                document.querySelector('#newtask input').value = "";
                

                }
        }

        document.querySelector('#all').onclick = function(){
                const elements = document.getElementsByClassName("task");
                while(elements.length > 0){
                    elements[0].parentNode.removeChild(elements[0]);
                }
            }