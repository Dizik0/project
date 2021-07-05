import 'regenerator-runtime/runtime';
import '../sass/main.scss';
import './getApiCard';
import './preloader';

import { getCardApi } from './getApiCard';
import onelist from '../template/musicCard.hbs';
const listMain = document.querySelector('.list-main');

const addRender = async () => {
  const { _embedded } = await getCardApi();
  console.log(_embedded);
  listMain.innerHTML = onelist(_embedded.events);
};

addRender();
