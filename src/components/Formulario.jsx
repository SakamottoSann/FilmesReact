import { doc } from '@firebase/firestore';
import React from 'react'
import { useForm } from 'react-hook-form';
import { db } from '../conectFB';

const Formulario = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm();

    const onSubmit = (data) => {

        db.collection('filmes').doc().set(data);

        setValue("titulo","")
        setValue("link","")
        setValue("sinopse","")

        alert('filme cadastrado com sucesso')
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ margin: '30px' }}>

            {/* titilo */}

            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fas fa-film py-1"></i>
                    </span>
                </div>
                <input type="text" className="form-control" placeholder="Titulo Do Filme"
                    {...register("titulo", {
                        required: true,
                        minLength: 2,
                    })} />
            </div>

            {/* Trailer */}

            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="far fa-eye py-1"></i>
                    </span>
                </div>
                <input type="text" className="form-control" placeholder="Link do Trailer"
                    {...register("link", {
                        required: true,
                        minLength: 10,
                    })} />
            </div>

            {/* Sinopse */}

            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="far fa-comments py-1"></i>
                    </span>
                </div>
                <textarea rows='1' type="text" className="form-control" placeholder="Sinopse"
                    {...register("sinopse", {
                        required: true,
                        minLength: 10,
                    })} />
            </div>
            {/* Botao Cadastrar */}

            <input type='submit' style={{ width: '100%' }} className='btn btn-success btn-block' value='Cadastrar' />

            <div
                className={
                    (errors.titulo || errors.link || errors.sinopse) &&
                    "alert alert-danger"
                }
            >
                {errors.titulo && (
                    <span>Informe o Titulo; </span>
                )}
                {errors.link && <span>Informe o url do trailer; </span>}
                {errors.sinopse && (
                    <span>Infomer a Sinopse </span>
                )}
            </div>
        </form>
    )
}

export default Formulario;