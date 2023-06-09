import { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) =>{
        e.preventDefault()

        if (!(presupuesto) || Number(presupuesto) < 0) {
            setMensaje('No es un presupuesto válido')
            return
        }
        
        setMensaje('')
        setPresupuesto(Number(presupuesto))
        setIsValidPresupuesto(true)

    }
    
    return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className="formulario" >
            <div className='campo'>
                <label htmlFor="">Definir presupuesto</label>
                <input 
                    type="number"
                    value={presupuesto}
                    className='campo'
                    placeholder='Añade tu presupuesto'
                    onChange = { (e) => setPresupuesto(e.target.value)}
                />
            </div>
            <input type="submit" value="Añadir" />
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    
    </div>
  )
}

export default NuevoPresupuesto