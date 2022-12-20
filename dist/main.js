"use strict";
(self["webpackChunkform_with_phpmailer"] = self["webpackChunkform_with_phpmailer"] || []).push([["main"],{

/***/ "./src/style/scss/default.scss":
/*!*************************************!*\
  !*** ./src/style/scss/default.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss_default_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/scss/default.scss */ "./src/style/scss/default.scss");
/* harmony import */ var _js_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/form */ "./src/js/form.js");




(0,_js_form__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ form)
/* harmony export */ });
function form() {

  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
  
    const request = async (url, data = null) => {
      console.log('data2: ', data);
      // try {
          const response = await fetch(url, {
            method: 'POST',
            // headers: {
            //   'Content-Type': 'application/json'
            // },
            body: data
            // body: JSON.stringify(data)
          }).then(data => {
            console.log(data);
        }).catch(() => {
        }).finally(() => {
            // form.reset();
        });;
  //         console.log('response: ', response);
  
  //         if (!response.ok) {
  //             throw new Error(`Could not fetch ${url}, status: ${response.status}`);
  //         }
  // console.log('response', response);
  //         const data = await response.json();
  //         console.log('data: ', data); 
  
  //         return data;
  //     } catch(e) {
  //         // throw e;
  //     }
    };
  
  
  
  
  
    const form = document.querySelector('.form');
    const submitButton = form.querySelector('button[type="submit"]');
  
    const submitForm = async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
  
      const data = {};
      formData.forEach(function(value, key){
          data[key] = value;
      });
  
      
      request('email2.php', formData)
  // console.log(form.send());
      // let cc = 
      // .then(text => {
      //   console.log('text: ', text);
  
      // })
      // console.log('cc: ', cc);
    //   fetch('http://example.com/movies.json')
    // .then((response) => response.json())
    // .then((data) => console.log(data));
  
  
  //multipart/form-data
  
    }
  
    submitButton.addEventListener('click', () => submitForm(event));
  })
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDQW1DO0FBQ25DO0FBQzZCO0FBQzdCO0FBQ0Esb0RBQUk7Ozs7Ozs7Ozs7Ozs7O0FDSlc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVCxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELElBQUksWUFBWSxnQkFBZ0I7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtLXdpdGgtcGhwbWFpbGVyLy4vc3JjL3N0eWxlL3Njc3MvZGVmYXVsdC5zY3NzP2ZlN2UiLCJ3ZWJwYWNrOi8vZm9ybS13aXRoLXBocG1haWxlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mb3JtLXdpdGgtcGhwbWFpbGVyLy4vc3JjL2pzL2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFwiLi9zdHlsZS9zY3NzL2RlZmF1bHQuc2Nzc1wiO1xyXG5cclxuaW1wb3J0IGZvcm0gZnJvbSAnLi9qcy9mb3JtJztcclxuXHJcbmZvcm0oKTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtKCkge1xyXG5cclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgXHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXN5bmMgKHVybCwgZGF0YSA9IG51bGwpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2RhdGEyOiAnLCBkYXRhKTtcclxuICAgICAgLy8gdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAvLyBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIC8vICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICBib2R5OiBkYXRhXHJcbiAgICAgICAgICAgIC8vIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGZvcm0ucmVzZXQoKTtcclxuICAgICAgICB9KTs7XHJcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2U6ICcsIHJlc3BvbnNlKTtcclxuICBcclxuICAvLyAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAvLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmZXRjaCAke3VybH0sIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UpO1xyXG4gIC8vICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhOiAnLCBkYXRhKTsgXHJcbiAgXHJcbiAgLy8gICAgICAgICByZXR1cm4gZGF0YTtcclxuICAvLyAgICAgfSBjYXRjaChlKSB7XHJcbiAgLy8gICAgICAgICAvLyB0aHJvdyBlO1xyXG4gIC8vICAgICB9XHJcbiAgICB9O1xyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XHJcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJyk7XHJcbiAgXHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG4gIFxyXG4gICAgICBjb25zdCBkYXRhID0ge307XHJcbiAgICAgIGZvcm1EYXRhLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSl7XHJcbiAgICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIFxyXG4gICAgICByZXF1ZXN0KCdlbWFpbDIucGhwJywgZm9ybURhdGEpXHJcbiAgLy8gY29uc29sZS5sb2coZm9ybS5zZW5kKCkpO1xyXG4gICAgICAvLyBsZXQgY2MgPSBcclxuICAgICAgLy8gLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ3RleHQ6ICcsIHRleHQpO1xyXG4gIFxyXG4gICAgICAvLyB9KVxyXG4gICAgICAvLyBjb25zb2xlLmxvZygnY2M6ICcsIGNjKTtcclxuICAgIC8vICAgZmV0Y2goJ2h0dHA6Ly9leGFtcGxlLmNvbS9tb3ZpZXMuanNvbicpXHJcbiAgICAvLyAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC8vIC50aGVuKChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7XHJcbiAgXHJcbiAgXHJcbiAgLy9tdWx0aXBhcnQvZm9ybS1kYXRhXHJcbiAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzdWJtaXRGb3JtKGV2ZW50KSk7XHJcbiAgfSlcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==