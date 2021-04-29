import { useState } from 'react';
import { useForm } from 'react-hook-form';
import usersService from '../../API/services/user';
import validations from '../../validations/registerValidations';
import Button from '../Button/index';
import Input from '../Input';

const Register = (
    {
        className,
        setToken
    }
    ) => {
    const [loading, setLoading] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ errorServer, setErrorServer ] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);
        const registerUser = async () => {
          try {
            const response = await usersService.register(data);
            window.localStorage.setItem('_Token', response.data.token);
            setToken(response.data.token);
          } catch (err) {
             setLoading(false);
            if(err){
              console.log("Error" + err)
              setErrorServer(true);
            } 
          }
        };
        registerUser();
      };

    return ( 
        <div className={`container p-4 d-flex justify-content-center ${className}`}>
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-body rounded">
                <div className="col-12 col-md-8">
                    <h3 className="text-center pb-3">Registrate</h3>
                </div>
                <div className="col-12 col-md-9">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <Input
                        className="col-12"
                        name="email"
                        type="email"
                        register={register}
                        validation={validations.email}
                        error={errors.email}
                        />

                        <Input
                        className="col-12"
                        name="pass"
                        type="password"
                        placeholder="Contraseña"
                        register={register}
                        validation={validations.pass}
                        error={errors.pass}
                        />

                        <Button type="submit" text="ENVIAR" loading={loading} />
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Register;