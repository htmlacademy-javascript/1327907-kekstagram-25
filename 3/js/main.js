const createRandomNumder = (min, max) => {
  if (max <= min || min < 0) {
    return console.log('Не верный диапазон значений');
  }

  const number = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
};

const inspectMaxLengthString = (string, maxLength) => {
  return maxLength >= string.length;
};

console.log(inspectMaxLengthString('проверяемая строка', 17));

const QUANTITYPHOTOCARD = [1, 25];
const QUANTITYPHOTO = [1, 25];
const QUANTITYLIKES = [15, 200];
const QUANTITYIDCOMMENTS = [1, 200];
const QUANTITYAVATARPHOTOS = [1, 6];
const QUANTITYCOMMENTS = [0, 5];
const QUANTITYUSERNAME = [0, 5];


const COMMENSTSBASE = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const USERNAMEBASE = ['Артём', 'Фёдор', 'Семён', 'Олёна', 'Лёня', 'Пётр'];


console.log(createRandomNumder(QUANTITYPHOTOCARD[0], QUANTITYPHOTOCARD[1]));


// const MASSIVENUMBER = [];
// for (let i = 0; i <= QUANTITYPHOTOCARD[1] -1; i++) {
//   MASSIVENUMBER[i] = i + 1;
// }
// console.log(MASSIVENUMBER);

// const getRandomNamber = () => {
// };


const createPhotoCard = () => {
  const idPhotoCard = createRandomNumder(QUANTITYPHOTOCARD[0], QUANTITYPHOTOCARD[1]);
  const irlPhotoCard = createRandomNumder(QUANTITYPHOTO[0], QUANTITYPHOTO[1]);
  const likeslPhotoCard = createRandomNumder(QUANTITYLIKES[0], QUANTITYLIKES[1]);
  const idCommentsCard = createRandomNumder(QUANTITYIDCOMMENTS[0], QUANTITYIDCOMMENTS[1]);
  const avatarPhotos = createRandomNumder(QUANTITYAVATARPHOTOS[0], QUANTITYAVATARPHOTOS[1]);
  const CommentsMessage = COMMENSTSBASE[createRandomNumder(QUANTITYCOMMENTS[0], QUANTITYCOMMENTS[1])];
  const UserName = USERNAMEBASE[createRandomNumder(QUANTITYUSERNAME[0], QUANTITYUSERNAME[1])];


  return {
    id: idPhotoCard,
    url: 'photos/' + irlPhotoCard + '.jpg',
    description: 'Фото Кекса',
    likes: likeslPhotoCard,
    comments: {
      id: idCommentsCard,
      avatar: 'img/avatar-' + avatarPhotos + '.svg',
      message: CommentsMessage,
      name: UserName,

    }
  };
};

console.log(
  createPhotoCard()
);

