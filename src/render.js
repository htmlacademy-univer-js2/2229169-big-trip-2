const RenderPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
    AFTEREND: 'afterend',
<<<<<<< HEAD
  };
  
  function createElement(template) {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;
  
    return newElement.firstElementChild;
  }
  
  function render(component, container, place = RenderPosition.BEFOREEND) {
    container.insertAdjacentElement(place, component.getElement());
  }
  
  export { RenderPosition, createElement, render };
=======
};
  
function createElement(template) {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;
    return newElement.firstElementChild;
}
  
function render(component, container, place = RenderPosition.BEFOREEND) {
    container.insertAdjacentElement(place, component.getElement());
}
  
export { RenderPosition, createElement, render };
>>>>>>> 21766160992a6645f7c083a1ed5f72f728623d48
