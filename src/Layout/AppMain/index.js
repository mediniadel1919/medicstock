import { Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import Loader from "react-loaders";
import AppFooter from "../../Layout/AppFooter";

import { ToastContainer } from "react-toastify";
import ForgotPasswordBoxed from "../../Pages/UserPages/ForgotPasswordBoxed";
import ResetPasswordBoxed from "../../Pages/UserPages/ResetPasswordBoxed";

const Login = lazy(() => import("../../Pages/Login"));
const Simulation = lazy(() => import("../../Pages/Simulation"));
const Home = lazy(() => import("../../Pages/Home"));
const Parametrage = lazy(() => import("../../Pages/Parametrage"));

const Statistique = lazy(() => import("../../Pages/Statistique"));
const GestionPaiements = lazy(() => import("../../Pages/GestionPaiements"));

const Ventes = lazy(() => import("../../Pages/Ventes"));
const GestionVehicules = lazy(() => import("../../Pages/GestionVehicules"));
const CommandesFournisseurs = lazy(() =>
  import("../../Pages/CommandesFournisseurs")
);

const DEV = lazy(() => import("../../Pages/DEV/DEV"));
const ParametrageVehicules = lazy(() =>
  import("../../Pages/ParametrageVehicules")
);
const SocietesPartenaires = lazy(() =>
  import("../../Pages/SocietesPartenaires")
);

const AppMain = () => {
  const logged = JSON.parse(sessionStorage.getItem("loggedId"));
  return (
    <Fragment>
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <div className="text-center">
                <Loader type="ball-pulse-sync" />
              </div>
              <h6 className="mt-3">Veuillez patientez s'il vous plaît...</h6>
            </div>
          </div>
        }
      >
        <Route
          path="/pages/forgot-password-boxed"
          component={ForgotPasswordBoxed}
        />
      </Suspense>
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <div className="text-center">
                <Loader type="ball-pulse-sync" />
              </div>
              <h6 className="mt-3">Veuillez patientez s'il vous plaît...</h6>
            </div>
          </div>
        }
      >
        <Route path="/resetPassword" component={ResetPasswordBoxed} />
      </Suspense>
      {logged ? (
        <Fragment>
          {/* Parametrage des véhicules */}

          <Suspense
            fallback={
              <div className="loader-container">
                <div className="loader-container-inner">
                  <div className="text-center">
                    <Loader type="ball-pulse-rise" />
                  </div>
                  <h6 className="mt-5">
                    Veuillez patientez s'il vous plaît...
                    {/*    <small>
                      Because this is a demonstration we load at once all the
                      Forms examples. This wouldn't happen in a real live app!
                    </small> */}
                  </h6>
                </div>
              </div>
            }
          >
            <Route
              path="/parametrage-vehicules"
              component={ParametrageVehicules}
            />
          </Suspense>

          {/* Societes Partenaires */}

          <Suspense
            fallback={
              <div className="loader-container">
                <div className="loader-container-inner">
                  <div className="text-center">
                    <Loader type="ball-pulse-rise" />
                  </div>
                  <h6 className="mt-5">
                    Veuillez patientez s'il vous plaît...
                    {/* <small>
                      Because this is a demonstration we load at once all the
                      Forms examples. This wouldn't happen in a real live app!
                    </small> */}
                  </h6>
                </div>
              </div>
            }
          >
            <Route
              path="/societes-partenaires"
              component={SocietesPartenaires}
            />
          </Suspense>

          {/* Les Ventes */}

          <Suspense
            fallback={
              <div className="loader-container">
                <div className="loader-container-inner">
                  <div className="text-center">
                    <Loader type="ball-pulse-rise" />
                  </div>
                  <h6 className="mt-5">
                    Veuillez patientez s'il vous plaît...
                    {/*   <small>
                      Because this is a demonstration we load at once all the
                      Forms examples. This wouldn't happen in a real live app!
                    </small> */}
                  </h6>
                </div>
              </div>
            }
          >
            <Route path="/ventes" component={Ventes} />
          </Suspense>

          {/* Commandes Fournisseurs */}

          <Suspense
            fallback={
              <div className="loader-container">
                <div className="loader-container-inner">
                  <div className="text-center">
                    <Loader type="ball-pulse-rise" />
                  </div>
                  <h6 className="mt-5">
                    Veuillez patientez s'il vous plaît...
                  </h6>
                </div>
              </div>
            }
          >
            <Route
              path="/commandes-fournisseurs"
              component={CommandesFournisseurs}
            />
          </Suspense>

          {/* Gestion des véhicules */}

          <Suspense
            fallback={
              <div className="loader-container">
                <div className="loader-container-inner">
                  <div className="text-center">
                    <Loader type="ball-pulse-rise" />
                  </div>
                  <h6 className="mt-5">
                    Veuillez patientez s'il vous plaît...
                    {/*   <small>
                      Because this is a demonstration we load at once all the
                      Forms examples. This wouldn't happen in a real live app!
                    </small> */}
                  </h6>
                </div>
              </div>
            }
          >
            <Route path="/gestion-vehicules" component={GestionVehicules} />
          </Suspense>
          {/* Gestion des paiements */}

          <Suspense
            fallback={
              <div className="loader-container">
                <div className="loader-container-inner">
                  <div className="text-center">
                    <Loader type="ball-pulse-rise" />
                  </div>
                  <h6 className="mt-5">
                    Veuillez patientez s'il vous plaît...
                    {/*   <small>
                      Because this is a demonstration we load at once all the
                      Forms examples. This wouldn't happen in a real live app!
                    </small> */}
                  </h6>
                </div>
              </div>
            }
          >
            <Route path="/gestion-paiements" component={GestionPaiements} />
          </Suspense>

          {/* Statistique */}

          <Suspense
            fallback={
              <div className="loader-container">
                <div className="loader-container-inner">
                  <div className="text-center">
                    <Loader type="ball-pulse-rise" />
                  </div>
                  <h6 className="mt-5">
                    Veuillez patientez s'il vous plaît...
                    {/*    <small>
                      Because this is a demonstration we load at once all the
                      Forms examples. This wouldn't happen in a real live app!
                    </small> */}
                  </h6>
                </div>
              </div>
            }
          >
            <Route path="/statistique" component={Statistique} />
          </Suspense>

          {/* Parametrage */}

          <Suspense
            fallback={
              <div className="loader-container">
                <div className="loader-container-inner">
                  <div className="text-center">
                    <Loader type="ball-pulse-sync" />
                  </div>
                  <h6 className="mt-3">
                    Veuillez patientez s'il vous plaît...
                  </h6>
                </div>
              </div>
            }
          >
            <Route path="/parametrage" component={Parametrage} />
          </Suspense>

          {/* Login */}

          <Suspense
            fallback={
              <div className="loader-container">
                <div className="loader-container-inner">
                  <div className="text-center">
                    <Loader type="ball-pulse-sync" />
                  </div>
                  <h6 className="mt-3">
                    Veuillez patientez s'il vous plaît...
                  </h6>
                </div>
              </div>
            }
          >
            <Route path="/login" component={Login} />
          </Suspense>
          {/* <Suspense
            fallback={
              <div className="loader-container">
                <div className="loader-container-inner">
                  <div className="text-center">
                    <Loader type="ball-pulse-sync" />
                  </div>
                  <h6 className="mt-3">
                    Please wait while we load the Login Page
                  </h6>
                </div>
              </div>
            }
          >
            <Route
              path="/pages/forgot-password-boxed"
              component={ForgotPasswordBoxed}
            />
          </Suspense> */}
          {/* <Suspense
            fallback={
              <div className="loader-container">
                <div className="loader-container-inner">
                  <div className="text-center">
                    <Loader type="ball-pulse-sync" />
                  </div>
                  <h6 className="mt-3">
                    Please wait while we load the Login Page
                  </h6>
                </div>
              </div>
            }
          >
            <Route path="/resetPassword" component={ResetPasswordBoxed} />
          </Suspense> */}
          {/* Home */}

          <Suspense
            fallback={
              <div className="loader-container">
                <div className="loader-container-inner">
                  <div className="text-center">
                    <Loader type="ball-pulse-sync" />
                  </div>
                  <h6 className="mt-3">
                    Veuillez patientez s'il vous plaît...
                  </h6>
                </div>
              </div>
            }
          >
            <Route path="/home" component={Home} />
          </Suspense>
          {/* Simulation*/}
          <Suspense
            fallback={
              <div className="loader-container">
                <div className="loader-container-inner">
                  <div className="text-center">
                    <Loader type="ball-pulse-sync" />
                  </div>
                  <h6 className="mt-3">
                    Veuillez patientez s'il vous plaît...
                  </h6>
                </div>
              </div>
            }
          >
            <Route path="/simulation" component={Simulation} />
          </Suspense>

          <Route exact path="/" render={() => <Redirect to="/login" />} />

          <ToastContainer />
        </Fragment>
      ) : (
        <Fragment>
          <Suspense
            fallback={
              <div className="loader-container">
                <div className="loader-container-inner">
                  <div className="text-center">
                    <Loader type="ball-pulse-sync" />
                  </div>
                  <h6 className="mt-3">
                    Veuillez patientez s'il vous plaît...
                  </h6>
                </div>
              </div>
            }
          >
            <Route path="/" component={Login} />
          </Suspense>
        </Fragment>
      )}
    </Fragment>
  );
};

export default AppMain;
