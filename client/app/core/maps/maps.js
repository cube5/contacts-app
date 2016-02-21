import 'angular-google-maps';

export default angular.module('maps', ['uiGmapgoogle-maps'])
  .config((uiGmapGoogleMapApiProvider) => {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyC9vJ3ZS3-LR7FMHzyQtNcnlE5TxlLXxp0',
      v: '3.20',
      libraries: 'places'
    });
  }).name;