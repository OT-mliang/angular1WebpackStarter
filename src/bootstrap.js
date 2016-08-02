import angular from 'angular';

import root from "./app/app";


// var options = {
//   strictDi:false
// };

// if (process.env.ENV === 'production') {
//     options.strictDi = true;
// }

angular.element(document).ready(function () {  
    angular.bootstrap(document, [root]);
});