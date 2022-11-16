export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'Hailey',
    },
    content: '첫 번째 게시글',
    Images: [{
      src: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788959897094.jpg',
    }, {
      src: 'http://image.yes24.com/goods/77283734/XL',
    }, {
      src: 'http://image.yes24.com/goods/114906802/XL',
    }],
    Comments: [{
      User: {
        nickname: 'nero',
      },
      content: '안녕하세요 잘 보고 갑니다~',
    }, {
      User: {
        nickname: 'hero',
      },
      content: '점심 뭐 먹을까용~',
    }]
  }],
  imagePaths: [],
  postAdded: false,
};

// 오타 방지를 위해 변수로 빼준다.
const ADD_POST = 'ADD_POST';

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: 'Hailey',
  },
  Images: [],
  Comments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        // 가장 앞에 붙여야 게시글 최상단에 올라간다.
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
