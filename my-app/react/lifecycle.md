# LifeCycle

## 정의 
컴포넌트가 생성되고, 업데이트 되고, 파괴 될 때 호출되는 API  

## constructor 
- 컴포넌트 생성자 함수 - 컴포넌트가 생성될 때마다 가장 먼저 호출

## componentWillMount
- 컴포넌트가 마운트 되기전 호출 - react 16.3 이후 부턴 deprecated 
  
## componentDidMount
- 컴포넌트가 마우트 될 때 호출 - 주로 컴포넌트에서 필요로 하는 데이터를 호출 하거나 외부 라이브러리를 연동할 때, DOM의 속성을 읽거나 직접 변경할 때 사용

## componentDidUpdate
- 컴포넌트가 render 된 후 컴포넌트의 상태에 변화가 있을 때 호출
````
componentDidUpdate(prevProps, prevState, snapshot) {

}
````
  
## componentWillUpdate
- shouldComponentUpdate의 return 값이 true인 경우에만 호출 - 애니메이션 초기화, 이벤트 리스너 제거 할 시 주로 사용했으나 16.3 버전 부터 deprecated
  
## shouldComponentUpdate
- 부모의 컴포넌트가 render 하면 자식 컴포넌트 역시 render를 하게 되는데 
  이때 부모의 컴포넌트의 render와 별개로 불필요한 render를 막을 수 있음
  기본값은 true 이며, return false인 경우 재 render를 하지 않음
  성능향상 및 컴포넌트 최적화에 유용함
````
shouldComponentUpdate(nextProps, nextState) {

  return false;
}
````

## componentWillReceiveProps
- 컴포넌트가 새로운 props를 받게 될 때 호출 - state가 props에 따라 변해야 하는 로직을 작성, 새로 받게 될 props는 nextProps로 조회가 가능하다. 16.3버전부터 deprecated

## componentWillUnmount
- 컴포넌트가 더 이상 필요하지 않게 될 때 호출 - setTimeOut , 이벤트 제거 할때 주로 사용

## componentDidCatch
- 컴포넌트가 render 될 때 에러가 발생시 호출 - render시 에러가 발생하게 되면 react는 크래쉬되어 버리는데 해당 API를 사용하여 this.state.error를 true로 변경하게 되면 개발화면에서는 에러 메세지를 따로 띄울 수 있으며 프로덕션에선 빈페이지가 노출됨
  
## static getDerivedStateFromProps()
- props 로 받아온 값을 state 로 동기화 하는 작업을 해줘야 하는 경우에 사용 - setState를 하는건 아님
- componentWillReceiveProps를 대처할 수 있음
````
static getDerivedStateFromProps(nextProps, prevState) {

}
````


## getSnapshotBeforeUpdate()
- DOM 변화가 일어나기 직전의 DOM 상태를 가져오고, 여기서 리턴하는 값은 componentDidUpdate 에서 3번째 파라미터로 받아올 수 있음
- componentWillUpdate를 대처할 수 있음
- 순서 : render -> getSnapshotBeforeUpdate() -> 실제 DOM 에 변화 발생 -> componentDidUpdate
