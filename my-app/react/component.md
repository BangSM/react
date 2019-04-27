# Component

## 정의
개념적으로 컴포넌트는 JavaScript 함수와 유사하다.  
하나의 웹페이지를 기능단위로 조각낸것이다.
````
function Welcome() {
  return <h1>Hello, bang</h1>;
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello, 'bang'</h1>;
  }
}
````

## render
컴포넌트의 이름은 항상 대문자로 시작합니다.

````
ReactDOM.render(
  <Welcome />,
  document.getElementById('root')
);
````

## 컴포넌트의 장점
1. 유지보수가 쉽다. - 각각의 컴포넌트는 고유의 기능을 하기 때문에 에러가 발생했을 경우 해당 컴포넌트만 수정하면 되기 때문에
2. 성능향상 - 컴포넌트로 나누어 작업하게 되면 업데이트가 컴포넌트별로 일어나기 때문에 
불필요한 업데이트는 줄이고 큰 프로젝트일 수록 효과를 볼 수 있다. 

## 컴포넌트 단점
1. 코드를 조각냈기 때문에 코드양이 많아질수록 추적이 힘듭니다.
   