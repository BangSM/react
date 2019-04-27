# State

## 정의
State는 컴포넌트의 내부에 존재하는 상태값이다. 
state의 값이 변경되면 해당 컴포넌트는 다시 render 된다.
props와의 차이점은 값을 변경 시킬 수 있다는 것이며 그렇기 때문에 동적인 데이터를 다룰때
주로 사용한다.

## 값 변경
state의 경우 setState를 사용해서 값을 변경해야만 컴포넌트가 다시 render 된다.
````
class Test extends React.Component{
  state = {
    a : 1
  }

  this.setState({
    a : 2
  })
  
  state = {a:2} // render 안함
}
````