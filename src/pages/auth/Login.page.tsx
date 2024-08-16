import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectAuth } from "../../redux/auth/auth.slice";
import { useAuth } from "../../hooks/useAuth";
import { selectUI } from "../../redux/ui/ui.slice";

type FormValues = {
    username: string;
    password: string;
};

export const LoginPage = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { AuthLogin } = useAuth()

    const { mode, error: LoginError } = useAppSelector(selectUI)

    const { userInfo } = useAppSelector(selectAuth);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data): void => dispatch(AuthLogin(data.username, data.password));

    useEffect((): void => {
        if (userInfo) {
            navigate("/");
        }
    }, [userInfo, navigate]);

    return (

        <section className={`${mode ? 'bg-dark' : 'bg-light'} py-3 py-md-5`} style={{ height: "100vh" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="card border border-light-subtle rounded-3 shadow-sm"
                            style={{
                                backgroundColor: mode ? '#333333' : 'white',
                                boxShadow: mode ? '0 14px 25px rgba(0, 0, 0, 0.16)' : '',
                            }}>
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <div className="text-center mb-3">
                                    <Link to="/login">
                                        <img
                                            src="./logo.png"
                                            alt="Logo"

                                        />
                                    </Link>
                                </div>
                                <h2 className={`fs-6 fw-normal text-center ${mode ? 'text-light' : 'text-dark'} mb-4`}>
                                    Oficial Docs
                                </h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row gy-2 overflow-hidden">
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    {...register("username", {
                                                        required: true,
                                                        pattern: {
                                                            value: /^[a-zA-Z0-9._-]{3,20}$/,
                                                            message: "Debe ingresar un nombre de usuario válido",
                                                        },
                                                    })}
                                                    className={`form-control ${errors.username && `is-invalid`}`}
                                                    placeholder="Correo electrónico"
                                                />
                                                <label htmlFor="Usuario" className="form-label">
                                                    Usuario
                                                </label>
                                                {errors.username?.type === "required" && <div className="invalid-feedback">{`El campo es requerido`}</div>}
                                                {errors.username?.message && <div className="invalid-feedback">{errors.username?.message}</div>}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type={"password"}
                                                    {...register("password", {
                                                        required: true,
                                                        minLength: 6,
                                                    })}
                                                    className={`form-control ${errors.password && `is-invalid`}`}
                                                    placeholder="Contraseña"
                                                />
                                                {errors.password?.type === "required" && <div className="invalid-feedback">Este campo es requerido</div>}
                                                {errors.password?.type === "minLength" && (
                                                    <div className="invalid-feedback">{`Debe ingresar al menos 6 caracteres`}</div>
                                                )}
                                                <label htmlFor="password" className="form-label">
                                                    Contraseña
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">

                                            <div className="d-grid my-3">
                                                <button
                                                    className="btn btn-primary btn-lg"
                                                    type="submit"
                                                    style={{ backgroundColor: '#6D51C9', border: 'none' }}
                                                >
                                                    Log in
                                                </button>
                                            </div>
                                            {
                                                LoginError ? (
                                                    <div className="alert alert-danger" role="alert">
                                                        {LoginError}
                                                    </div>
                                                ) : ''
                                            }
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
