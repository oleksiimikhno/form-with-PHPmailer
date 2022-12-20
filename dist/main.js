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
/* harmony export */   "default": () => (/* binding */ sendForm)
/* harmony export */ });
function sendForm() {
  
    document.addEventListener('DOMContentLoaded', () => {
    
      const request = async (url, data = null) => {
        console.log('url: ', url);
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
        
        request('./controller/email2.php', formData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDQWE7QUFDYjtBQUNtQztBQUNuQztBQUNpQztBQUNqQztBQUNBLG9EQUFROzs7Ozs7Ozs7Ozs7OztBQ05PO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsV0FBVztBQUNYLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsSUFBSSxZQUFZLGdCQUFnQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtLXdpdGgtcGhwbWFpbGVyLy4vc3JjL3N0eWxlL3Njc3MvZGVmYXVsdC5zY3NzP2ZlN2UiLCJ3ZWJwYWNrOi8vZm9ybS13aXRoLXBocG1haWxlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mb3JtLXdpdGgtcGhwbWFpbGVyLy4vc3JjL2pzL2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFwiLi9zdHlsZS9zY3NzL2RlZmF1bHQuc2Nzc1wiO1xyXG5cclxuaW1wb3J0IHNlbmRGb3JtIGZyb20gJy4vanMvZm9ybSc7XHJcblxyXG5zZW5kRm9ybSgpOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlbmRGb3JtKCkge1xyXG4gIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIFxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXN5bmMgKHVybCwgZGF0YSA9IG51bGwpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygndXJsOiAnLCB1cmwpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhMjogJywgZGF0YSk7XHJcbiAgICAgICAgLy8gdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAvLyBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgLy8gICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgICBib2R5OiBkYXRhXHJcbiAgICAgICAgICAgICAgLy8gYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIGZvcm0ucmVzZXQoKTtcclxuICAgICAgICAgIH0pOztcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlOiAnLCByZXNwb25zZSk7XHJcbiAgICBcclxuICAgIC8vICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmV0Y2ggJHt1cmx9LCBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVzcG9uc2UnLCByZXNwb25zZSk7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhOiAnLCBkYXRhKTsgXHJcbiAgICBcclxuICAgIC8vICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAvLyAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAvLyAgICAgICAgIC8vIHRocm93IGU7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XHJcbiAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKTtcclxuICAgIFxyXG4gICAgICBjb25zdCBzdWJtaXRGb3JtID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7fTtcclxuICAgICAgICBmb3JtRGF0YS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpe1xyXG4gICAgICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICByZXF1ZXN0KCcuL2NvbnRyb2xsZXIvZW1haWwyLnBocCcsIGZvcm1EYXRhKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN1Ym1pdEZvcm0oZXZlbnQpKTtcclxuICAgIH0pXHJcbiAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==