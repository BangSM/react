#Props

## 정의 
props는 부모 컴포넌트로부터 물려받는 속성입니다.

## 사용
````
ReactDOM.render(
  <Welcome name="bang"/>,
  document.getElementById('root')
);
// 상위 컴포넌트에서 하위 컴포넌트를 render할 때 name="bang" 처럼 속성을 추가한다.

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
// 상위 컴포넌트에서 정의한 속성은 props에서 접근이 가능하다.
````
