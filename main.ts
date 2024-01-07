import inquirer from "inquirer";
//TO DO LIST using INQUIRER in TS

let toDo = async () => {
    let loop = true
    while(loop){
    const choice = await inquirer.prompt([{
        type: 'list',
        name:'choiceUser',
        message: 'Choose an action',
        choices:['Enter', 'Exit']
    }])
    switch(choice.choiceUser){
        case 'Enter':
            const newTasks = await inquirer.prompt([{
                type: 'input',
                name:'newTasks1',
                message: 'Enter New Tasks'
            },
            {
                type: 'input',
                name:'newTasks2',
                message:'Enter new Tasks'
            },
            {
                type: 'input',
                name:'newTasks3',
                message: 'Enter New Tasks'
            }        
        ])
        loop=false
        const leftTasks = await inquirer.prompt([{
            type:'checkbox',
            name:'leftOver',
            message: 'Your current tasks',
            choices:[newTasks.newTasks1,newTasks.newTasks2,newTasks.newTasks3]
        }])
        console.log('You completed the following tasks:\n'+leftTasks.leftOver)
        break;
        case 'Exit':
            loop=false 
            break;
        }
    }
}
toDo()
