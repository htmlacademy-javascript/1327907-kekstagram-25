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

const getArrRandomNumber = (min, max) => {
  const arrRandomNumber = [];
  for (let i = min; i <= max; i++) {
    let a = createRandomNumder(min, max);
    while (arrRandomNumber.includes(a)) {
      a = createRandomNumder(min, max);
    }
    arrRandomNumber.push(a);
  }
  return arrRandomNumber;
};


const QuantityLikes = {min: 15, max: 200};
const QuantityIdComments = {min: 1, max: 100};
const QuantityAvatarPhotos = {min: 1, max: 6};
const QuantityUserName = {min: 1, max: 6};
const QuantityCommentsMessage = {min: 0, max: 5};
const QuantityPhotoCard = 25;
const QuantityCommentCards = {min: 1, max: 3};

const COMMENSTSBASE = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const USERNAMEBASE = ['Артём', 'Фёдор', 'Семён', 'Олёна', 'Лёня', 'Пётр'];

const photoCards = [];
const idCommentsCard = getArrRandomNumber(QuantityIdComments.min, QuantityIdComments.max);


const createCommentsCard = (idComment) => {
  const avatarPhotos = createRandomNumder(QuantityAvatarPhotos.min, QuantityAvatarPhotos.max);
  const CommentsMessage = COMMENSTSBASE[createRandomNumder(QuantityCommentsMessage.min, QuantityCommentsMessage.max)];
  const UserName = USERNAMEBASE[createRandomNumder(QuantityUserName.min, QuantityUserName.max)];
  const commentsCard = {
    id: idComment,
    avatar: 'img/avatar-' + avatarPhotos + '.svg',
    message: CommentsMessage,
    name: UserName,
  };

  return commentsCard;
};


const commentsCards = [];

const createRandomCommentsCard = () => {

  for (let i = 0; i <= idCommentsCard.length - 1; i++) {
    commentsCards[i] =  createCommentsCard();
    commentsCards[i].id = idCommentsCard[i];
  }

  return commentsCards;
};

const randomCommentsCard = createRandomCommentsCard();

const createQuantityCommentCards = () => {

  const arrQuantityCommentCards = randomCommentsCard.splice(0, createRandomNumder(QuantityCommentCards.min, QuantityCommentCards.max));

  return arrQuantityCommentCards;
};


const createPhotoCard = (id, urlPhotoCard) => {

  const likeslPhotoCard = createRandomNumder(QuantityLikes.min, QuantityLikes.max);

  return {
    id,
    url: 'photos/' + urlPhotoCard + '.jpg',
    description: 'Фото Кекса',
    likes: likeslPhotoCard,
    comments: createQuantityCommentCards()
  };
};


const getPhotoCards = () => {
  for (let i = 0; i <= QuantityPhotoCard - 1; i++) {

    photoCards[i] = createPhotoCard(i + 1, i + 1);

  }
  return photoCards;
};

console.log(
  getPhotoCards(),
);

