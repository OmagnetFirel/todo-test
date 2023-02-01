import React from 'react';
import "./index.scss"


function CriarTarefa(){

  return (
    <div>
        <h1>Create Task</h1>
        <form>
            <input type="text" placeholder="Adicionar tarefa" />
            <button type="submit">Adicionar</button>
        </form>
    </div>
  )
}

export default CriarTarefa;