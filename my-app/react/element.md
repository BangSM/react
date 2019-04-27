# Element

## 정의
Element는 React의 가장 작은 단위이며 화면에 표시할 내용을 기술합니다.  
React의 Element는 일반 객체이며 쉽게 생성이 가능합니다.  
````
 const el = <h1>Hello, world</h1>
````
React 엘리먼트는 불변객체입니다. 엘리먼트를 생성한 이후에는 해당 엘리먼트의 자식이나 속성을 변경할 수 없습니다.
  
## Element render
React로 구현된 애플리케이션은 일반적으로 하나의 루트 DOM 노드가 있습니다. React를 기존 앱에 통합하려는 경우 원하는 만큼 많은 수의 독립된 루트 DOM 노드가 있을 수 있습니다.

React 엘리먼트를 루트 DOM 노드에 렌더링하려면 둘 다 ReactDOM.render()로 전달하면 됩니다.
````
  const element = <h1>Hello, world</h1>;
  ReactDOM.render(element, document.getElementById('root'));  
  =>
  <div id="root>
    <h1>Hello, world</h1>
  </div>
````