import {useEffect, useState} from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

/* btnText está vindo do componente pai -> NewProject */
function ProjectForm({btnText}){

    const [categories, setCategories] = useState([])

    /* useEffect para requisitar uma única vez, e não um loop infinito de vezes */
    useEffect(() => {
        /* Fazendo um request com FetchAPI */
        fetch("http://localhost:5000/categories", {
            method:"GET",
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json()) /* Transformando a resposta da API em JSON */
        .then((data) => {
            setCategories(data) /* Pegando os dados em JSON e colocando no setCategories*/
        })
        .catch((err) => console.log(err))
    }, [])

    return(
        <form className={styles.form}>

            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto..."
                /* handleOnChange={handleChange}
                value={project.name} */
            />

            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total..."
               /*  handleOnChange={handleChange}
                value={project.budget} */
            />

            <Select 
                name="category_id"
                text="Selecione a categoria"
                options={categories}
            />

            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm