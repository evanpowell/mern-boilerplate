const ADD_POST = 'ADD_POST';

const initialState = {
  posts: {
    1: {
      id: 1,
      title: 'What a Nice Day',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laboriosam, suscipit natus dolorum officiis dolores laudantium, nihil quia doloremque placeat eius quam repellendus atque odio? Corrupti ratione eos sequi. Consequatur'
    },
    2: {
      id: 2,
      title: 'The Post to End All Posts',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi excepturi deleniti provident minima distinctio nihil ipsam vitae cumque, animi temporibus dolorum suscipit aut sed repellat laborum ad, dolorem numquam? Voluptatibus.'
    },
    3: {
      id: 3,
      title: 'Another Post',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum totam aliquid provident sunt possimus reiciendis, similique modi quae facere saepe tempora culpa rem non minus repudiandae iste veritatis optio ullam.'
    }
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD_POST:
    return { ...state, ...payload }

  default:
    return state
  }
}
