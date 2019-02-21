import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

// props : 상위 컴포넌트에서 하위 컴포넌트로 값을 전달
const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '810522',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '나길동',
    'birthday': '910522',
    'gender': '남자',
    'job': '교수'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '노길동',
    'birthday': '200522',
    'gender': '남자',
    'job': '대표'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => { // map을 사용할때 반드시 key를 설정해야함
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div> 
    );
  }
}

export default App;
