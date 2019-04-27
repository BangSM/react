# Event

## 이벤트 처리
- React 이벤트는 소문자 대신 camel case 사용
- JSX를 이용하여 문자열이 아닌 함수로 이벤트 핸들러 전달
- addEventListner를 호출할 필요가 없음
- 클래스 메서드는 기본적으로 바인딩 되어 있지 않움
````
constructor(props){
  super(props)
  this.handleClick = this.handleClick.bind(this);
  // 해당 바인딩 작업을 안해주면 handleClick 함수 안에서 this가 window 혹은    undefined 를 가르켜 this.state 등과 같은 값을 참조 못함
}

handleClick(){
  ... 
}

render(){
  return(
    <button onClick={this.handleclick}>버튼</button>    
  )
}
````
- bind가 귀찮다면 화살표 함수 사용 혹은 () 없이 사용
````
handleClick = () => {
  ...
}

render(){
  return(
    <button onClick={this.handleclick}>버튼</button>    
  )
}
````

