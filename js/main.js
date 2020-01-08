const app = new Vue({
    el: '#app',
    data: {
        title: 'CRUD using Vue.js',
        tasks: [],
        newTask: '',
    },
    methods: {
        addTask(e) {
            this.tasks.push({
                name: this.newTask,
                state: false
            });
            this.newTask = ''
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        },
        edit(index) {
            // console.log('editar ', index);
            let task = this.tasks[index];
            task.state = !task.state;
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        },
        remove(index) {

            let r = confirm('You are removing a task, once you delete it, you cannot undo this action.');
            if (r) {
                this.tasks.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(this.tasks))
            };
        },
        search(e) {
            let value = e.target.value.toLowerCase()
            // console.log(app.tasks)
            this.tasks.forEach((task, i) => {
                let text = task.name.toLowerCase();

                if (text.indexOf(value) !== -1) {
                    console.log(this.tasks[i].name, this.tasks[i].state);
                    // document.querySelectorAll('.toast')[]
                } else {
                    console.log(`No hubo resultados para '${value}'`);
                }
            });
        }
    },
    created() {
        let storage = localStorage.getItem('tasks');
        // console.log(storage);

        if (storage === null) {
            this.tasks = [];
        } else {
            this.tasks = JSON.parse(storage);
        }
    }
})