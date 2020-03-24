var obj = {
    id: 1,
    title: 'task 1',
    type: 'task',
    state: 'todo',
    priority: 'high',
  
    allowFor: [
        'back_end',
        'front_end',
        'function_test',
        'performance_test'
    ],
    description: 'task 1',
    createdBy: 'Joo',
    assignee: 'joo',
    estimate: '20/03/2020'
   
};
var form = document.form;
function showInfor() {
    const pre = document.getElementsByTagName('pre')[0];
    var myJSON = JSON.stringify(obj,null,4);
    pre.innerText = myJSON;
}
function showInforForm() {
    var main = document.getElementsByClassName('main')[0];
    main.style.display="block";
    form.title.value=obj.title;
    form.priority.value=obj.priority;
    form.type.value=obj.type;
    form.state.value=obj.state;
    form.description.value=obj.description;
    form.createdBy.value=obj.createdBy;
    form.assignee.value=obj.assignee;
    form.estimate.value=obj.estimate;
    for(let i = 0; i < obj.allowFor.length; i++){
        document.getElementById(obj.allowFor[i]).checked = true;
    }
}
function saveForm(){
    obj.title= form.title.value;
    obj.description = form.description.value;
    obj.type = form.type.value;
    obj.priority = form.priority.value;
    obj.createdBy = form.createdBy.value;
    obj.assignee = form.assignee.value;
    obj.estimate = form.estimate.value;
    obj.state = form.state.value;
    obj.allowFor = addCheckbox();
    closeInforForm();
    showInfor();
}
function closeInforForm(){
    var main = document.getElementsByClassName('main')[0];
    main.style.display="none";
}
function addCheckbox() {
    var check = document.getElementsByName('allowFor');
    let allowFor = [];
    for (i = 0; i < check.length; i++) {
        if (check[i].checked) {
            allowFor.push(check[i].value);
        }
    }
    
    return allowFor;
}
