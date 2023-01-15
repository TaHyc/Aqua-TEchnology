import { createSlice } from '@reduxjs/toolkit'


const initialState = {

}

export const stateProfile = createSlice({
  name: 'profile',
  initialState,
  reducers: 
[
 {
  "foto": "https://yandex.by/images/search?from=tabbar&text=img&pos=0&img_url=http%3A%2F%2Flh3.googleusercontent.com%2F_X4oEpRu4O-nv0KuFwJQV2zX5SLuwRg9fIM1_Q29L50zDgRd2eLdEr0ZmLVk_cPLA4&rpt=simage&lr=157",
  "title": "Частный бассейн",
  "class": 1,
  "name": "Бассейн на участке",
  "link": "",
  "id": "0"
 },
 {
  "foto": "p12",
  "title": "Частный бассейн",
  "class": 1,
  "name": "Бассейн бетонный Минский район",
  "link": "",
  "id": "1"
 },
 {
  "foto": "p13",
  "title": "Частный бассейн",
  "class": 1,
  "name": "Бассейн плёночный",
  "link": "",
  "id": "2"
 },
 {
  "foto": "p14",
  "title": "Частный бассейн",
  "class": 1,
  "name": "Композиционный бассейн с навесом",
  "link": "",
  "id": "3"
 },
 {
  "foto": "p15",
  "title": "Частный бассейн",
  "class": 1,
  "name": "Частный закрытый бассейн",
  "link": "",
  "id": "4"
 },
 {
  "foto": "p16",
  "title": "Общественные бассейны",
  "class": 2,
  "name": "Санаторий “Радон”",
  "link": "",
  "id": "5"
 },
 {
  "foto": "p17",
  "title": "Общественные бассейны",
  "class": 2,
  "name": "Дворец водных видов спорта, Г. Гомель",
  "link": "",
  "id": "6"
 }
]   
  },
)


export default stateProfile.reducer