class App{
    constructor(){
        //variavel para guardar no array, a lista de repositorios do github
        this.repositories = [];
        //variavel para refernciar o repo-form do html
        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }
    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);
    }
    addRepository(event){
        event.preventDefault();
        this.repositories.push({
            name: 'rocketseat.com.br',
            description: 'Tire sua ideia do papel e de vida a sua startup',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'http://github.com/rocketseat/',
        });
        this.render();
    }
    render(){
        this.listEl.innerHTML = ''; //Apaga tudo que está em tela.
        this.repositories.forEach(repo => {
           let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();