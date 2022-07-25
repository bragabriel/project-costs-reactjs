import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'

function NewProject(){

    const history = useNavigate(); /* Utilizado para redirect */

    function createPost(project){
        //iniciando o cost e services
        project.cost = 0;
        project.service = [];

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project) //mandando como string
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            //redirect
            history('/projects', { message: 'Projeto criado com sucesso!' })
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject