//v0.9

//DEV MODE

const env = {
  ROOT: "static/css/",
  CSSDIRECTORY: 'static/css/', //using
  ROUTEPATH: '/',
  ENVIRONMENT: 'DEVELOPMENT',
  WEBSERVERADDRESS: "",
  SAVEAPPLICATIONMODULE: "FACTIGIS_DESA",
  SAVEAPPLICATIONNAME: 'REACT_FACTIGIS_DESA',
  BUILDFOR: "INTERNA",
  SSL: 'http://'
}


//TEST MODE - INTERNO
/*
const env = {
  ROOT: "css/",
  CSSDIRECTORY: 'css/', //using
  ROUTEPATH: '/FACTIGIS',
  ENVIRONMENT: 'DEVELOPMENT',
  WEBSERVERADDRESS: "",
  SAVEAPPLICATIONMODULE: "FACTIGIS_DESA",
  SAVEAPPLICATIONNAME: 'REACT_FACTIGIS_DESA',
  BUILDFOR: "EXTERNA",
  SSL: 'http://'
}
*/
/*
//PROD MODE - EXTERNO
const env = {
  ROOT: "css/",
  CSSDIRECTORY: 'css/', //using
  ROUTEPATH: '/FACTIGIS',
  ENVIRONMENT: 'PRODUCTION',
  WEBSERVERADDRESS: "",
  SAVEAPPLICATIONMODULE: "FACTIGIS_PROD",
  SAVEAPPLICATIONNAME: 'REACT_FACTIGIS_PROD',
  BUILDFOR: "INTERNA",
  VERSION: "_V0.8(PROV)",
  SSL: 'http://'
}
*/

//prod mode: interno : para app interna.

/*
const env = {
  ROOT: "css/",
  CSSDIRECTORY: 'css/',
  ROUTEPATH: '/FACTIGIS',
  ENVIRONMENT: 'PRODUCTION',
  WEBSERVERADDRESS: "",
  SAVEAPPLICATIONMODULE: "FACTIGIS_PROD",
  SAVEAPPLICATIONNAME: 'REACT_FACTIGIS_PROD',
  SSL: 'http://'
}
*/

export default env;
